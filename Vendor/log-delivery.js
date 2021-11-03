'use strict';

function logDelivery(payload) {
  // log cuistomer name from payload
  console.log(`VENDOR: Thank you for delivering ${payload.orderID}`);
}

module.exports = logDelivery;
