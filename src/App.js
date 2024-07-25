import './App.css';
import React, { useState, useEffect } from 'react';
import { getExampleData } from './apiService';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getExampleData()
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


  return (
    <div className="App">
      <header className="App-header">
      <h1>React and Spring Boot Integration</h1>
        {data ? <p>{data.message}</p> : <p>Loading...</p>}
      </header>
    </div>
  );
}

export default App;
