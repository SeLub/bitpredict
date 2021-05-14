import {Line} from 'react-chartjs-2'

  const LineDemo = ({chart}) =>{
        
      const data = {
          labels: chart.lablesChart, 
            datasets: [{
            label: chart.titleChart,
            data: chart.dataChart,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
            }]
      };
    return(
     <Line data={data} />
    )}

export default LineDemo