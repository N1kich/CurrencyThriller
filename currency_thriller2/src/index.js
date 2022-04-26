import React from 'react';
import ReactDOM from 'react-dom';
import aboutUs_logo from './media_sources/aboutUs.png'
import c_t_img from './media_sources/currencyChecker.png'
import calculator_logo from './media_sources/calculator-img.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationMenuBar from './frontend_components/NavigationMenuBar';
import CarouselAboutUs from './frontend_components/CarouselAboutUs_Item';
import CarouselCC from './frontend_components/CarouselCC_Item';
import CurrencyChecker from './frontend_components/CurrencyChecker';
import CurrencyCalculator from './frontend_components/CurrencyCalculator'
import { Carousel,} from 'react-bootstrap';
import convertData from './data_handle_functions/convertData'

let carouselCheckerData = {
  timeout : 5000,
  name : 'CurrencyChecker',
  description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt at eligendi dolore, commodi sapiente mollitia veniam ullam accusamus, soluta illo, corporis accusantium. Molestias nobis cumque est odit esse obcaecati impedit?',
  image : c_t_img,
  btnName: 'Launch Checker',
  width : 530,
  height : 600
}

let carouselCalculatorData = {
  timeout : 5000,
  name: 'CurrencyCalculator',
  description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt at eligendi dolore, commodi sapiente mollitia veniam ullam accusamus, soluta illo, corporis accusantium. Molestias nobis cumque est odit esse obcaecati impedit?',
  image : calculator_logo,
  btnName: 'Launch Calculator',
  width : 470,
  height : 600
}


let dataArray = {

  dateTime:['Today-4','Today-3','Today-2','Today-1','Today'],
  usdValue : ['USD',  70,  75 , 77, 90, 120],
  eurValue: ['EUR', 105, 120, 130, 140, 150],
  jpyValue: ['JPY', 12, 13,14, 15, 16],
  cnyValue: ['CNY', 54, 40,50, 60,39],
  gbpValue: ['GBP', 30, 99, 50, 65, 70],
}

class TestCase extends React.Component {

  render(){

    return (
      <>
        <div>
          <NavigationMenuBar background = 'dark' variant = 'dark' />
        </div>
        <div>
          <Carousel variant = 'dark'>

            <CarouselAboutUs timeout = {5000} about_us = {aboutUs_logo} />

            <CarouselCC timeout = {carouselCheckerData.timeout}
                        name = {carouselCheckerData.name}
                        image = {carouselCheckerData.image}
                        description = {carouselCheckerData.description}
                        btn_name ={carouselCheckerData.btnName}
                        height = {carouselCheckerData.height}
                        width = {carouselCheckerData.width}
                        />

            <CarouselCC timeout = {carouselCalculatorData.timeout}
                        name = {carouselCalculatorData.name}
                        image = {carouselCalculatorData.image}
                        description = {carouselCalculatorData.description}
                        btn_name ={carouselCalculatorData.btnName}
                        height = {carouselCalculatorData.height}
                        width = {carouselCalculatorData.width} />

          </Carousel>
        </div>
        <div>
          <CurrencyChecker dataArray = {dataArray} />
        </div>
        <div>
          <CurrencyCalculator  dataObject = {convertData(dataArray, false)[0]} />
        </div>
      </>
    );
  }
}




ReactDOM.render(
    <TestCase />,
    document.getElementById('root')
);
