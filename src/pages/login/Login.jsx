import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const { setIsLogged } = useContext(AuthContext);
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (usuario.length > 0 && contraseña.length > 0) {
      setIsLogged(true);
      navigate("/");
    } else {
      alert("complete los campos para iniciar sesion");
    }
  };
  return (
    <div className="contenedorLogin">
      <form className="form">
        <h2>Iniciar sesion</h2>
        <div className="input">
          <label htmlFor="usuario" className="label">Usuario {usuario}</label>
          <input
            type="text"
            id="usuario"
            placeholder="usuario"
            onChange={(e) => setUsuario(e.target.value)}
          />
        </div>
        <div className="input">
          <label htmlFor="contraseña" className="label">Contraseña</label>
          <input
            type="password"
            id="contraseña"
            placeholder="contraseña"
            onChange={(e) => setContraseña(e.target.value)}
          />
        </div>

        <button className="boton" onClick={(e) => handleSubmit(e)}>iniciar sesion</button>
      </form>
    </div>
  );
};

export default Login;
