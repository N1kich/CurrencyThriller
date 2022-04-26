function convertData(dataArray, convertMode) {
  // structure of argument object                                             structure of return object
  // let dataArray = {                                                        convertedDataArray = [
  //                                                                            {
  //   dateTime:['Today-4','Today-3','Today-2','Today-1','Today'],                name: 'dateTime value'
  //   usdValue : ['USD','105','102','103',104,105],                              USD : single value
  //   eurValue: ['EUR',1,2,3,4,5],                                               EUR : single value
  //   jpyValue: ['JPY',9,9,9,10,11],                             ------->        JPY : single value
  //   cnyValue: ['CNY',54,5,5,6,7],                                              CNY : single value
  //   gbpValue: ['GBP', 100, 99, 98,99,95]                                       GBY : single value
  // }                                                                           }
  //                                                                             {...}
  //                                                                          ]
  //
  // convertMode == true - for rechart, false for calculator

  var iterations = convertMode ? dataArray.dateTime.length : 1;

  var newDataArray = new Array();

  for (let index = 0; index < iterations; index++) {

    var tempObject = new Object();

    for (const prop in dataArray) {
      if (prop === 'dateTime') {

        tempObject[prop] = dataArray[prop][dataArray[prop].length-1-index];

      } else {

        var shortPropName = prop.slice(0,3).toLocaleUpperCase();

        tempObject[shortPropName] = dataArray[prop][dataArray[prop].length-1-index];

      }
    }

    newDataArray.push(tempObject);
  }



  if (convertMode) {
    return newDataArray.reverse();
  } else {
    return newDataArray;
  }
}

export default convertData;
