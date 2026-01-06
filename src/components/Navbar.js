import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
      <div className="container py-2">
        <Link className="navbar-brand fw-bold fs-3" to="/">
          <span className="text-primary">Tech</span>
          <span className="text-dark">Solutions</span>
          <span className="text-primary">.</span>
        </Link>

        <button 
          className="navbar-toggler border-0" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center gap-3">
            <li className="nav-item">
              <Link className="nav-link fw-semibold px-3" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold px-3" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold px-3" to="/demo">Demo</Link>
            </li>
            <li className="nav-item">
              <Link 
                className="btn btn-primary px-4 rounded-pill fw-semibold" 
                to="/contact"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;