import { NavLink } from "react-router-dom";
import HeaderLogo from "../assets/header-logo.svg";
import InstagramLogo from "../assets/instagram.svg";
import FacebookLogo from "../assets/facebook.svg";
import SearchBtn from "../assets/search.svg";
import Liked from "../assets/liked.svg";
import Cart from "../assets/cart.svg";

const Header = ({ onSearch, searchTerm }) => {
  const handleSearchChange = (e) => {
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <header>
      <div className="container">
        <div className="header-content">
          <div className="header-logo">
            <NavLink to="/">
              <img src={HeaderLogo} alt="" />
            </NavLink>
          </div>

          <nav className="header-nav">
            <NavLink to="/">ALL PRODUCTS</NavLink>
            <NavLink to="/">ABOUT SEEDRA</NavLink>
            <NavLink to="/">OUR BLOG</NavLink>
            <NavLink to="/">CONTACTS</NavLink>
          </nav>

          <div className="header-search">
            <a href="https://www.instagram.com/seedra_seeds/">
              <img src={InstagramLogo} alt="" />
            </a>

            <a href="https://www.facebook.com/seedra.seeds/">
              <img src={FacebookLogo} alt="" />
            </a>

            <form onSubmit={handleSearchSubmit}>
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm || ""}
                onChange={handleSearchChange}
              />
            </form>

            <div className="header-cart">
              <NavLink to="/liked">
                <img src={Liked} alt="" />
              </NavLink>
              <NavLink to="/cart">
                <img src={Cart} alt="" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
