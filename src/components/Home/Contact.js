import React from "react"
import Title from "../Globals/Title"
import { Container, Row, Col, Form, Button } from "react-bootstrap"

const Contact = () => {
  return (
    <section className="contact py-5">
      <Container>
        <Title title="Contact us" />
        <Row>
          <Col xs={10} sm={8} md={6} className="mx-auto">
            <Form action="https://formspree.io/mvejegdx" method="POST">
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="name"
                  type="text"
                  id="name"
                  placeholder="John Smith"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  id="email"
                  placeholder="john.smith@email.com"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="7"
                  name="message"
                  id="message"
                  placeholder="Your message"
                />
              </Form.Group>
              <Button
                type="submit"
                className="btn-yellow btn-block text-capitalize mt-4"
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact
