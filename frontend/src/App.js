import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState("Loading...");

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/getData");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setData("Error fetching data");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>{data}</div>
  );
};

export default App;
