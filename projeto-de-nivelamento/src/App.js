import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Form from "./components/Form";
import { initialList } from "./components/InitialList";
import ProductList from "./components/ProductList";
import TotalValue from "./components/TotalValue";

function App() {
  const [products, setProducts] = useState(initialList);
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <Form products={products} setProducts={setProducts} />
      <ProductList
        products={products}
        setProducts={setProducts}
        setCart={setCart}
        cart={cart}
      />
      <div>
        <h1>Carrinho</h1>

        <TotalValue cart={cart} />
        <Cart
          products={products}
          setProducts={setProducts}
          setCart={setCart}
          cart={cart}
        />
      </div>
    </div>
  );
}

export default App;
