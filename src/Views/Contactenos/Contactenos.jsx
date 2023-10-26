import style from "./Contactenos.module.css";
import FormularioContactenos from "../../Components/formulariocontactenos/FormularioContactenos";
import Direccion from "../../Components/Direccion/Direcion";

const Contactenos = () => {
  return (
    <div className={style.contenedorprincipal}>
      <Direccion />
      <FormularioContactenos />
    </div>
  );
};

export default Contactenos;
