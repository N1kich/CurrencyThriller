
function ConvertDataToRechart(dataArray) {
  // structure of argument object                                             structure of return object
  // let dataArray = {                                                        convertedDataArray = [
  //                                                                            {
  //   dateTime:['Today-4','Today-3','Today-2','Today-1','Today'],                name: 'dateTime value'
  //   usdValue : ['USD','105','102','103',104,105],                              usdValue : single value
  //   eurValue: ['EUR',1,2,3,4,5],                                               eurValue : single value
  //   jpyValue: ['JPY',9,9,9,10,11],                             ------->        jpyValue : single value
  //   cnyValue: ['CNY',54,5,5,6,7],                                              cnyValue : single value
  //   gbpValue: ['GBP', 100, 99, 98,99,95]                                       gbpValue : single value
  // }                                                                           }
  //                                                                             {...}
  //                                                                          ]
  //

    var tempData = Object.assign({},dataArray);

    var temp = new Array();

    var sizeOfDataForChart = dataArray.dateTime.length;

    var dataForChart = new Array();



    for (let index = 0 ; index < sizeOfDataForChart ; index++) {
      for (var key in dataArray) {

        temp.push(dataArray[key][dataArray[key].length - 1 - index]);
      }

      var tempindex = 0;

      for (const tempKey in tempData) {
          tempData[tempKey] = temp[tempindex];
          tempindex++;
        }


      tempindex = 0;

      //console.log(tempData);
      dataForChart.push(Object.assign({},tempData));

      //console.log(dataForChart);
      temp.length = 0;

    }
    dataForChart.reverse();
    return dataForChart;

}

export default ConvertDataToRechart;
