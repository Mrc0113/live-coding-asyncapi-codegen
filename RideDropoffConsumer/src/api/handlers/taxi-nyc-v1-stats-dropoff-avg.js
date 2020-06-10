
const handler = module.exports = {};

/**
 * 
 * @param {object} options
 * @param {object} options.message
 * @param {number} [options.message.payload.avg_meter_reading=0] - An explanation about the purpose of this instance.
 * @param {integer} [options.message.payload.window_duration_sec=0] - An explanation about the purpose of this instance.
 * @param {number} [options.message.payload.avg_passenger_count=0] - An explanation about the purpose of this instance.
 * @param {integer} [options.message.payload.window_ride_count=0] - An explanation about the purpose of this instance.
 * @param {string} [options.message.payload.timestamp=] - An explanation about the purpose of this instance.
 */
handler.onRideDropoffAverageUpdate = async ({message}) => {
  // Implement your business logic here...
};
