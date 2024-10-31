import { newsMock } from "../../mocks/newsMock";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const ModificarBlog = () => {
  const { idblog } = useParams();
  const [blog, setBlog] = useState(
    ...newsMock.filter((blog) => blog.source.id == idblog)
  );

  const navigate = useNavigate();

  const [titulo, setTitulo] = useState(blog.title);
  const [imagen, setImagen] = useState(blog.urlToImage);
  const [descripcion, setDescripcion] = useState(blog.description);
  const [contenido, setContenido] = useState(blog.content);

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {
      title: titulo, //un blog (titulo:"un blog")
      description: descripcion,
      content: contenido,
      urlToImage: imagen,
      publishedAt: new Date(),//la fecha de actualizacion
      author: "user1",
    };
    //fetch al back para modificar
    console.log(blog);
    toast.success("Blog modificado");
    navigate("/mis-blogs");
  };

  return (
    <div className="contenedor">
      <form onSubmit={handleSubmit} className="form">
        <h1>Modificar Blog</h1>
        <div className="input">
          <label htmlFor="titulo" className="label">
            Titulo
          </label>
          <input
            type="text"
            id="titulo"
            onChange={(e) => setTitulo(e.target.value)}
            value={titulo}
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
            value={descripcion}
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
            value={contenido}
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
            value={imagen}
          />
        </div>

        <button type="submit" className="boton">
          Modificar
        </button>
      </form>
    </div>
  );
};

export default ModificarBlog;
