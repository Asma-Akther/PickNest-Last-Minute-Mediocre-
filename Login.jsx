import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useState } from 'react'

function Login() {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle login/signup logic here
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-center mb-4">{isLogin ? 'Login' : 'Sign Up'}</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              {isLogin && (
                <>
                  <Form.Group className="mb-3">
                    <Form.Check
                      type="checkbox"
                      label="Remember me"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                  </Form.Group>
                  <div className="mb-3">
                    <a href="#" className="text-decoration-none">Forgot Password?</a>
                  </div>
                </>
              )}

              <Button variant="primary" type="submit" className="w-100 mb-3">
                {isLogin ? 'Login' : 'Sign Up'}
              </Button>

              <div className="text-center">
                {isLogin ? (
                  <p>Don't have an account? <Button variant="link" onClick={() => setIsLogin(false)}>Sign Up</Button></p>
                ) : (
                  <p>Already have an account? <Button variant="link" onClick={() => setIsLogin(true)}>Login</Button></p>
                )}
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Login