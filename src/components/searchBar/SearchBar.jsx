import React, { useEffect, useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const data = await fetch("https://fakestoreapi.com/products/");
      const response = await data.json();
      setProducts(response);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(products);

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    // const inputValue = e.target.value.trim().toLowerCase();
    const inputVal = e.target.value.trim().toLowerCase();

    setSearchTerm(inputVal);
  };

  const filteredData = products.filter((item) =>
    item.title.toLowerCase().includes(searchTerm)
  );

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="search"
          value={searchTerm}
          onChange={handleChange}
        />
        {filteredData.map((item, ind) => (
          <li key={ind}>{item.title}</li>
        ))}
      </div>
    </>
  );
};

export default SearchBar;
