import ProductCard from "../ProductCard";
import "./styles.css";

function Cart({ setCart, cart }) {
  return (
    <div className="mainCardDiv">
      {cart.map((elt, index) => {
        return (
          <ProductCard
            key={index}
            product={elt}
            setCart={setCart}
            cart={cart}
            isCart={true}
          />
        );
      })}
    </div>
  );
}

export default Cart;
