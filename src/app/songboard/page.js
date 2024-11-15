'use client';
import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [topic, setTopic] = useState('');
  const [lyrics, setLyrics] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ topic }),
      });

      if (!res.ok) {
        throw new Error('Failed to generate lyrics');
      }

      const data = await res.json();
      setLyrics(data.response);
    } catch (error) {
      console.error('Error:', error);
      setLyrics('Sorry, there was an error generating your song lyrics.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Song Board</h1>
      </div>
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          className={styles.input}
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="What&apos;s your song about?"
          required
        />
        <button 
          type="submit" 
          className={styles.button}
          disabled={loading}
        >
          {loading ? 'Writing...' : 'Write Song'}
        </button>
      </form>

      {loading && (
        <div className={styles.loading}>
          Composing your lyrics...
        </div>
      )}
      
      {lyrics && (
        <div className={styles.lyrics}>
          {lyrics}
        </div>
      )}
    </main>
  );
}