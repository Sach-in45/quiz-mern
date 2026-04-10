import React, { useEffect, useState } from 'react';
import API from '../utils/api';
import styles from './History.module.css';

const TOPIC_ICONS = { mongodb: '🍃', express: '⚡', react: '⚛️', node: '🟢' };

export default function History() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({});

  const fetchHistory = async (p = 1) => {
    setLoading(true);
    try {
      const { data } = await API.get(`/quiz/history?page=${p}&limit=10`);
      setResults(data.results);
      setPagination(data.pagination);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchHistory(page); }, [page]);

  const formatDate = (d) => new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  const formatTime = (s) => `${Math.floor(s / 60)}m ${s % 60}s`;

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Quiz History</h1>
        <p className="muted" style={{ fontSize: 14 }}>Your past attempts</p>
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', padding: 60 }}><div className="spinner" /></div>
      ) : results.length === 0 ? (
        <div className={styles.empty}>
          <div style={{ fontSize: 48 }}>🎯</div>
          <p>No quizzes taken yet. Start your first quiz!</p>
        </div>
      ) : (
        <>
          <div className={styles.list}>
            {results.map((r) => (
              <div key={r._id} className={`${styles.card} fade-up`}>
                <div className={styles.cardLeft}>
                  <span className={styles.icon}>{TOPIC_ICONS[r.topic] || '📝'}</span>
                  <div>
                    <div className={styles.cardTopic}>{r.topic.toUpperCase()}</div>
                    <div className={styles.cardMeta}>
                      <span className="mono muted" style={{ fontSize: 12 }}>{r.difficulty}</span>
                      <span className="mono muted" style={{ fontSize: 12 }}>·</span>
                      <span className="mono muted" style={{ fontSize: 12 }}>{formatDate(r.createdAt)}</span>
                      {r.timeTaken && (
                        <>
                          <span className="mono muted" style={{ fontSize: 12 }}>·</span>
                          <span className="mono muted" style={{ fontSize: 12 }}>{formatTime(r.timeTaken)}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className={styles.cardRight}>
                  <div className={styles.score} style={{ color: r.percentage >= 60 ? 'var(--success)' : 'var(--danger)' }}>
                    {r.percentage}%
                  </div>
                  <div className={styles.correct}>{r.correctAnswers}/{r.totalQuestions} correct</div>
                  <span className={`badge ${r.passed ? 'badge-success' : 'badge-danger'}`}>
                    {r.passed ? 'Passed' : 'Failed'}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {pagination.pages > 1 && (
            <div className={styles.pagination}>
              <button
                className="btn-outline"
                disabled={page <= 1}
                onClick={() => setPage(p => p - 1)}
              >← Prev</button>
              <span className="mono muted" style={{ fontSize: 13 }}>Page {page} of {pagination.pages}</span>
              <button
                className="btn-outline"
                disabled={page >= pagination.pages}
                onClick={() => setPage(p => p + 1)}
              >Next →</button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
