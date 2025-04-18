import { Link } from 'react-router-dom'
import { FaShoppingCart, FaUser } from 'react-icons/fa'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Link className="navbar-brand" to="/">PickNest</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/men">Men</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/women">Women</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/kids">Kids</Link>
            </li>
          </ul>
          <div className="d-flex">
            <Link to="/cart" className="btn btn-link text-dark">
              <FaShoppingCart size={20} />
            </Link>
            <Link to="/login" className="btn btn-link text-dark">
              <FaUser size={20} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar