import ProductCard from "../ProductCard";
import "./styles.css";

function ProductList({ products, setCart, cart }) {
  return (
    <div className="mainCardDiv">
      {products.map((elt, index) => {
        return (
          <ProductCard
            key={index}
            product={elt}
            products={products}
            setCart={setCart}
            cart={cart}
          />
        );
      })}
    </div>
  );
}

export default ProductList;
