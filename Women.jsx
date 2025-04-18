import { useState } from 'react'
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap'

// Import local images
import product1 from '../assets/Assets/product_1.png'
import product2 from '../assets/Assets/product_2.png'
import product4 from '../assets/Assets/product_4.png'
import product5 from '../assets/Assets/product_5.png'
import product6 from '../assets/Assets/product_6.png'
import product7 from '../assets/Assets/product_7.png'
import product8 from '../assets/Assets/product_8.png'
import product9 from '../assets/Assets/product_9.png'
import product10 from '../assets/Assets/product_10.png'

function Women({ addToCart }) {
  const [itemsPerPage, setItemsPerPage] = useState(12)
  const [currentPage, setCurrentPage] = useState(1)

  // Local images array (9 unique images)
  const localImages = [
    product1, product2, product4, product5,
    product6, product7, product8, product9, product10
  ]

  // Product data with updated names
  const products = [
    { id: 1, name: "Women's Product 1", price: 2999, image: localImages[0] },
    { id: 2, name: "Women's Product 2", price: 3499, image: localImages[1] },
    { id: 3, name: "Women's Product 3", price: 2799, image: "https://images.unsplash.com/photo-1494578379344-d6c710782a3d?w=500" },
    { id: 4, name: "Women's Product 4", price: 2599, image: localImages[2] },
    { id: 5, name: "Women's Product 5", price: 899, image: localImages[3] },
    { id: 6, name: "Women's Product 6", price: 1999, image: localImages[4] },
    { id: 7, name: "Women's Product 7", price: 1799, image: localImages[5] },
    { id: 8, name: "Women's Product 8", price: 1599, image: localImages[6] },
    { id: 9, name: "Women's Product 9", price: 1299, image: localImages[7] },
    { id: 10, name: "Women's Product 10", price: 2899, image: localImages[8] },
    { id: 11, name: "Women's Product 11", price: 3299, image: localImages[0] },
    { id: 12, name: "Women's Product 12", price: 1699, image: localImages[1] },
    { id: 13, name: "Women's Product 13", price: 2799, image: localImages[2] },
    { id: 14, name: "Women's Product 14", price: 1899, image: localImages[3] },
    { id: 15, name: "Women's Product 15", price: 3999, image: localImages[4] },
    { id: 16, name: "Women's Product 16", price: 2999, image: localImages[5] },
    { id: 17, name: "Women's Product 17", price: 4299, image: localImages[6] },
    { id: 18, name: "Women's Product 18", price: 1999, image: localImages[7] },
    { id: 19, name: "Women's Product 19", price: 2599, image: localImages[8] },
    { id: 20, name: "Women's Product 20", price: 3799, image: localImages[0] },
    { id: 21, name: "Women's Product 21", price: 2199, image: localImages[1] },
    { id: 22, name: "Women's Product 22", price: 4599, image: localImages[2] },
    { id: 23, name: "Women's Product 23", price: 2899, image: localImages[3] },
    { id: 24, name: "Women's Product 24", price: 3299, image: localImages[4] },
    { id: 25, name: "Women's Product 25", price: 2799, image: localImages[5] },
    { id: 26, name: "Women's Product 26", price: 2399, image: localImages[6] },
    { id: 27, name: "Women's Product 27", price: 4199, image: localImages[7] },
    { id: 28, name: "Women's Product 28", price: 3899, image: localImages[8] },
    { id: 29, name: "Women's Product 29", price: 2599, image: localImages[0] },
    { id: 30, name: "Women's Product 30", price: 3999, image: localImages[1] }
  ]

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <Container>
      <h2 className="mb-4">Women's Collection</h2>
      
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

export default Women