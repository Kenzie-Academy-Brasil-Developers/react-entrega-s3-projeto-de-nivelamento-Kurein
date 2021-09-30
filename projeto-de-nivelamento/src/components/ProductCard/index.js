import "./styles.css";

function ProductCard({ product, products, setProducts }) {
  const { code, description, discount, name, price } = product;

  function removeItem(code) {
    const filteredProducts = products.filter((elt) => {
      return elt.code !== code;
    });

    setProducts(filteredProducts);
  }

  return (
    <div className="cardDiv">
      <h1>Nome: {name}</h1>
      <h2>Código: {code}</h2>
      <h4>Preço: {price}</h4>
      <h4>Desconto: {discount}</h4>
      <p>{description}</p>
      <button onClick={() => removeItem(code)}>Remover</button>
    </div>
  );
}

export default ProductCard;
