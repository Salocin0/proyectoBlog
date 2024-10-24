import { useParams } from "react-router-dom"
import {newsMock} from "../../mocks/newsMock";
import { useState } from "react";
import "./DetalleBlog.css"
import { Link } from "react-router-dom";
const DetalleBlog = () => {
    const { id } = useParams()
    const [blog, setBlog] = useState(...newsMock.filter((blog) => blog.source.id == id));
    console.log(blog);
    
    return (
        <div className="contenedorDetalle">
        <img src={blog.urlToImage} alt={blog.title} className="imagen" />
        <div className="datos">
          <h2 className="titulo">{blog.title}</h2>
          <div className="subtitulo">
            <p className="autor">{blog.author}</p>
            <p>{new Date(blog.publishedAt).toLocaleString("es")}</p>
          </div>
          <p className="description">{blog.description}</p>
          <p className="content">{blog.content}</p>
          <div className="Btn">
          <Link to={`/`} className="verMas">Volver</Link>
          </div>
        </div>
        
      </div>
    )
}

export default DetalleBlog