import React, { Component } from 'react';
import { Container, Row , Carousel, Button, Col,} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



export default class CarouselAboutUs extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Carousel.Item {...this.props} interval={this.props.timeout}>
        <Container className="my-5 text-center">
          <Row className="p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <Col className="col-lg-7 p-3 p-lg-5 pt-lg-3">
              <h1 className="display-4 fw-bold lh-1">About Us</h1>
              <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt at eligendi dolore, commodi sapiente mollitia veniam ullam accusamus, soluta illo, corporis accusantium. Molestias nobis cumque est odit esse obcaecati impedit?</p>
              <Container className='justify-content-center align-items-end'>
                <Button className='btn-lg px-5 fw-bold ' variant='primary'> Get Started</Button>
              </Container>
            </Col>
             <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
              <img className="rounded-lg-3" src={this.props.about_us} alt="aboutUs_logo" width="600"/>
            </div>
          </Row>
        </Container>
      </Carousel.Item>
    )
  }
}
