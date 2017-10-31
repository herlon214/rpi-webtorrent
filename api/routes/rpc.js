const http = require('../http')
const debug = require('debug')('rpi-webtorrent:api')

module.exports = async (req, res) => {
  let token = req.query.token
  let basic = req.query.auth
  let data = req.query.data

  resp = await http({
    url: 'http://127.0.0.1:9091/transmission/rpc',
    method: 'POST',
    token,
    basic,
    body: data
  })

  return res.json(resp.body)
}