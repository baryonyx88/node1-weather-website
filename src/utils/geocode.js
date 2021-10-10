const request = require('postman-request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZHRyYW4zNTY1IiwiYSI6ImNrdWIzNGh0NjBtcW8yb2xrazA5cjB2MGMifQ.NSownBrFwSIoK-AhHT-zvQ&limit=1'
    request({ url: url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location service', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longtitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode