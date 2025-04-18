import { FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>PickNest</h5>
            <p>Your cozy online shopping destination</p>
          </div>
          <div className="col-md-6 text-md-end">
            <h5>Connect With Us</h5>
            <div className="social-icons d-flex justify-content-md-end gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light">
                <FaInstagram size={24} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light">
                <FaFacebook size={24} />
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-light">
                <FaPinterest size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col text-center">
            <p className="mb-0">&copy; 2024 PickNest. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer