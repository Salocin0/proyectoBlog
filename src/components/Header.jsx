import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const { isLogged, setIsLogged } = useContext(AuthContext);

  const links = [{ to: "/", text: "inicio" }];
  const linksLogin = [
    { to: "/mis-blogs", text: "Blogs" },
    { to: "/crear-blog", text: "crear Blog" },
  ];
  const linksLogout = [
    { to: "/login", text: "Login" },
    { to: "/register", text: "register" },
  ];

  return (
    <nav className="topnav">
      <div className="links-start">
        {links.map((link) => (
          <Link key={link.to} to={link.to}>
            {link.text}
          </Link>
        ))}
      </div>
      <div className="links-end">
        {isLogged &&
          linksLogin.map((link) => (
            <Link key={link.to} to={link.to}>
              {link.text}
            </Link>
          ))}
        {isLogged && <a onClick={() => setIsLogged(false)}>cerrar</a>}
        {!isLogged &&
          linksLogout.map((link) => (
            <Link key={link.to} to={link.to}>
              {link.text}
            </Link>
          ))}
      </div>
    </nav>
  );
};

export default Header;
