'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  const [topic, setTopic] = useState('');
  const [lyrics, setLyrics] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setLyrics('');
    setImageUrl('');
    
    try {
      // First generate lyrics
      const lyricsRes = await fetch('/api/generate-lyrics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ topic }),
      });

      if (!lyricsRes.ok) throw new Error('Failed to generate lyrics');
      const lyricsData = await lyricsRes.json();
      setLyrics(lyricsData.response);

      // Then generate image based on lyrics
      const imageRes = await fetch('/api/generate-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ lyrics: lyricsData.response }),
      });

      if (!imageRes.ok) throw new Error('Failed to generate image');
      const imageData = await imageRes.json();
      setImageUrl(imageData.imageUrl);

    } catch (error) {
      console.error('Error:', error);
      setLyrics('Sorry, there was an error generating your content.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={styles.container}>
      <div className={styles.header}>
      <div className={styles.meta}>
              <small>Technology: Bedrock, Claude, Stable Diffusion</small>
              <h1 className={styles.title}>Songboard</h1>
              <p>A moodboard for songwriters</p>
            </div>
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
          {loading ? 'Creating...' : 'Create'}
        </button>
      </form>

      {loading ? (
        <div className={styles.loadingContainer}>
          <div className={styles.loading}>Composing your song...</div>
          <div className={styles.loading}>Creating artwork...</div>
        </div>
      ) : (
        lyrics && (
          <div className={styles.content}>
            <div className={styles.lyrics}>
              {lyrics}
            </div>
            {imageUrl && (
              <div className={styles.imageContainer}>
                <Image
                  src={imageUrl}
                  alt="AI generated artwork for the song"
                  className={styles.image}
                  fill
                  priority
                />
              </div>
            )}
          </div>
        )
      )}
    </main>
  );
}