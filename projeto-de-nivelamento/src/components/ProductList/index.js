import ProductCard from "../ProductCard";
import "./styles.css";

function ProductList({ products }) {
  return (
    <div className="mainCardDiv">
      {products.map((elt, index) => {
        return <ProductCard key={index} product={elt} />;
      })}
    </div>
  );
}

export default ProductList;
