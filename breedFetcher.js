const request = require('request');
const breedName = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function (error, response, body) {
  console.error('error:', error);  
  const data = JSON.parse(body);
  
  if (!data.length){
    console.log('Breed not found');
    return;
  }
  // console.log(data);
  console.log(data[0]); 
});