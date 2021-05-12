import { useState, useEffect } from 'react' 

const useFetch = (url, options) => {
    const [status, setStatus] = useState({loading:false, data:undefined, error:undefined})
    
    async function fetchNow(url, options){
        try  {
            setStatus({loading:true})
            let response = await fetch(url, options)
            let dataApi = await response.json()
            let parsetData = await JSON.parse(JSON.stringify(dataApi))
            let labelsArr = await Object.keys(parsetData.bpi)
            let priceArr = await Object.values(parsetData.bpi)
            let dataApp = [labelsArr, priceArr]
            setStatus({loading:false, data:dataApp})
        }
        catch (err) { console.log(err)
            setStatus({loading:false, data:undefined, error:err})
        }

    }
    useEffect( () => { if (url) { fetchNow(url, options) }}
        ,[])
        
    return{...status, fetchNow}
    
}
    export default useFetch