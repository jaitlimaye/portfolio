import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"
import Layout from "../components/layout"
import Seo from "../components/seo"


const IndexPage = () => (
  <Layout>
    <div class="flex m-4">
    <Container fluid >
    
      <div>
        <Row>
          <Col>
            Hi I am,
            
          </Col>
          <Col>
            MY PIC
          </Col>
        </Row>
      </div>
      
    </Container>
    </div>
    
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
