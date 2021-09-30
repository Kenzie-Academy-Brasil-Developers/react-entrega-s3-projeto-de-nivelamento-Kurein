import ProductCard from "../ProductCard";
import "./styles.css";

function ProductList({ products, setProducts }) {
  return (
    <div className="mainCardDiv">
      {products.map((elt, index) => {
        return (
          <ProductCard
            key={index}
            product={elt}
            products={products}
            setProducts={setProducts}
          />
        );
      })}
    </div>
  );
}

export default ProductList;
