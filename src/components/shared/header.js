import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { CartIcon } from "../icons";
import styles from "./header.module.scss";

const Header = () => {
  const { itemCount } = useContext(CartContext);

  return (
    <header className={styles.header}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Xendit
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor03"
          aria-controls="navbarColor03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav ml-5">
            <li className="nav-item ml-5">
              <NavLink className="nav-link" activeClassName="active" to="/">
                Store
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/cart">
                <CartIcon /> Cart ({itemCount})
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
