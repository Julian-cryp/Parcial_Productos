import { Link } from "react-router-dom";
import "../styles/header.scss"; 
import Home from '../Pages/home';

const Header = () => {
  return (
    <header className="main-header">
      <div className="logo">
        <Link to="/">Tienda De Ropa</Link>
      </div>
      <nav className="nav">
        <Link to="/cart" className="cart-btn">
          🛒 Carrito
        </Link>
      </nav>
    </header>
  );
};

export default Header;
