const request = require('request')


const geocode = (address,callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoidXRrYXJzaC1zaW5naDY3OTkiLCJhIjoiY2p4bGJ0OW13MDQ2MzN0bnQ3dng4OXl6MSJ9.i9J1ZIUkW9HDdw33wkvpJg&limit=1'

    request({ url , json : true },(error, { body } = {}) => {
        if(error){
            callback('Unable to connect to the Internet!', undefined)
        }else if(body.features.length === 0){
            callback('Location not found', undefined)
        }else{
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0], 
                location : body.features[0].place_name
            })
        }

    })
}

module.exports = geocode
    


    
