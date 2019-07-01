const request = require('request')

const url = 'https://api.darksky.net/forecast/5010c46ff29777bca6021770f264e423/37.8267,-122.4233'

request({url: url}, (error,response) => {
    const data = JSON.parse(response.body)
    console.log(data.currently)
})