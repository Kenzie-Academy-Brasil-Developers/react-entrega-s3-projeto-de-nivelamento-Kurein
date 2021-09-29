import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./styles.css";

function Form({ setProducts, products }) {
  const formSchema = yup.object().shape({
    code: yup.number().typeError("Inserir apenas números"),
    name: yup.string().required("Campo Obrigatório"),
    description: yup.string().required("Campo Obrigatório"),
    price: yup.number().typeError("Inserir apenas números"),
    discount: yup.number().typeError("Inserir apenas números"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  function onSubmitFunction(data) {
    setProducts([...products, data]);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <input placeholder="Código" {...register("code")} />
        {errors.code?.message}
        <input placeholder="Nome" {...register("name")} />
        {errors.name?.message}
        <input placeholder="Descrição" {...register("description")} />
        {errors.description?.message}
        <input placeholder="Preço" {...register("price")} />
        {errors.price?.message}
        <input placeholder="Desconto" {...register("discount")} />
        {errors.discount?.message}
        <button type="submit">Adicionar Produto</button>
      </form>
    </div>
  );
}

export default Form;
