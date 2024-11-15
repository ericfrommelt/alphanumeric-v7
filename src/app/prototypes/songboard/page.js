'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  const [topic, setTopic] = useState('');
  const [lyrics, setLyrics] = useState('');
  const [imageUrls, setImageUrls] = useState({ first: '', second: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setLyrics('');
    setImageUrls({ first: '', second: '' });
    
    try {
      // Generate lyrics
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

      // Generate both images in parallel
      const [firstImageRes, secondImageRes] = await Promise.all([
        fetch('/api/generate-image', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
            lyrics: lyricsData.response,
            style: 'photographic'
          }),
        }),
        fetch('/api/generate-image', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
            lyrics: lyricsData.response,
            style: 'anime'
          }),
        })
      ]);

      if (!firstImageRes.ok || !secondImageRes.ok) 
        throw new Error('Failed to generate images');

      const [firstImageData, secondImageData] = await Promise.all([
        firstImageRes.json(),
        secondImageRes.json()
      ]);

      setImageUrls({
        first: firstImageData.imageUrl,
        second: secondImageData.imageUrl
      });

    } catch (error) {
      console.error('Error:', error);
      setLyrics('Sorry, there was an error generating your content.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.content__wrapper}>
        <div className={styles.content}>
          <div className={styles.header}>
          <div className={styles.meta}>
              <small>Technology: Bedrock, Claude, Stable Diffusion</small>
              <h2 className={styles.title}>Songboard</h2>
            </div>
            <p className={styles.subtitle}>Prompts for songwriters</p>
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
                <div className={styles.imagesContainer}>
                  {imageUrls.first && (
                    <div className={styles.imageWrapper}>
                      <div className={styles.imageContainer}>
                        <Image
                          src={imageUrls.first}
                          alt="Photographic style AI generated artwork"
                          className={styles.image}
                          fill
                          priority
                        />
                      </div>
                    </div>
                  )}
                  {imageUrls.second && (
                    <div className={styles.imageWrapper}>
                      <div className={styles.imageContainer}>
                        <Image
                          src={imageUrls.second}
                          alt="Anime style AI generated artwork"
                          className={styles.image}
                          fill
                          priority
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </main>
  );
}