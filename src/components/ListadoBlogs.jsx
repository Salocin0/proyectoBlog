import { newsMock } from "../mocks/newsMock";
import { useState } from "react";
import Blog from "../pages/Home/Blogs";
import BlogAdmin from "../pages/mis-blogs/BlogsAdmin";
const ListadoBlogs = ({ isLogged = false }) => {
  //si es true hardcodeamos si es false mostramos todo
  const [blogs, setBlogs] = useState(newsMock);
  //const [blogsFilter, setBlogsFilter] = useState([]);
  let blogsFilter = blogs
  //fetch al back para traer solo los blogs de este usuario, que la card que use sea la de admin
  //fetch al back para traer todos los blogs de todos los usuarios, que la card sea la de user

  const handleDelete = (id) => {
    console.log("llega",id)
    blogsFilter= blogsFilter.filter((blog)=> !(blog.source.id == id))
    //setBlogsFilter(blogsFilter.filter((blog)=> !(blog.source.id == id)))
    console.log(blogsFilter)
    //fetch para eliminar
  }

  if (isLogged) {
    /*setBlogsFilter(blogs.filter(
      (blog) => blog.author === "Investing.com"
    ))*/

      blogsFilter = blogs.filter(
        (blog) => blog.author === "Investing.com"
      );
     /* setBlogsFilter(blogs.filter(
        (blog) => blog.author === "Investing.com"))*/
    return (
      <>
        {blogsFilter.map((blog) => (
          <BlogAdmin blog={blog} key={blog.source.id} handleDelete={handleDelete} />
        ))}
      </>
    );
  }

  return (
    <>
      {blogs.map((blog) => (
        <Blog blog={blog} key={blog.source.id} />
      ))}
    </>
  );
};

export default ListadoBlogs;
