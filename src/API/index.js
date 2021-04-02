import axios from 'axios';

let dataObj ={
    dataTime:'',
    titles:[],
    dataArr:[]
}

const sendGetRequest = async () => {
    try {
        const response = await axios.get('https://api.coindesk.com/v1/bpi/historical/close.json');
        dataObj.dataTime = response.data.time.updated;
    
        for (let [key, value] of Object.entries(response.data.bpi)) {
            dataObj.titles.push(key); 
            dataObj.dataArr.push(value)
        }
    } catch (err) {
        console.error(err);
    }
};

sendGetRequest();

  export default dataObj;  