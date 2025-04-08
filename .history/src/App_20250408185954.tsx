import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from './Header';
import CatImage from './CatImage';
import Controls from './Controls';

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const App = () => {
  const [catImage, setCatImage] = useState(null);
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [refreshInterval, setRefreshInterval] = useState(5);

  const fetchCat = async () => {
    try {
      const response = await fetch('https://api.thecatapi.com/v1/images/search');
      const data = await response.json();
      setCatImage(data[0].url);
    } catch (error) {
      console.error('Error fetching cat:', error);
    }
  };

  useEffect(() => {
    fetchCat();
  }, []);

  useEffect(() => {
    let intervalId: number;
    if (autoRefresh) {
      intervalId = setInterval(fetchCat, refreshInterval * 1000);
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [autoRefresh, refreshInterval]);

  return (
    <AppContainer>
      <Header />
      <CatImage imageUrl={catImage} />
      <Controls 
        autoRefresh={autoRefresh}
        refreshInterval={refreshInterval}
        onToggleAutoRefresh={() => setAutoRefresh(!autoRefresh)}
        onRefreshIntervalChange={(e) => setRefreshInterval(Number(e.target.value))}
        onManualRefresh={fetchCat}
      />
    </AppContainer>
  );
};

export default App;