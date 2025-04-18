import { Link } from 'react-router-dom'
import Newsletter from '../components/Newsletter'
import product25 from '../assets/Assets/product_25.png' // Import the local image for Kids section

function Home() {
  const popularProducts = [
    {
      id: 1,
      name: 'Floral Maxi Dress',
      price: 3999,
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      id: 2,
      name: 'Pleated Midi Skirt',
      price: 2999,
      image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      id: 3,
      name: 'Modest Blouse Set',
      price: 2499,
      image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    }
  ]

  return (
    <div>
      <div className="hero-section position-relative mb-5" style={{ height: '500px', overflow: 'hidden' }}>
        <img 
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
          alt="Hero" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
          <h1 className="display-4 fw-bold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>Welcome to PickNest</h1>
          <p className="lead" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>Your cozy online shopping destination</p>
        </div>
      </div>

      {/* Special Offer Section */}
      <div className="special-offer my-5 p-4 text-center" style={{ backgroundColor: '#FFE6FA' }}>
        <h2>Special Offer!</h2>
        <p className="lead">Get 20% off on all new arrivals! Use code: NEW20</p>
        <Link to="/women" className="btn btn-primary">Shop Now</Link>
      </div>
      
      {/* Popular Collection */}
      <div className="popular-collection my-5">
        <h2 className="text-center mb-4">Popular in Women's Collection</h2>
        <div className="row">
          {popularProducts.map(product => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card product-card h-100">
                <img src={product.image} className="card-img-top" alt={product.name} style={{ height: '400px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">৳{product.price}</p>
                  <Link to={`/product/${product.id}`} className="btn btn-primary">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Category Cards */}
      <div className="row mt-5">
        <div className="col-md-4">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1525450824786-227cbef70703?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" className="card-img-top" alt="Women's Collection" style={{ height: '250px', objectFit: 'cover' }} />
            <div className="card-body text-center">
              <h3>Women</h3>
              <Link to="/women" className="btn btn-primary">Shop Now</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" className="card-img-top" alt="Men's Collection" style={{ height: '250px', objectFit: 'cover' }} />
            <div className="card-body text-center">
              <h3>Men</h3>
              <Link to="/men" className="btn btn-primary">Shop Now</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src={product25} className="card-img-top" alt="Kids' Collection" style={{ height: '250px', objectFit: 'cover' }} />
            <div className="card-body text-center">
              <h3>Kids</h3>
              <Link to="/kids" className="btn btn-primary">Shop Now</Link>
            </div>
          </div>
        </div>
      </div>

      <Newsletter />
    </div>
  )
}

export default Home