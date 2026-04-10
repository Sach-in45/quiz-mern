import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import API from '../utils/api';
import styles from './Results.module.css';

export default function Results() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [leaderboard, setLeaderboard] = useState([]);
  const { useAuth } = require('../context/AuthContext');
  const { user } = useAuth();

  useEffect(() => {
    if (!state?.result) { navigate('/'); return; }
    API.get('/leaderboard?limit=5').then(({ data }) => setLeaderboard(data.leaderboard)).catch(() => {});
  }, [state, navigate]);

  if (!state?.result) return null;

  const { result, topic, difficulty } = state;
  const pct = result.percentage;
  const grade = pct >= 90 ? '🎉 Excellent!' : pct >= 70 ? '👍 Great Job!' : pct >= 50 ? '📚 Good Try!' : '💪 Keep Going!';
  const mins = Math.floor((result.timeTaken || 0) / 60);
  const secs = (result.timeTaken || 0) % 60;

  return (
    <div className={styles.page}>
      <div className={`${styles.inner} fade-up`}>
        {/* Score ring */}
        <div className={styles.ring}>
          <div className={styles.pct}>{pct}%</div>
          <div className={styles.ringSub}>your score</div>
        </div>

        <h2 className={styles.grade}>{grade}</h2>
        <p className="muted" style={{ textAlign: 'center', fontSize: 14, marginBottom: 28 }}>
          You answered {result.correctAnswers} out of {result.totalQuestions} correctly
        </p>

        {/* Breakdown */}
        <div className={styles.breakdown}>
          {[
            { label: 'Correct', val: result.correctAnswers, cls: 'green' },
            { label: 'Wrong', val: result.wrongAnswers, cls: 'red' },
            { label: 'Time', val: `${mins}m ${secs}s`, cls: 'yellow' },
            { label: 'Topic', val: topic?.toUpperCase(), cls: '' },
            { label: 'Difficulty', val: difficulty?.toUpperCase(), cls: '' },
            { label: 'Status', val: result.passed ? 'PASSED ✓' : 'FAILED ✗', cls: result.passed ? 'green' : 'red' }
          ].map(({ label, val, cls }) => (
            <div key={label} className={styles.row}>
              <span className="mono muted" style={{ fontSize: 12 }}>{label}</span>
              <span className={`${styles.val} ${styles[cls] || ''}`}>{val}</span>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className={styles.actions}>
          <Link to={`/quiz?topic=${topic}&difficulty=${difficulty}`} className="btn-primary">
            Retry Quiz
          </Link>
          <Link to="/" className="btn-outline">← Home</Link>
          <Link to="/history" className="btn-outline">My History</Link>
        </div>

        {/* Leaderboard */}
        {leaderboard.length > 0 && (
          <div className={styles.lb}>
            <div className="mono muted" style={{ fontSize: 11, letterSpacing: '0.07em', marginBottom: 12 }}>LEADERBOARD</div>
            {leaderboard.map((entry, i) => (
              <div key={i} className={`${styles.lbRow} ${entry.name === user?.name ? styles.you : ''}`}>
                <span className={`mono muted ${styles.rank}`}>{i + 1}</span>
                <span className={styles.lbName}>
                  {entry.name}
                  {entry.name === user?.name && <span className={styles.youTag}>you</span>}
                </span>
                <span className="mono" style={{ color: 'var(--accent2)', fontSize: 13 }}>{entry.bestScore}%</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
