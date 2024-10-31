import "./../Home/Blogs.css";
import { Link } from "react-router-dom";
const BlogAdmin = ({ blog ,handleDelete}) => {
  console.log(blog);

    const eliminarBlog = () => {
        handleDelete(blog.source.id)

    }

  return (
    <div className="contenedorCard">
      <img src={blog.urlToImage} alt={blog.title} className="imagen" />
      <div className="datos">
        <h2 className="titulo">{blog.title}</h2>
        <div className="subtitulo">
          <p className="autor">{blog.author}</p>
          <p>{new Date(blog.publishedAt).toLocaleString("es")}</p>
        </div>
        <p className="description">{blog.description}</p>
        <Link to={`/modificar-blog/${blog.source.id}`}>
          <button>Modificar</button>
        </Link>
        <button onClick={()=>eliminarBlog()}> Eliminar</button>
      </div>
    </div>
  );
};

export default BlogAdmin;
