import { useState } from 'react'

function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Newsletter subscription:', email)
    setEmail('')
  }

  return (
    <div className="newsletter-section py-5" style={{ backgroundColor: 'var(--secondary-color)' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <h3>Subscribe to Our Newsletter</h3>
            <p>Stay updated with our latest collections and exclusive offers!</p>
            <form onSubmit={handleSubmit} className="d-flex gap-2">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter