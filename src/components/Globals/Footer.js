import React from "react"
import { Container, Row, Col } from "react-bootstrap"

const Footer = () => {
  return (
    <footer className="footer py-3">
      <Container>
        <Row>
          <Col
            xs={10}
            md={6}
            className="mx-auto text-center text-yellow text-capitalize"
          >
            <h3>
              all rights reserved &copy; {new Date().getFullYear().toString()}
            </h3>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
