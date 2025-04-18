import { useParams } from 'react-router-dom'
import { useState } from 'react'

function ProductDetails() {
  const { id } = useParams()
  const [quantity, setQuantity] = useState(1)

  // Mock product data
  const product = {
    id,
    name: 'Sample Product',
    price: 79.99,
    description: 'A beautiful modest clothing item perfect for any occasion.',
    sizes: ['S', 'M', 'L', 'XL'],
    image: 'https://via.placeholder.com/400x500'
  }

  const handleAddToCart = () => {
    console.log('Added to cart:', { ...product, quantity })
  }

  return (
    <div className="row">
      <div className="col-md-6">
        <img src={product.image} alt={product.name} className="img-fluid" />
      </div>
      <div className="col-md-6">
        <h2>{product.name}</h2>
        <p className="lead">${product.price}</p>
        <p>{product.description}</p>
        
        <div className="mb-3">
          <label className="form-label">Size</label>
          <select className="form-select">
            {product.sizes.map(size => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>
        
        <div className="mb-3">
          <label className="form-label">Quantity</label>
          <input
            type="number"
            className="form-control"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          />
        </div>
        
        <button className="btn btn-primary" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductDetails