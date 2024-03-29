import React from 'react'
import Layout from '../components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import Experiencetab from '../components/Experiencetab'
import Gettouch from '../components/Gettouch'
import Headinfo from '../components/Headinfo'
import { Helmet } from 'react-helmet'
class experienceurbian extends React.Component {
  render() {
    return (
      <div className="experienceurbian">
        <Layout>
          <Helmet>
            <title>Urbian Experience Urbian</title>
          </Helmet>
          <Container className="mt-sm-4 pt-sm-3 mb-4 experiencurbian-min">
            <Row>
              <Col sm="12" className="">
                <span className="bred-page">
                  <em>Experience Urbian</em>
                </span>
              </Col>
            </Row>
            <Row className="pt-4">
              <Col sm="12" className="">
                <h2 className="h2">How much time do you have ?</h2>
              </Col>
            </Row>
          </Container>
          <Experiencetab></Experiencetab>
          <Headinfo></Headinfo>
          <Gettouch></Gettouch>
        </Layout>
      </div>
    )
  }
}

export default experienceurbian
