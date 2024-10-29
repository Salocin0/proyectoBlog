import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import DetalleBlog from "./pages/Home/DetalleBlog";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {AuthProvider} from "./context/AuthContext";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />{" "}
          {/*todos los blogs/ consultar todos los que esten habilitados*/}
          <Route path="/blogs/:id" element={<DetalleBlog />} />
          {/*ver el detalle de 1 blog / consultar 1*/}
          {/*ABMC / CRUD alta baja modificacion y consulta*/}
          <Route path="/crear-blog" element={<></>} />
          {/*form alta*/}
          <Route path="/modificar-blog/:idblog" element={<></>} />
          {/*form modificacion*/}
          {/*borrado fisico: borramos el blog de la base de datos, borrado logico: cambiamos un estado en el blog*/}
          <Route path="/mis-blogs" element={<></>} />
          {/*listado de cards*/}
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
