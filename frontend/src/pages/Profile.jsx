import React, { useEffect, useState } from 'react';
import API from '../utils/api';
import { useAuth } from '../context/AuthContext';
import styles from './Profile.module.css';

const TOPIC_ICONS = { mongodb: '🍃', express: '⚡', react: '⚛️', node: '🟢' };

export default function Profile() {
  const { user, refreshUser } = useAuth();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ name: '', password: '', confirm: '' });
  const [msg, setMsg] = useState('');
  const [err, setErr] = useState('');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    API.get('/users/profile')
      .then(({ data }) => { setProfile(data); setForm(f => ({ ...f, name: data.user.name })); })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const handleSave = async (e) => {
    e.preventDefault();
    setMsg(''); setErr('');
    if (form.password && form.password !== form.confirm) return setErr('Passwords do not match');
    setSaving(true);
    try {
      const payload = { name: form.name };
      if (form.password) payload.password = form.password;
      await API.put('/users/profile', payload);
      await refreshUser();
      setMsg('Profile updated successfully!');
      setForm(f => ({ ...f, password: '', confirm: '' }));
    } catch (ex) {
      setErr(ex.response?.data?.message || 'Update failed');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div style={{ textAlign: 'center', padding: 80 }}><div className="spinner" /></div>;

  const { user: profileUser, topicStats, recentResults } = profile || {};
  const avgScore = profileUser?.averageScore || 0;

  return (
    <div className={styles.page}>
      {/* User header */}
      <div className={styles.userHeader}>
        <div className={styles.avatar}>{profileUser?.name?.[0]?.toUpperCase()}</div>
        <div>
          <h1 className={styles.name}>{profileUser?.name}</h1>
          <p className="mono muted" style={{ fontSize: 13 }}>{profileUser?.email}</p>
        </div>
      </div>

      {/* Stats cards */}
      <div className={styles.statsGrid}>
        {[
          { label: 'Quizzes Taken', val: profileUser?.totalQuizzes || 0 },
          { label: 'Best Score', val: `${profileUser?.bestScore || 0}%` },
          { label: 'Average Score', val: `${avgScore}%` }
        ].map(({ label, val }) => (
          <div key={label} className={styles.statCard}>
            <div className={styles.statVal}>{val}</div>
            <div className={styles.statLabel}>{label}</div>
          </div>
        ))}
      </div>

      <div className={styles.grid2}>
        {/* Topic Performance */}
        {topicStats?.length > 0 && (
          <div className="card">
            <div className={styles.cardTitle}>Topic Performance</div>
            {topicStats.map((t) => (
              <div key={t._id} className={styles.topicRow}>
                <span style={{ fontSize: 18 }}>{TOPIC_ICONS[t._id]}</span>
                <span className={styles.topicName}>{t._id}</span>
                <span className="mono" style={{ color: 'var(--accent2)', fontSize: 13 }}>
                  {Math.round(t.avgScore)}% avg
                </span>
                <span className="mono muted" style={{ fontSize: 12 }}>{t.count}x</span>
              </div>
            ))}
          </div>
        )}

        {/* Recent Results */}
        {recentResults?.length > 0 && (
          <div className="card">
            <div className={styles.cardTitle}>Recent Quizzes</div>
            {recentResults.map((r) => (
              <div key={r._id} className={styles.recentRow}>
                <span style={{ fontSize: 16 }}>{TOPIC_ICONS[r.topic]}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>{r.topic}</div>
                  <div className="mono muted" style={{ fontSize: 11 }}>{r.difficulty}</div>
                </div>
                <span className={styles.recentScore} style={{ color: r.percentage >= 60 ? 'var(--success)' : 'var(--danger)' }}>
                  {r.percentage}%
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Edit Profile */}
      <div className="card" style={{ marginTop: 20, maxWidth: 460 }}>
        <div className={styles.cardTitle}>Edit Profile</div>
        {msg && <div style={{ color: 'var(--success)', fontSize: 13, marginBottom: 12 }}>{msg}</div>}
        {err && <div className="error-msg">{err}</div>}
        <form onSubmit={handleSave} className={styles.form}>
          <div className={styles.field}>
            <label>Name</label>
            <input value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} required />
          </div>
          <div className={styles.field}>
            <label>New Password (optional)</label>
            <input type="password" placeholder="Leave blank to keep current" value={form.password} onChange={e => setForm(f => ({ ...f, password: e.target.value }))} />
          </div>
          {form.password && (
            <div className={styles.field}>
              <label>Confirm Password</label>
              <input type="password" placeholder="Repeat new password" value={form.confirm} onChange={e => setForm(f => ({ ...f, confirm: e.target.value }))} />
            </div>
          )}
          <button type="submit" className="btn-primary" style={{ marginTop: 8 }} disabled={saving}>
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
        </form>
      </div>
    </div>
  );
}
