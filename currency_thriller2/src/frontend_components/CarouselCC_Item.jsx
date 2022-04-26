import React, { Component } from 'react'
import { Container, Row , Carousel, Button, Col,} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//width={"530"} height="600"


export default class CarouselCC extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Carousel.Item {...this.props} interval={this.props.timeout}>
        <Container className="col-xxl-8 my-5">
          <Row className="flex-lg-row-reverse align-items-center p-4 pb-0 pe-lg-0 pt-lg-5 rounded-3 border shadow-lg">
            <Col className="col-sm-1 col-lg-6">
              <img src={this.props.image} className="d-block mx-lg-auto img-fluid" width={this.props.width} height={this.props.height} loading="lazy" />
            </Col>
            <Col className="">
              <h1 className="display-5 fw-bold lh-1 mb-3">{this.props.name}</h1>
              <p className="lead">{this.props.description}</p>
              <Container className="justify-content-center d-md-flex align-items-center">
                {/* TODO: render element by button click */}
                <Button className='btn-lg px-5 fw-bold ' variant='primary'  >{this.props.btn_name}</Button>
              </Container>
            </Col>
          </Row>
        </Container>
      </Carousel.Item>
    )
  }
}


