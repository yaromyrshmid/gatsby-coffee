import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Product from "./Product"
import Title from "../Globals/Title"
import { Container, Row, Col } from "react-bootstrap"

const Products = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          products: allContentfulCoffeeProduct {
            edges {
              node {
                id
                title
                price
                image {
                  fluid(maxHeight: 426) {
                    src
                    ...GatsbyContentfulFluid
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <section className="py-5">
            <Container>
              <Title title="Our products" />
              <Row>
                {data.products.edges.map(({ node }) => {
                  return <Product key={node.id} product={node} />
                })}
              </Row>
            </Container>
          </section>
        )
      }}
    />
  )
}

export default Products
