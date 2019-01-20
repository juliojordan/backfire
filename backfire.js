const clientErrors = [400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 421, 422, 423, 424, 426, 428, 429, 431, 444, 451, 499]
const serverErrors = [500, 501, 502, 503, 504, 505, 506, 507, 508, 510, 511, 599]

module.exports = function (client, server) {
  return function(req, res, next) {
    let errors = client ? clientErrors : []
    if (server) {
      errors = errors.concat(serverErrors)
    }
    const random = Math.floor(Math.random() * errors.length)
    res.sendStatus(errors[random])
  }
}