import React, { Component } from 'react'
import {  Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



export default class TableComponent extends Component {
  constructor(props) {
    super(props);
    this.tdElement = this.tdElement.bind(this);
  }

  tdElement(dataArray) {
    let index = 0;
    return(

        dataArray.map((item) => (<td key= {index++}>{item}</td>))
    )
  }

  render() {
    return (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Currency Names</th>
              {this.props.dataArray.dateTime.map((item)=>(
                <th key ={item}>{item}</th>
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
