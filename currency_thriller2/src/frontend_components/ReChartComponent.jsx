import React, { PureComponent } from 'react';
import { Container, Button } from 'react-bootstrap';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';

//var randomColor = Math.floor(Math.random()*16777215).toString(16);

export default class Chart extends PureComponent {

  lineChartGenerate(convertedDataArray){
    const propertyNames = Object.keys(convertedDataArray[0]);
    const newPropertyArray = propertyNames.slice(2);
    return(
      newPropertyArray.map((item) =>(
        <Line type="monotone" dataKey={item} stroke={'#' + Math.floor(Math.random()*16777215).toString(16)} />
      ))
    )

  }

  getMainDataKey(convertedDataArray){
    const propertyNames = Object.keys(convertedDataArray[0]);
    return(
      propertyNames[1]
    );
  }


  render() {
    return (
      <Container>
        <ResponsiveContainer width={"100%"} height={550}>
          <LineChart width={500} height={300} data={this.props.data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="dateTime" padding={{ left: 30, right: 30 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey={this.getMainDataKey(this.props.data)}
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            {this.lineChartGenerate(this.props.data)}
          </LineChart>
        </ResponsiveContainer>
      </Container>

    );
  }
}
