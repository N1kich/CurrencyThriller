
import React, { Component } from 'react'
import { Container, Row , Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class CurrencyCalculator extends Component {
  render() {
    return (
      <Container className = 'my-5 text-center'>
        <Row className="p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <h2 className='display-4 fw-bold lh-1'>
            Today exchange course on dollar is {this.props.usdValue}
          </h2>

          <Form.Group className="mb-5 p-5 pb-0 pe-lg-5 pt-lg-5 align-items-center sr-only">
            <Form.Label>Disabled input</Form.Label>
            <Form.Control className = 'fs-2' placeholder="Disabled input" onKeyPress={(event) => {
        if (!/[0-9]/.test(event.key)) {
          event.preventDefault();
        }
      }} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Disabled select menu</Form.Label>
            <Form.Select disabled>
              <option>Disabled select</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check type="checkbox" label="Can't check this" disabled />
          </Form.Group>
        </Row>
      </Container>
    )
  }
}
