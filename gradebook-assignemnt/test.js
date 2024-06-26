const axios = require('axios');

async function fetchData() {
  try {
    const response = await axios.get('https://us-east-1.aws.data.mongodb-api.com/app/application-0-slsgzid/endpoint/Login', {
      params: {
        username: "Prem.Kattel",
        password: "COSC-1301"
      }
    });
    return response.data; // Resolve the promise with the data
  } catch (error) {
    console.error(error);
    throw error; // Re-throw the error for further handling (optional)
  }
}

(async () => {
  try {
    const data = await fetchData();
    console.log(data); // Access the data outside the function
  } catch (error) {
    console.error("Error fetching data:", error);
  }
})();

let data = fetchData()

console.log(data)