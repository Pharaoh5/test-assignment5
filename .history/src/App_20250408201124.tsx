import { useState, useEffect } from 'react';
import styled from 'styled-components';
import CatImage from './components/CatImage';
import Controls from './components/Controls';

const AppContainer = styled.div`
  background-color: #f8f8f8;
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  border-radius: 5px;
`;

const App = () => {
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [refreshInterval, setRefreshInterval] = useState(5);
  const [catImage, setCatImage] = useState(null);

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
      <Controls 
      autoRefresh={autoRefresh} 
      refreshInterval={refreshInterval} 
      onToggleAutoRefresh={() => setAutoRefresh(!autoRefresh)} 
      onRefreshIntervalChange={(value) => setRefreshInterval(value)} 
      onManualRefresh={fetchCat} 
      />
      <CatImage imageUrl={catImage as string | null} />
    </AppContainer>
  );
};

export default App;