import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
// import { Link } from 'gatsby'
import './styled.css'
import bannerimg from '../../../assets/images/banner-img.jpg'
class Topsection extends React.Component {
  render() {
    return (
      <Container className="Topsection_min content-wrap  clearfix">
        <Row>
          <Col lg="6" className="text-left">
            <h1 className="h1">Shipping is believing.</h1>
            <p>
              We ask our clients to participate directly with us in an intensely
              collabrative process based on specific KPLs, rapid prototyping,
              and continuous testing and improvement. The result is one combined
              team marking things the right way with fewer project hours
              invested in presentations.
            </p>
          </Col>
          <Col sm="12">
            <img src={bannerimg} className="img-fluid mt-5 mb-3 " alt="#" />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Topsection
