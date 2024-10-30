const { json } = require("body-parser");
const { incr, expire, ttl } = require("../utils/limiter");
class checkNumberAccess {
  static async getTtl(getIpUser) {
    //get ip
    // const getIpUser = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const numRequest = await incr(getIpUser);

    let _ttl;
    if (numRequest === 1) {
      await expire(getIpUser, 60);
      _ttl = 60;
    } else if ((await ttl(getIpUser)) === -1) {
      await expire(getIpUser, 60);
      _ttl = 60;
    } else {
      _ttl = await ttl(getIpUser);
    }

    let NA = {
      _ttl,
      numRequest,
    };

    return NA;

    // return _ttl;
  }
}
module.exports = checkNumberAccess;
