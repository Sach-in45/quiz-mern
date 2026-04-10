const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');

async function callOpenRouter(prompt, apiKey) {
  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
      'HTTP-Referer': 'http://localhost:3000',
      'X-Title': 'QuizMERN'
    },
    body: JSON.stringify({
      model: 'meta-llama/llama-3.3-70b-instruct:free',
      messages: [
        {
          role: 'system',
          content: 'You only output raw valid JSON. No markdown. No explanation. No code blocks. Only JSON.'
        },
        { role: 'user', content: prompt }
      ],
      temperature: 0.6,
      max_tokens: 3000
    })
  });

  if (!response.ok) {
    const err = await response.json();
    throw new Error(err?.error?.message || 'OpenRouter failed');
  }

  const data = await response.json();
  const text = data?.choices?.[0]?.message?.content || '';
  console.log('Raw AI response:', text.slice(0, 300));
  return text;
}

function parseQuestions(raw, topic, difficulty, offset) {
  let cleaned = raw.replace(/```json/gi, '').replace(/```/gi, '').trim();
  const start = cleaned.indexOf('[');
  const end = cleaned.lastIndexOf(']');
  if (start === -1 || end === -1) throw new Error('No JSON array found');
  cleaned = cleaned.slice(start, end + 1);

  const arr = JSON.parse(cleaned);
  if (!Array.isArray(arr)) throw new Error('Not an array');

  return arr
    .filter(q =>
      q.question && typeof q.question === 'string' &&
      Array.isArray(q.options) && q.options.length === 4 &&
      typeof q.correctAnswer === 'number' &&
      q.correctAnswer >= 0 && q.correctAnswer <= 3
    )
    .map((q, i) => ({
      _id: `ai_${Date.now()}_${offset + i}`,
      question: q.question.trim(),
      options: q.options.map(String),
      correctAnswer: Number(q.correctAnswer),
      explanation: q.explanation || '',
      topic,
      difficulty,
      points: difficulty === 'hard' ? 20 : difficulty === 'medium' ? 15 : 10,
      aiGenerated: true
    }));
}

function makePrompt(topic, difficulty, count, set) {
  const topics = {
    mongodb: 'MongoDB database (collections, documents, CRUD, aggregation pipeline with $match $group $lookup, Mongoose ODM, indexes)',
    express: 'Express.js (routes, middleware, app.use, req res next, REST API design, error handling, Router)',
    react: 'React (functional components, useState, useEffect, useRef, useMemo, useCallback, props, JSX, React Router v6)',
    node: 'Node.js (event loop, require, fs module, streams, npm, async await, process env, EventEmitter, path module)'
  };
  const diffs = {
    easy: 'beginner — simple definitions and basic syntax',
    medium: 'intermediate — practical real-world usage',
    hard: 'advanced — internals, tricky edge cases, performance'
  };

  return `Generate ${count} multiple choice questions about ${topics[topic] || topic}.
Difficulty: ${diffs[difficulty] || difficulty}.
Question set number: ${set} (make all questions unique from other sets).

Return ONLY a JSON array like this (no other text):
[
  {
    "question": "What does res.json() do in Express?",
    "options": ["Reads JSON from request", "Sends JSON response", "Parses JSON body", "Validates JSON schema"],
    "correctAnswer": 1,
    "explanation": "res.json() sends a JSON formatted response to the client."
  }
]

Generate exactly ${count} items now:`;
}

router.post('/generate', protect, async (req, res) => {
  const { topic, difficulty } = req.body;
  const TARGET = 10;

  if (!topic || !difficulty) {
    return res.status(400).json({ success: false, message: 'Topic and difficulty required' });
  }

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ success: false, message: 'OpenRouter API key not configured' });
  }

  let allQuestions = [];

  // Call AI in 2 batches of 5 to ensure we get enough
  for (let set = 1; set <= 2; set++) {
    try {
      console.log(`🤖 Batch ${set}/2: Requesting 5 questions for ${topic}/${difficulty}`);
      const prompt = makePrompt(topic, difficulty, 5, set);
      const raw = await callOpenRouter(prompt, apiKey);
      const questions = parseQuestions(raw, topic, difficulty, allQuestions.length);

      // Deduplicate
      const existing = new Set(allQuestions.map(q => q.question.toLowerCase().trim()));
      const unique = questions.filter(q => !existing.has(q.question.toLowerCase().trim()));

      allQuestions = [...allQuestions, ...unique];
      console.log(`✅ Batch ${set}: got ${unique.length} valid. Total: ${allQuestions.length}/${TARGET}`);

      // Small delay between batches
      if (set < 2) await new Promise(r => setTimeout(r, 500));

    } catch (err) {
      console.error(`❌ Batch ${set} failed:`, err.message);
    }
  }

  // If still not enough, try one more big request
  if (allQuestions.length < TARGET) {
    try {
      const needed = TARGET - allQuestions.length;
      console.log(`🔄 Final attempt: requesting ${needed} more questions`);
      const prompt = makePrompt(topic, difficulty, needed, 3);
      const raw = await callOpenRouter(prompt, apiKey);
      const questions = parseQuestions(raw, topic, difficulty, allQuestions.length);
      const existing = new Set(allQuestions.map(q => q.question.toLowerCase().trim()));
      const unique = questions.filter(q => !existing.has(q.question.toLowerCase().trim()));
      allQuestions = [...allQuestions, ...unique];
      console.log(`✅ Final attempt: got ${unique.length}. Total: ${allQuestions.length}/${TARGET}`);
    } catch (err) {
      console.error('❌ Final attempt failed:', err.message);
    }
  }

  if (allQuestions.length === 0) {
    console.log('❌ AI completely failed - no questions generated');
    return res.status(502).json({ success: false, message: 'AI failed to generate questions' });
  }

  const final = allQuestions.slice(0, TARGET).map((q, i) => ({
    ...q,
    _id: `ai_${Date.now()}_${i}`
  }));

  console.log(`🎯 Sending ${final.length} AI questions to client`);
  res.json({ success: true, count: final.length, questions: final, source: 'openrouter-ai' });
});

module.exports = router;