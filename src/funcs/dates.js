const getMinMaxDates = (lablesChart) =>{
            let resaultArray =[]
            lablesChart.forEach(el => {
            resaultArray.push(Date.parse(el))})
            
               const MinDate = {
                        year: new Date(Math.min.apply(null,resaultArray)).getFullYear(),
                        month: new Date(Math.min.apply(null,resaultArray)).getMonth(),
                        day: new Date(Math.min.apply(null,resaultArray)).getDate(),
                    };
                const MaxDate = {
                        year: new Date(Math.max.apply(null,resaultArray)).getFullYear(),
                        month: new Date(Math.max.apply(null,resaultArray)).getMonth(),
                        day: new Date(Math.max.apply(null,resaultArray)).getDate(),
                    };
    
    return [MinDate, MaxDate]
}

export default getMinMaxDates