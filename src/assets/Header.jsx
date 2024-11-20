import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <NavLink to="/" className="text-xl">
            Email Authentications
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/simpleregister">Simple Email Register</NavLink>
            </li>
            <li>
              <NavLink to="/login">Log in</NavLink>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
