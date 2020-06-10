const Router = require('hermesjs/lib/router');
const router = new Router();
const taxiNycV1StatsDropoffAvgHandler = require('../handlers/taxi-nyc-v1-stats-dropoff-avg');
module.exports = router;

router.use('taxi/nyc/v1/stats/dropoff/avg', async (message, next) => {
  try {
    await taxiNycV1StatsDropoffAvgHandler.onRideDropoffAverageUpdate({message});
    next();
  } catch (e) {
    next(e);
  }
});
