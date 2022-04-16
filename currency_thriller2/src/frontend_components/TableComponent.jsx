import React, { Component } from 'react'
import { Container, Row , Carousel, Button, Col, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



export default class TableComponent extends Component {
  constructor(props) {
    super(props);
    this.tdElement = this.tdElement.bind(this);
  }

  tdElement(dataArray) {
    return(

        dataArray.map((item) => (<td>{item}</td>))
    )
  }

  render() {
    return (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>{this.props.tableHeader.headers}</th>
              {this.props.tableHeader.dateTimeHeader.map((item)=>(
                <th>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {this.tdElement(this.props.dataArray.usdValue)}
            </tr>
            <tr>
              {this.tdElement(this.props.dataArray.eurValue)}
            </tr>
            <tr>
              {this.tdElement(this.props.dataArray.jpyValue)}
            </tr>
            <tr>
              {this.tdElement(this.props.dataArray.cnyValue)}
            </tr>
            <tr>
              {this.tdElement(this.props.dataArray.gbpValue)}
            </tr>
          </tbody>
        </Table>
    )
  }
}
