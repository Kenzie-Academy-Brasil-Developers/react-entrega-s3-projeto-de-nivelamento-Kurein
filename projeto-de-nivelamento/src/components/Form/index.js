import "./styles.css";
import { useState } from "react";

function Form({ setProducts, products }) {
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");

  function onSubmitFunction(e) {
    e.preventDefault();

    const obj = { code, name, description, price, discount };
    obj.code = Number(obj.code);
    obj.price = Number(obj.price);
    obj.discount = Number(obj.discount);

    setProducts([...products, obj]);
  }

  return (
    <div>
      <form onSubmit={onSubmitFunction}>
        <input
          placeholder="Código"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <input
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          placeholder="Preço"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          placeholder="Desconto"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
        />
        <button type="submit">Adicionar Produto</button>
      </form>
    </div>
  );
}

export default Form;
