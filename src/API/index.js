import axios from 'axios';


const getAPIdata = async (dataObj) => {
    try {
        const response = await axios.get('https://api.coindesk.com/v1/bpi/historical/close.json');
            
        for (let [key, value] of Object.entries(response.data.bpi)) {
            dataObj.dataDates.push(key); 
            dataObj.dataPrice.push(value)
        }
        dataObj.dataTime = response.data.time.updated;
        return dataObj;
        
    } catch (err) {
        console.error(err);
    }
};

export {getAPIdata}