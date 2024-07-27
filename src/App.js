import './App.css';
import React, { useState, useEffect } from 'react';
import { getSheetsData } from './apiService';
import { DataTable } from './component/DataTable';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getSheetsData()
      .then(response => {
        console.log(response.data);
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


  return (
    <div className="App">
      <header className="App-header">
      <h1>Offset table</h1>
      {data ? <DataTable data={data.values} />: <p>Loading...</p>}
      </header>
    </div>
  );
}

export default App;
