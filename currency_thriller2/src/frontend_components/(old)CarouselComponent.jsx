import React, { Component } from 'react'
import aboutUs_logo from '../media_sources/aboutUs.png'
import c_t_img from '../media_sources/currencyChecker.png'
import calculator_logo from '../media_sources/calculator-img.png'
import { Container, Row , Carousel, Button, Col,} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CurrencyChecker from './CurrencyChecker';

export default class CarouselComponent extends Component {
  render() {
    return (
      <Carousel variant = 'dark'>


        <Carousel.Item interval={10000}>
          <Container className="my-5 text-center">
            <Row className="p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
              <Col className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                <h1 className="display-4 fw-bold lh-1">About Us</h1>
                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt at eligendi dolore, commodi sapiente mollitia veniam ullam accusamus, soluta illo, corporis accusantium. Molestias nobis cumque est odit esse obcaecati impedit?</p>
                <Container className='justify-content-center align-items-end'>
                  <Button className='btn-lg px-5 fw-bold ' variant='primary' > Get Started</Button>
                </Container>
              </Col>
              <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                  <img className="rounded-lg-3" src={aboutUs_logo} alt="" width="600"/>
              </div>
            </Row>
          </Container>
        </Carousel.Item>


        <Carousel.Item interval={110000}>
        <Container className="col-xxl-8 my-5">
          <Row className="flex-lg-row-reverse align-items-center p-4 pb-0 pe-lg-0 pt-lg-5 rounded-3 border shadow-lg">
            <Col className="col-sm-1 col-lg-6">
              <img src={c_t_img} class="d-block mx-lg-auto img-fluid" width="530" height="600" loading="lazy" />
            </Col>
            <Col className="">
              <h1 className="display-5 fw-bold lh-1 mb-3">CurrencyChecker</h1>
              <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt at eligendi dolore, commodi sapiente mollitia veniam ullam accusamus, soluta illo, corporis accusantium. Molestias nobis cumque est odit esse obcaecati impedit?</p>
              <Container className="justify-content-center d-md-flex align-items-center">
                <Button className='btn-lg px-5 fw-bold ' variant='primary'>Launch Checker</Button>
              </Container>
            </Col>
          </Row>
        </Container>
        </Carousel.Item>


        <Carousel.Item interval={110000}>
          <Container className="col-xxl-8 my-5">
            <Row className="flex-lg-row-reverse align-items-center p-4 pb-0 pe-lg-0 pt-lg-5 rounded-3 border shadow-lg">
              <Col className="col-sm-1 col-lg-6">
                <img src={calculator_logo} class="d-block mx-lg-auto img-fluid" width="470" height="600" loading="lazy" />
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

      </Carousel>
    )
  }
}
