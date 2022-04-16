import React, { useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationMenuBar from './frontend_components/NavigationMenuBar';
import CarouselComponent from './frontend_components/CarouselComponent';
import CurrencyChecker from './frontend_components/CurrencyChecker';
import CurrencyCalculator from './frontend_components/CurrencyCalculator'
import ConvertDataToRechart from './data_handle_functions/convert_data_rechart'


// const dataForChart = [
//   {
//     name: 'Page A',
//     uv: 4000,
//     pv: 2400,
//     amt: 123215415123,
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

let dataArray = {

  dateTime:['Today-4','Today-3','Today-2','Today-1','Today'],
  usdValue : ['USD',  70,  75 , 77, 90, 120],
  eurValue: ['EUR', 105, 120, 130, 140, 150],
  jpyValue: ['JPY', 12, 13,14, 15, 16],
  cnyValue: ['CNY', 54, 40,50, 60,39],
  gbpValue: ['GBP', 30, 99, 50, 65, 70],
}

let tableHeader = {
  headers : ['CurrencyName'],
  dateTimeHeader : dataArray.dateTime,
}



class TestCase extends React.Component {

  render(){

    return (
      <>
        <div>
          <NavigationMenuBar background = 'dark' variant = 'dark' />
        </div>
        <div>
          <CarouselComponent />
        </div>
        <div>
          <CurrencyChecker dataArray = {dataArray} tableHeader = {tableHeader}/>
        </div>
        <div>
          <CurrencyCalculator usdValue = '856' />
        </div>
      </>
    );
  }
}




ReactDOM.render(
    <TestCase />,
    document.getElementById('root')
);
