import React, { useState } from "react"
import Image from "gatsby-image"

import Title from "../Globals/Title"
import { Container, Row, Col, Button } from "react-bootstrap"

const getCategories = items => {
  let tempItems = items.map(item => {
    return item.node.category
  })
  let tempCategories = new Set(tempItems)
  let categories = Array.from(tempCategories)
  categories = ["all", ...categories]
  return categories
}

const Menu = ({ items }) => {
  const [menu, setMenu] = useState(items)
  const [filteredMenu, setFilteredMenu] = useState(items)
  const [categories, setCategories] = useState(getCategories(items))

  const handleItems = category => {
    let tempItems = [...menu]
    if (category === "all") {
      setFilteredMenu(tempItems)
    } else {
      let items = tempItems.filter(({ node }) => node.category === category)
      setFilteredMenu(items)
    }
  }

  return (
    <section className="menu py-5">
      <Container>
        <Title title="best of our menu" />
        {/* categories */}
        <Row className="mb-5">
          <Col xs={10} className="mx-auto text-center">
            {categories.map((category, index) => {
              return (
                <Button
                  type="button"
                  key={index}
                  className="btn-yellow text-capitalize m-3"
                  onClick={() => handleItems(category)}
                >
                  {category}
                </Button>
              )
            })}
          </Col>
        </Row>
        {/* items */}
        {menu.length > 0 ? (
          <Row>
            {filteredMenu.map(({ node }) => {
              return (
                <Col
                  xs={11}
                  md={6}
                  className="my-3 d-flex mx-auto"
                  key={node.id}
                >
                  <div>
                    <Image fixed={node.image.fixed} />
                  </div>
                  <div className="flex-grow-1 px-3">
                    <div className="d-flex justify-content-between">
                      <h6 className="mb-0">
                        <small>{node.title}</small>
                      </h6>
                      <h6 className="mb-0 text-yellow">
                        <small>${node.price}</small>
                      </h6>
                    </div>
                    <p className="text-muted">
                      <small>{node.description.description}</small>
                    </p>
                  </div>
                </Col>
              )
            })}
          </Row>
        ) : (
          <Row>
            <Col xs={10} sm={6} className="mx-auto text-center text-capitalize">
              No items to display
            </Col>
          </Row>
        )}
      </Container>
    </section>
  )
}

export default Menu
