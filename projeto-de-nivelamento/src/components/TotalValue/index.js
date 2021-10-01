function TotalValue({ cart }) {
  const totalPrice = cart.reduce((accumulator, element) => {
    return accumulator + element.price;
  }, 0);
  const totalDiscount = cart.reduce((accumulator, element) => {
    return accumulator + element.discount;
  }, 0);

  return (
    <div>
      <h1>Preço Total: {totalPrice.toFixed(2)}</h1>
      <p>Desconto: {totalDiscount.toFixed(2)}</p>
    </div>
  );
}

export default TotalValue;
