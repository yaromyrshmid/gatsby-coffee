import React from "react"
import Image from "gatsby-image"
import { Col, Card, Button } from "react-bootstrap"

const Product = ({ product }) => {
  return (
    <Col xs={10} sm={8} md={6} lg={4} className="mx-auto my-3">
      <Card style={{ minHeight: "100%" }}>
        <Image fluid={product.image.fluid} className="card-img-top" />
        <Card.Body className="text-center">
          <h6>{product.title}</h6>
          <h6>${product.price}</h6>
          <Button
            className="snipcart-add-item btn-yellow mt-3 text-capitalize"
            data-item-id={product.id}
            data-item-name={product.title}
            data-item-price={product.price}
            data-item-url="https://frosty-hypatia-40f095.netlify.com/"
            data-item-image={product.image.fluid.src}
          >
            add to cart
          </Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Product
