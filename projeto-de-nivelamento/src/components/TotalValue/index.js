function TotalValue({ products }) {
  const totalPrice = products.reduce((accumulator, element) => {
    return accumulator + element.price;
  }, 0);
  const totalDiscount = products.reduce((accumulator, element) => {
    return accumulator + element.discount;
  }, 0);

  return (
    <div>
      <h1>Preço Total: {totalPrice}</h1>
      <p>Desconto: {totalDiscount}</p>
    </div>
  );
}

export default TotalValue;
