const request = require('request')

const url = 'https://api.darksky.net/forecast/5010c46ff29777bca6021770f264e423/37.8267,-122.4233?lang=en'

request({url: url, json:true}, (error,response) => {

    if(error){
        console.log('Unable to connect to internet!')
    }else if(response.body.error){
        console.log('Unable to find the location!')
    }else{
        console.log(response.body.daily.data[0].summary + ' ' + 'it is currently' +' '+ response.body.currently.temperature + ' ' + 'degrees out')
    }
    
})

//Geocoding

const geocadeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidXRrYXJzaC1zaW5naDY3OTkiLCJhIjoiY2p4bGJ0OW13MDQ2MzN0bnQ3dng4OXl6MSJ9.i9J1ZIUkW9HDdw33wkvpJg&limit=1'

request({url : geocadeUrl , json : true }, (error,response) => {

    if(error){
        console.log('Unable to connect to the Internet!')
    }else if(response.body.features.length === 0){
        console.log('Location not found!')
    }
    else{
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
        console.log(latitude,longitude)
    }
    

})