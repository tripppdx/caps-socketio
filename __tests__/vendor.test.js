'use strict';

const logEvent = require('../Vendor/log-delivery.js');

describe('testing vendor client handler', () => {
  console.log = jest.fn();
  it('should log a mock pick up and payload', () => {
    // let eventHandler = logEvent('test');
    let payload = {
      store: '1-206-flowers',
      orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
      customer: 'Jamal Braun',
      address: 'Schmittfort, LA',
    };

    logEvent(payload);
    expect(console.log).toHaveBeenCalled();
  });
});
