import { toast } from "react-toastify";
import { useState } from "react";
const Register = () => {
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [contraseña2, setContraseña2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(usuario === "" || email === "" || fecha === "" || contraseña === "" || contraseña2 === "") {
        toast.error("complete los campos para continuar");
    }else{
        if (contraseña === contraseña2 ) {
            const data = {
              usuario: usuario,
              email,
              fecha,
              contraseña,
            };
            console.log(data);
            toast.success("Usuario creado");
          } else {
            toast.error("Las contraseñas no coinciden");
          }
    }
  };

  return (
    <div className="contenedor">
    <form onSubmit={handleSubmit} className="form">
      <h1>Crear Blog</h1>
      <div className="input">
        <label htmlFor="usuario" className="label">
          Usuario
        </label>
        <input
          type="text"
          id="usuario"
          onChange={(e) => setUsuario(e.target.value)}
        />
      </div>
      <div className="input">
        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input">
        <label htmlFor="fecha" className="label">
          Fecha de nacimiento
        </label>
        <input
          type="date"
          id="fecha"
          onChange={(e) => setFecha(e.target.value)}
        />
      </div>
      <div className="input">
        <label htmlFor="pass" className="label">
          Contraseña
        </label>
        <input
          type="password"
          id="pass"
          onChange={(e) => setContraseña(e.target.value)}
        />
      </div>
      <div className="input">
        <label htmlFor="pass2" className="label">
          Repetir Contraseña
        </label>
        <input
          type="password"
          id="pass2"
          onChange={(e) => setContraseña2(e.target.value)}
        />
      </div>

      <button type="submit" className="boton">
        Crear Blog
      </button>
    </form>
    </div>
    
  );
};

export default Register;
