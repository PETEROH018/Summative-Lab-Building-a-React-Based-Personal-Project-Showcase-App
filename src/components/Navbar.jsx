import { Link, NavLink } from "react-router-dom";
export default function Navbar(){
    return (
          <nav className="sticky-top navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
             <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/products">
                Shoes
              </NavLink>
            </li>
             <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/admin">
                Admin
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
            
        </div>
      </div>
    </nav>
    )
}