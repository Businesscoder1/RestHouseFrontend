// src/components/DataFetcher.js
import React, { useEffect, useState } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend (Node.js server)
    fetch('http://localhost:8000/data')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  return (
    <div>
      <h1>Data from MongoDB</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.name}</li>  // Adjust this according to your schema
        ))}
      </ul>
    </div>
  );
};

export default DataFetcher;
