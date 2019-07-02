const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')




geocode('lucknow',(error,data) => {

      if(error){
            return console.log(error)
      }

      forecast(data.latitude, data.longitude, (error, forecastData) => {  //Callback Chaining

            if(error){
                  return console.log(error)
            }

             console.log(data.location)
             console.log(forecastData)
          })
})