// import styles from "./App.css";
import { Routes, Route } from "react-router-dom";
import Product from "./components/products/product";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
