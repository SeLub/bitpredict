function SomeBusinessLogic(dataArr){
    let dataArr2 = Array.from(dataArr)
    let bankDayRate = 1+((150/365)/100);
    let startBank = dataArr2[0];
    let dataArrNew =[];
    for (let i = 0; i < dataArr2.length ; i++ ){
        dataArrNew.push(startBank*bankDayRate);
        startBank = startBank*bankDayRate;
    }
    return dataArrNew;
  }
  export default SomeBusinessLogic;