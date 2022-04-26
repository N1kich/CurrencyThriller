import React from 'react'
import { Container, Row , Carousel, Button, Col,} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function CarouselCCal(props) {
  return (
    <Carousel.Item interval={props.timeout}>
          <Container className="col-xxl-8 my-5">
            <Row className="flex-lg-row-reverse align-items-center p-4 pb-0 pe-lg-0 pt-lg-5 rounded-3 border shadow-lg">
              <Col className="col-sm-1 col-lg-6">
                <img src={props.calculator_logo} class="d-block mx-lg-auto img-fluid" width="470" height="600" loading="lazy" alt='calculator_pic' />
              </Col>
              <Col className="">
                <h1 className="display-5 fw-bold lh-1 mb-3">CurrencyCalculator</h1>
                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt at eligendi dolore, commodi sapiente mollitia veniam ullam accusamus, soluta illo, corporis accusantium. Molestias nobis cumque est odit esse obcaecati impedit?</p>
                <Container className="justify-content-center d-md-flex align-items-center">
                  <Button className='btn-lg px-5 fw-bold ' variant='primary'>Launch Calculator</Button>
                </Container>
              </Col>
            </Row>
          </Container>
      </Carousel.Item>
  )
}
