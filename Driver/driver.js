'use strict';

const client = require('socket.io-client');
const faker = require('faker');
const capsClient = client('http://localhost:3030/caps');
const { handlePickup, handleDelivered } = require('./handle-pickup.js');

capsClient.on('pick-up', payload => {
  handlePickup(payload);
  capsClient.emit('in-transit', payload);
  handleDelivered(payload);
  capsClient.emit('delivered', payload);
});
