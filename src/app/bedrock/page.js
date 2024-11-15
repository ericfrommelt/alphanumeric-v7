'use client';
import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
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
        body: JSON.stringify({ prompt }),
      });

      if (!res.ok) {
        throw new Error('Failed to generate response');
      }

      const data = await res.json();
      setResponse(data.response);
    } catch (error) {
      console.error('Error:', error);
      setResponse('An error occurred while generating the response.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={styles.container}>
      <h1>AI Prompt Assistant</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <textarea
          className={styles.input}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt here..."
          required
        />
        <button 
          type="submit" 
          className={styles.button}
          disabled={loading}
        >
          {loading ? 'Generating...' : 'Generate Response'}
        </button>
      </form>
      {loading && <div className={styles.loading}>Generating response...</div>}
      {response && (
        <div className={styles.response}>
          <h2>Response:</h2>
          {response}
        </div>
      )}
    </main>
  );
}