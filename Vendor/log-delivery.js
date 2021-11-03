'use strict';

function logDelivery(payload) {
  console.log(`VENDOR: Thank you for delivering ${payload.orderID}`);
}

module.exports = logDelivery;
