import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import { useSelector } from "react-redux";
import LogoEco from "./../src/assets/ecologo.png";
import ImgFace from "./assets/face.svg";
import ImgInsta from "./assets/insta.svg";
import ImgIN from "./assets/linkedin.svg";

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <div>
              <button onClick={openMenu}>&#9776;</button>
            </div>
            <div>
              <Link to="/">
                <img className="imgLogo" src={LogoEco} alt="logo do projeto" />
              </Link>
            </div>
          </div>
          <div className="header-links">
            <a href="cart.html">Cart</a>
            {userInfo ? (
              <Link to="/profile">{userInfo.name}</Link>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <a href="#">Admin</a>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/orders">Orders</Link>
                    <Link to="/products">Products</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
        <aside className="sidebar">
          <h3>Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>
            x
          </button>
          <ul className="categories">
            <li>
              <Link to="/category/Pants">Artesanato</Link>
            </li>

            <li>
              <Link to="/category/Shirts"> Produtos Ecológicos</Link>
            </li>
            <li>
              <Link to="/category/Shirts"> Produtos Veganos</Link>
            </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/category/:id" component={HomeScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
          </div>
        </main>
        <footer className="footer">
          <div className="rodape">
            <div>
              <Link className="link" to="/">
                <img className="imgLogo" src={LogoEco} alt="logo do projeto" />
              </Link>
            </div>
            <div>
              <p className="descriçãoEco">
                Somos mais que um e-commerce. Somos e-co.
              </p>
            </div>
            <div className="imgFooter">
              <div>
                <p className="titulo--redes">Contato:</p>
              </div>
              <div>
                <a href="" target="_blank" rel="noreferrer">
                  <img className="logoFace" src={ImgFace} alt="Imagem da logo do Facebook" />
                </a>
                <a href="/" target="_blank" rel="noreferrer">
                  <img className="logoInsta" src={ImgInsta} alt="Imagem da logo do Instagram" />
                </a>
                <a href="" target="_blank" rel="noreferrer">
                  <img className="logoIN" src={ImgIN} alt="Imagem da logo do LinkedIN" />
                </a>
              </div>
            </div>
          </div>

          <div className="rodape__cc">
            <p> © 2021 | E-co</p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
