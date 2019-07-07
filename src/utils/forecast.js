const request = require('request')


const forecast = (latitude,longitude,callback) => {
    const url = 'https://api.darksky.net/forecast/5010c46ff29777bca6021770f264e423/' + latitude + ',' + longitude + '?lang=en'

    request({ url , json : true}, (error,{ body } = {}) => {
    if(error){
          callback('Unable to connect to internet', undefined)
    }else if(body.error){
          callback('Unable to find the location', undefined)
    }else{
          callback(undefined,body.daily.data[0].summary + ' ' + 'It is currently' +' '+ body.currently.temperature + ' ' + 'F out with' + ' ' + (body.daily.data[0].humidity)*100 + ' ' + '% humidity. The high today is'+ ' ' + body.daily.data[0].temperatureHigh + ' F with a low of'+ ' ' + body.daily.data[0].temperatureLow+ ' '+ 'F with'+ ' ' + (body.currently.precipProbability)*100 + ' % chances of rain.')
    }
    })
}

module.exports = forecast

