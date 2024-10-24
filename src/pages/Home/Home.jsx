import {newsMock} from "../../mocks/newsMock";
import { useState } from "react";
import Blog from "./Blogs";
const Home = () => {
    //useEffect newsapi apikey
    const [blogs, setBlogs] = useState(newsMock);

  return (
    <div>
      <h1>Home</h1>
      {blogs.map((blog) => (
        <Blog blog={blog} key={blog.source.id}/>
      ))}
    </div>
  );
};
export default Home;
