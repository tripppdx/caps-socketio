'use strict';

const client = require('socket.io-client');
const faker = require('faker');
const logDelivery = require('./log-delivery.js');

const capsClient = client('http://localhost:3030/caps');

capsClient.on('delivered', logDelivery);

function pickup() {
  let payload = {
    store: '1-206-flowers',
    orderID: faker.datatype.uuid(),
    customer: faker.name.findName(),
    address: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.state()}`,
  };

  capsClient.emit('pick-up', payload);
}

setInterval(pickup, 2000);
