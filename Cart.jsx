import { useState } from 'react'

function Cart() {
  const [cartItems] = useState([
    { id: 1, name: 'Long Dress', price: 89.99, quantity: 1 },
    { id: 2, name: 'Modest Blouse', price: 49.99, quantity: 2 },
  ])

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  return (
    <div>
      <h2>Shopping Cart</h2>
      <div className="card">
        <div className="card-body">
          {cartItems.map(item => (
            <div key={item.id} className="row mb-3">
              <div className="col-md-6">
                <h5>{item.name}</h5>
              </div>
              <div className="col-md-2">
                ৳{item.price}
              </div>
              <div className="col-md-2">
                Qty: {item.quantity}
              </div>
              <div className="col-md-2">
                ৳{(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
          <hr />
          <div className="text-end">
            <h4>Total: ৳{total.toFixed(2)}</h4>
            <button className="btn btn-primary">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart