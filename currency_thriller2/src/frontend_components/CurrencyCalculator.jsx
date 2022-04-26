
import React, { Component } from 'react'
import { Container, Row , Form, InputGroup, FormControl, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// prototype of incoming data object
// const dataObject = {
//   name: 'Today',
//   usdValue: 105,
//   eurValue: 120,
//   jpyvalue: 30,
//   cnyValue: 44,
//   gbpValue: 55,
// }

export default class CurrencyCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue : '',
      nameCurrency : 'USD',
    }
    this.OnChange_InputRubles = this.OnChange_InputRubles.bind(this);

    this.onChange_Select = this.onChange_Select.bind(this);

    this.onlyDigitsInput = this.onlyDigitsInput.bind(this);
  }

  // method to capture value from first Input into state --> to translate into second Input
  OnChange_InputRubles(e){

    this.setState({inputValue: e.target.value});

  }
  // // method to capture value from second Input into state --> to translate into first Input
  // OnChange_InputOtherCurrency(e){

  // }

  //method that allows input only digits which not start with 0
  onlyDigitsInput(event){
    if ((!/[0-9]/.test(event.key)) ) {
      event.preventDefault();
    }
    else if (event.target.value === '' && event.key === '0'){
      event.preventDefault();
    }
    //{(e) => !/[0-9]/.onlyDigitsInput(e.key) && e.preventDefault()}
  }

  // method to select the currency into which rubles will be converted
  onChange_Select(e){

    this.setState({nameCurrency: e.target.value});

  }

  //fill the Select option with propertyNames of dataObject
  generateSelectOption(dataObject){
    const propertyNames = Object.keys(dataObject);

    // prevent warning or other option to navigate through Select elements
    let keyIndexes = 0;
    //

    propertyNames.splice(0,1);
    return(
      propertyNames.map((item) =>(
        <option className='fs-6' value = {item} key ={keyIndexes++} >{item}</option>
      ))
    )
  }

  render() {
    //convert full currency name string into usdValue ---> USD JPY GBP etc
    const currencyAcronym = this.state.nameCurrency;
    const currencyValue = this.props.dataObject[this.state.nameCurrency];
    return (
      <Container className = 'my-5 text-center'>
        <Row className="p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <h2 className='display-4 fw-bold lh-1'>
            {this.props.dataObject.dateTime} exchange course on {currencyAcronym} is {currencyValue}
          </h2>

          <Form.Group className="mb-5 p-5 pb-0 me-2 align-items-center justify-content-md-center sr-only">
            <Form.Label className ='display-6 lh-2'>Ruble Input</Form.Label>
              <InputGroup className="mb-3 ">
              <Col xs = {10}>
                <FormControl className = 'fs-3 ' placeholder='Waiting for your input' onKeyPress={this.onlyDigitsInput} onChange ={this.OnChange_InputRubles} value = {this.state.inputValue} />
              </Col>
              <Col className = 'me-2'>
                <Form.Select className = 'fs-3 ms-2  ' align = 'end' onChange= {this.onChange_Select} >
                  {this.generateSelectOption(this.props.dataObject)}
                </Form.Select>
              </Col>
            </InputGroup>
            <Form.Label className = 'display-6 lh-2  '>Converted Ruble Into {currencyAcronym} </Form.Label>
            <Form.Control className = 'fs-2 ' placeholder={currencyAcronym + ' equal value'} value = {this.state.inputValue === ''? '':this.state.inputValue/currencyValue }  />
          </Form.Group>
        </Row>
      </Container>
    )
  }
}
