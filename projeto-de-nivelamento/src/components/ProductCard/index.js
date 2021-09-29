import "./styles.css";

function ProductCard({ product }) {
  const { code, description, discount, name, price } = product;

  return (
    <div className="cardDiv">
      <h1>Nome: {name}</h1>
      <h2>Código: {code}</h2>
      <h4>Preço: {price}</h4>
      <h4>Desconto: {discount}</h4>
      <p>{description}</p>
    </div>
  );
}

export default ProductCard;
