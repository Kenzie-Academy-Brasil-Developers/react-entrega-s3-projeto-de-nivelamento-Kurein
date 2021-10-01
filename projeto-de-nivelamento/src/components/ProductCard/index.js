import "./styles.css";

function ProductCard({ product, setCart, cart, isCart }) {
  const { code, description, discount, name, price } = product;

  function cartAddItem() {
    setCart([...cart, product]);
  }

  function cartRemoveItem(code) {
    const filteredCart = cart.filter((elt) => {
      return elt.code !== code;
    });

    setCart(filteredCart);
  }

  if (!isCart) {
    return (
      <div className="cardDiv">
        <h1>Nome: {name}</h1>
        <h2>Código: {code}</h2>
        <h2>Preço: {price}</h2>
        <h4>Desconto: {discount}</h4>
        <p>{description}</p>
        <button onClick={cartAddItem}>Adicionar ao Carrinho</button>
      </div>
    );
  }
  if (isCart) {
    return (
      <div className="cardDiv">
        <h1>Nome: {name}</h1>
        <h2>Preço: {price}</h2>
        <h4>Desconto: {discount}</h4>
        <button onClick={() => cartRemoveItem(code)}>
          Remover do Carrinho
        </button>
      </div>
    );
  }
}

export default ProductCard;
