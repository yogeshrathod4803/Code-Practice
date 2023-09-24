import React, { useEffect, useState } from "react";

export default function UseEffect(props) {
  const [data, setData] = useState([]);

  async function getData() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const jsonData = await response.json();
      setData(jsonData);
      console.log(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>Data</h2>
      <button onClick={getData}>Fetch Data</button>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
