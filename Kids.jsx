import { useState } from 'react'
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap'

// Import local images
import product25 from '../assets/Assets/product_25.png'
import product26 from '../assets/Assets/product_26.png'
import product27 from '../assets/Assets/product_27.png'
import product28 from '../assets/Assets/product_28.png'
import product29 from '../assets/Assets/product_29.png'
import product30 from '../assets/Assets/product_30.png'
import product31 from '../assets/Assets/product_31.png'
import product32 from '../assets/Assets/product_32.png'
import product33 from '../assets/Assets/product_33.png'
import product34 from '../assets/Assets/product_34.png'
import product35 from '../assets/Assets/product_35.png'
import product36 from '../assets/Assets/product_36.png'

function Kids({ addToCart }) {
  const [itemsPerPage, setItemsPerPage] = useState(12)
  const [currentPage, setCurrentPage] = useState(1)

  // Local images array (12 unique images)
  const localImages = [
    product25, product26, product27, product28, product29, product30,
    product31, product32, product33, product34, product35, product36
  ]

  // Shuffle and reuse images to create 30 products
  const products = Array.from({ length: 30 }, (_, index) => ({
    id: index + 1,
    name: `Kids Product ${index + 1}`,
    price: 1000 + index * 100, // Example pricing logic
    image: localImages[index % localImages.length] // Reuse images
  }))

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <Container>
      <h2 className="mb-4">Kids' Collection</h2>
      
      <Row className="mb-3">
        <Col md={4}>
          <Form.Group>
            <Form.Label>Show items per page:</Form.Label>
            <Form.Select 
              value={itemsPerPage} 
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
            >
              <option value={12}>12</option>
              <option value={24}>24</option>
              <option value={30}>30</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        {currentItems.map(product => (
          <Col md={3} key={product.id} className="mb-4">
            <Card>
              <Card.Img 
                variant="top" 
                src={product.image}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  <span className="text-primary">৳{product.price}</span>
                </Card.Text>
                <Button 
                  variant="primary"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row className="mt-4">
        <Col className="d-flex justify-content-center">
          <ul className="pagination">
            {Array.from({ length: Math.ceil(products.length / itemsPerPage) }).map((_, index) => (
              <li 
                key={index} 
                className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
              >
                <button
                  className="page-link"
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default Kids