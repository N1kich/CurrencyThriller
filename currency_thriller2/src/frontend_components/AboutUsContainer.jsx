
import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class AboutUsContainer extends Component {
  render() {
    return (
      <>
        <Container className='py-5 text-center '  >
          <Row className='py-lg-5'>
            <div className='col-lg-6 col-md-8 mx-auto'>
              <h1 className='fw-dark'>
                About Us
              </h1>
              <p className='lead text-muted'>
              Album example Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ullam rem explicabo itaque libero commodi suscipit
              eligendi odio non id! Mollitia veniam tempore nisi, totam rem harum natus
              laudantium vel obcaecati? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Libero quidem architecto et aut commodi, sint repellat optio perspiciatis delectus
              non eius tempora repellendus ex inventore. Eaque expedita veritatis officia
              voluptates!

              </p>
            </div>

          </Row>
        </Container>
        <div className='b-example-divider' />
      </>


    )
  }
}
