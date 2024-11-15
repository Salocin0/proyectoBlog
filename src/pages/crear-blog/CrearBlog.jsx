import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const CrearBlog = () => {
  const navigate = useNavigate();
  const backurl = import.meta.env.VITE_BACK_URL
  const [titulo, setTitulo] = useState("");
  const [imagen, setImagen] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [contenido, setContenido] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blog = {
      titulo: titulo, //un blog (titulo:"un blog")
      descripcion: descripcion,
      contenido: contenido,
      imagen: imagen,
      //author: "user1",
    };
    const respuesta = await fetchback(blog);
    if (respuesta){
      toast.success("Blog creado");
      navigate("/mis-blogs");
    }else{
      toast.error("Blog no creado");
    }
    console.log(blog);
  };

  const fetchback = async (blog) => {
    const response = await fetch(`${backurl}blogs/`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    }); // metodo body headers 
    const responsejson = await response.json();
    console.log(responsejson.data);
    if (response.ok) {
      return responsejson.data
    }else{
      return null
    }
  };
  

  return (
    <div className="contenedor">
      <form onSubmit={handleSubmit} className="form">
        <h1>Crear Blog</h1>
        <div className="input">
          <label htmlFor="titulo" className="label">
            Titulo
          </label>
          <input
            type="text"
            id="titulo"
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        <div className="input">
          <label htmlFor="descripcion" className="label">
            Descripcion
          </label>
          <input
            type="text"
            id="descripcion"
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>
        <div className="input">
          <label htmlFor="contenido" className="label">
            Contenido
          </label>
          <textarea
            name=""
            id="contenido"
            onChange={(e) => setContenido(e.target.value)}
            cols={"50"}
            rows={"10"}
          ></textarea>
        </div>
        <div className="input">
          <label htmlFor="imagen" className="label">
            Imagen
          </label>
          <input
            type="text"
            id="imagen"
            onChange={(e) => setImagen(e.target.value)}
          />
        </div>

        <button type="submit" className="boton">
          Crear Blog
        </button>
      </form>
    </div>
  );
};

export default CrearBlog;
