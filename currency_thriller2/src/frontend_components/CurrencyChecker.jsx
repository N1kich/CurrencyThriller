import React, { Component } from 'react'
import { Container, Row , Carousel, Button, Col, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableComponent from './TableComponent';
import ConvertDataToRechart from '../data_handle_functions/convert_data_rechart';
import Chart from '../frontend_components/ReChartComponent'


export default class CurrencyChecker extends Component {

  render() {
    return (
      <Container>
        <Row className='pb-0 pe-lg-0 pt-lg-0 align-items-center rounded-3 border shadow-lg'>
          <TableComponent dataArray = {this.props.dataArray} tableHeader = {this.props.tableHeader} />
          <Chart data = {ConvertDataToRechart(this.props.dataArray)} />
        </Row>

      </Container>
    )
  }
}
