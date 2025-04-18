import { useState } from 'react'
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap'

// Import local images
import product13 from '../assets/Assets/product_13.png'
import product14 from '../assets/Assets/product_14.png'
import product15 from '../assets/Assets/product_15.png'
import product16 from '../assets/Assets/product_16.png'
import product17 from '../assets/Assets/product_17.png'
import product18 from '../assets/Assets/product_18.png'
import product19 from '../assets/Assets/product_19.png'
import product20 from '../assets/Assets/product_20.png'
import product21 from '../assets/Assets/product_21.png'
import product22 from '../assets/Assets/product_22.png'
import product23 from '../assets/Assets/product_23.png'
import product24 from '../assets/Assets/product_24.png'

function Men({ addToCart }) {
  const [itemsPerPage, setItemsPerPage] = useState(12)
  const [currentPage, setCurrentPage] = useState(1)

  // Local images array (12 unique images)
  const localImages = [
    product13, product14, product15, product16, product17, product18,
    product19, product20, product21, product22, product23, product24
  ]

  // Shuffle and reuse images to create 30 products
  const products = Array.from({ length: 30 }, (_, index) => ({
    id: index + 1,
    name: `Men's Product ${index + 1}`,
    price: 2000 + index * 200, // Example pricing logic
    image: localImages[index % localImages.length] // Reuse images
  }))

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <Container>
      <h2 className="mb-4">Men's Collection</h2>
      
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

export default Men