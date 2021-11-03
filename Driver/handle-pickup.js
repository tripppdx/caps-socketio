'use strict';

// const client = require('socket.io-client');
// const capsClient = client('http://localhost:3030/caps');

function handlePickup(payload) {
  console.log(`DRIVER: picked up ${payload.orderID}`);
}
function handleDelivered(payload) {
  console.log(`DRIVER: delivered ${payload.orderID}`);
}

module.exports = { handlePickup, handleDelivered };
