const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')




geocode('lucknow',(error,data) => {

      if(error){
            return console.log(error)
      }

      forecast(data.latitude, data.longitude, (error, data) => {  //Callback Chaining

            if(error){
                  return console.log(error)
            }
            console.log('Error', error)
            console.log('Data', data)
          })
})