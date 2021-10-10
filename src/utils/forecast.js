const request = require('postman-request')

const forecast = (longtitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=63d447e57edf10f24725a644869783d7&query=' + latitude + ',' + longtitude
    request({ url: url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. Its currently ' + body.current.temperature + ' degreess out. It feels like ' + body.current.feelslike + ' degress out. The humidity is ' + body.current.humidity)
        }
    })
}

module.exports = forecast