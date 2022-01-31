import React, { useContext } from "react";
import UserContext from "./Context/UserContext";

const Navbar = () => {
  const { user, login, logout } = useContext(UserContext);

  function btnToggle() {
    return user ? (
      <>
        <h2>Hola, {user.name}</h2>
        <button className="btn" onClick={() => logout()}>
          logout
        </button>
      </>
    ) : (
      <>
        <h2>Bienvenid@</h2>
        <button className="btn" onClick={() => login()}>
          login
        </button>
      </>
    );
  }
  return <nav className="flexNav">{btnToggle()}</nav>;
};
export default Navbar;
