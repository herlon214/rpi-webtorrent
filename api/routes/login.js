const http = require('../http')
const debug = require('debug')('rpi-webtorrent:api')

module.exports = async (req, res) => {
  let basic = (req.query.auth) // No conflict with request auth 

  let resp = await http({
    method: 'GET',
    basic,
    url: 'http://127.0.0.1:9091/transmission/web/',
  })
  
  if(resp.statusCode !== 200) {
    return res.json({success: false, err: 'Auth failed'}, 401)    
  }

  // Get the token
  resp = await http({
    url: 'http://127.0.0.1:9091/transmission/rpc',
    method: 'POST',
    basic,
    body: JSON.stringify({method: 'session-get'})
  })

  if (resp.headers['x-transmission-session-id']) {
    return res.json({success: true, token: resp.headers['x-transmission-session-id']})
  } else {
    return res.json({success: false, err: 'Token not found'})
  }
}