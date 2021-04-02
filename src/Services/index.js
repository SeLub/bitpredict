export function getData() {
    return fetch('https://api.coindesk.com/v1/bpi/historical/close.json')
      .then((response) => {
        return response.json();
      });
 //     .then((data) => {
 //       console.log(data);
 //     });
  }