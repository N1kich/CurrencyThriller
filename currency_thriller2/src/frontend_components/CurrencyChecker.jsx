import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableComponent from './TableComponent';
import convertData from '../data_handle_functions/convertData';
import Chart from '../frontend_components/ReChartComponent'



export default function CurrencyChecker(props) {
  return (
    <Container>
      <Row className='pb-0 pe-lg-0 pt-lg-0 align-items-center rounded-3 border shadow-lg'>
        <TableComponent dataArray = {props.dataArray} />
        <Chart data = {convertData(props.dataArray, true)} />
      </Row>
    </Container>
  )
}

// export default class CurrencyChecker extends Component {

//   render() {
//     return (
//       <Container>
//         <Row className='pb-0 pe-lg-0 pt-lg-0 align-items-center rounded-3 border shadow-lg'>
//           <TableComponent dataArray = {this.props.dataArray} tableHeader = {this.props.tableHeader} />
//           <Chart data = {convertData(this.props.dataArray, true)} />
//         </Row>
//       </Container>
//     )
//   }
// }
