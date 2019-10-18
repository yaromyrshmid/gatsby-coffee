import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Button } from "react-bootstrap"

import Title from "../Globals/Title"

const Info = () => {
  return (
    <section className="py-5">
      <Container>
        <Title title="our story" />
        <Row>
          <Col xs={10} sm={7} className="mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
              iste dolorem laudantium. Expedita tenetur, ad nisi molestias neque
              commodi consectetur temporibus aspernatur possimus repellat quis,
              quibusdam corporis, vel sapiente esse obcaecati? Soluta facilis
              recusandae culpa assumenda fugiat beatae ratione eum!
            </p>
            <Link to="/about">
              <Button className="text-uppercase btn-yellow">About us</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Info
