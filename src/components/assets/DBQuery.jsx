let DBQuery = {
  getUsers: () => {
    return new Promise(function(resolve, reject) {
      let xhr = new XMLHttpRequest();
      xhr.open('GET', 'http://localhost:8001/Users', false);
      xhr.onload = function onLoad() {
        if (this.status == 429) {
          return reject({status: this.status, statusText: 'Request limit reached.'})
        }
        const response = JSON.parse(this.response);
        if (this.status == 200) { // If the response is good and the request is ready,
          return resolve(response);
        } else { // Otherwise, error
          return reject({status: this.status, statusText: response.message, statusObject: response});
        }
      };
        xhr.send();
    });
  },
  getPayments: () => {}
}

export default DBQuery;
