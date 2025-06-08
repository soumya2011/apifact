import { useState } from 'react';
import './App.css';

function App() {
  const [fact, setFact] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getCatFact = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('https://catfact.ninja/fact');
      if (!response.ok) throw new Error('Failed to fetch fact');
      const data = await response.json();
      setFact(data.fact);
    } catch (err) {
      setError('Something went wrong. Try again!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '5rem' }}>
      <h1>🐱 Random Cat Fact</h1>
      <button onClick={getCatFact}>Get Cat Fact</button>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {fact && <p style={{ marginTop: '1rem' }}>{fact}</p>}
    </div>
  );
}

export default App;
