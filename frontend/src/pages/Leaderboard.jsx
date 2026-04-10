import React, { useEffect, useState } from 'react';
import API from '../utils/api';
import { useAuth } from '../context/AuthContext';
import styles from './Leaderboard.module.css';

const TOPICS = ['all', 'mongodb', 'express', 'react', 'node'];

export default function Leaderboard() {
  const { user } = useAuth();
  const [board, setBoard] = useState([]);
  const [topic, setTopic] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const q = topic === 'all' ? '' : `?topic=${topic}`;
    API.get(`/leaderboard${q}&limit=20`)
      .then(({ data }) => setBoard(data.leaderboard))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [topic]);

  const medal = (i) => ['🥇', '🥈', '🥉'][i] || `${i + 1}`;

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Leaderboard</h1>
        <p className="muted" style={{ fontSize: 14 }}>Top players globally</p>
      </div>

      <div className={styles.filters}>
        {TOPICS.map((t) => (
          <button
            key={t}
            className={`${styles.filter} ${topic === t ? styles.filterActive : ''}`}
            onClick={() => setTopic(t)}
          >
            {t.toUpperCase()}
          </button>
        ))}
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', padding: 60 }}><div className="spinner" /></div>
      ) : board.length === 0 ? (
        <div className={styles.empty}>No results yet for this topic.</div>
      ) : (
        <div className={styles.list}>
          {board.map((entry, i) => (
            <div
              key={i}
              className={`${styles.row} ${i < 3 ? styles.top : ''} ${entry.name === user?.name ? styles.you : ''} fade-up`}
            >
              <div className={styles.rankCol}>
                <span className={styles.rankNum}>{medal(i)}</span>
              </div>
              <div className={styles.avatar}>
                {entry.name?.[0]?.toUpperCase() || '?'}
              </div>
              <div className={styles.info}>
                <div className={styles.name}>
                  {entry.name}
                  {entry.name === user?.name && <span className={styles.youTag}>you</span>}
                </div>
                <div className="mono muted" style={{ fontSize: 12 }}>{entry.totalQuizzes} quizzes</div>
              </div>
              <div className={styles.scores}>
                <div className={styles.best}>{entry.bestScore}%</div>
                <div className="mono muted" style={{ fontSize: 11 }}>avg {entry.avgPercentage}%</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
