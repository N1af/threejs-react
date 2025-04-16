import React, { useEffect, useState } from 'react';
import axios from 'axios';


const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // Fetch data from the Node.js API
    axios.get('http://localhost:5000/api/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching data!', error)
      });
  }, []);

  return (
   <div>
    <h1>Data from mySql</h1>
    <ul>
      {data.map((item) => {
        <li key={item.id}>{item.name} - {item.age}</li>
      })}
    </ul>
   </div>
  );
}

export default App;
