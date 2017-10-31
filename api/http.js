const request = require('request')
const Promise = require('bluebird')
request.debug = true
const extend = require('extend')
const debug = require('debug')('rpi-webtorrent:api')


module.exports = (opts) => {
  let opt = {
    followRedirect: false,
    headers: {
      'X-Transmission-Session-Id': opts.token,
      'Authorization': `Basic ${opts.basic}`
    }
  }

  return new Promise((resolve, reject) => {
    opts = extend({}, opts, opt)

    request(extend({}, opts, opt), (err, resp, body) => {
      if (err) {
        debug(err)
        return reject(err)
      }

      return resolve(resp)
    })
  })
}