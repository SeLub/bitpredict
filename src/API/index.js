import { useState, useEffect } from 'react' 

const useFetch = (url, options) => {
    const [status, setStatus] = useState({ loading:false, data:undefined, error:undefined})
    function fetchNow(url, options){
        setStatus({loading:true})
        fetch(url, options)
            .then(response => response.json())
            .then( (value) => {
                    let dataObj  = JSON.parse(JSON.stringify(value))
                    let apiData ={}
                    apiData.updated = Intl.DateTimeFormat("fr-FR",
                                      {day:"2-digit", month:"2-digit", year:"2-digit", hour:"2-digit", minute:"2-digit"}
                                      ).format(new Date(dataObj.time.updatedISO)) 
                    apiData.currency = 'USD'
                    apiData.data = [];apiData.data[0] = [];apiData.data[1] = []
                    
                        for (let prop in dataObj.bpi){
                            //  console.log(Intl.DateTimeFormat("fr-FR").format(new Date(prop)))
                            apiData.data[0].push(new Date(prop))
                            apiData.data[1].push(dataObj.bpi[prop])
                            }
                    apiData.maxDate = new Date(Math.max(...apiData.data[0]));
                    apiData.minDate = new Date(Math.min(...apiData.data[0]));
                    console.log(apiData)
                    setStatus({loading:false, data:apiData})
             } )
            .catch(error => { setStatus({ loading:false, error:error})});
    }
    useEffect( () => { if (url) { fetchNow(url, options) }}
        ,[])
    return {...status, fetchNow}
}

export default useFetch