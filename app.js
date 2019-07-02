const request = require('request')
const geocode = require('./utils/geocode')

// const url = 'https://api.darksky.net/forecast/5010c46ff29777bca6021770f264e423/37.8267,-122.4233?lang=en'

// request({url: url, json:true}, (error,response) => {

//     if(error){
//         console.log('Unable to connect to internet!')
//     }else if(response.body.error){
//         console.log('Unable to find the location!')
//     }else{
//         console.log(response.body.daily.data[0].summary + ' ' + 'it is currently' +' '+ response.body.currently.temperature + ' ' + 'degrees out')
//     }
    
// })





geocode('lucknow',(error,data) => {
      console.log('Error', error)
      console.log('Data' , data)
})