import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import { initialList } from "./components/InitialList";
import ProductList from "./components/ProductList";
import TotalValue from "./components/TotalValue";

function App() {
  const [products, setProducts] = useState(initialList);

  return (
    <div className="App">
      <TotalValue products={products} />
      <Form products={products} setProducts={setProducts} />
      <ProductList products={products} />
    </div>
  );
}

export default App;
