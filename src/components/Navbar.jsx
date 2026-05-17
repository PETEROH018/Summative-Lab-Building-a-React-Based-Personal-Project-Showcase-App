import { Link, NavLink } from "react-router-dom";
export default function Navbar(){
    return (
     <nav className="sticky-top navbar navbar-expand-lg navbar-dark shadow-sm py-1 "
               style={{
                    background: 'linear-gradient(90deg, #071536 0%, #1e293b 100%)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)' 
                }}
                >
      <div className="container-fluid text-white">
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
      </div>
    </nav>
    )
}