const request = require('request')


const forecast = (latitude,longitude,callback) => {
    const url = 'https://api.darksky.net/forecast/5010c46ff29777bca6021770f264e423/' + latitude + ',' + longitude + '?lang=en'

    request({ url , json : true}, (error,{ body } = {}) => {
    if(error){
          callback('Unable to connect to internet', undefined)
    }else if(body.error){
          callback('Unable to find the location', undefined)
    }else{
          callback(undefined, body.daily.data[0].summary + ' ' + 'it is currently' +' '+ body.currently.temperature + ' ' + 'degrees out')
    }
    })
}

module.exports = forecast