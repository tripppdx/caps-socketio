'use strict';

const { handlePickup, handleDelivered } = require('../Driver/handle-pickup.js');

describe('testing driver client handler', () => {
  console.log = jest.fn();
  it('should log a mock pickup and payload', () => {
    let payload = {
      store: '1-206-flowers',
      orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
      customer: 'Jamal Braun',
      address: 'Schmittfort, LA',
    };

    handlePickup(payload);
    expect(console.log).toHaveBeenCalled();
  });
  it('should log a mock delivery and payload', () => {
    let payload = {
      store: '1-206-flowers',
      orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
      customer: 'Jamal Braun',
      address: 'Schmittfort, LA',
    };

    handleDelivered(payload);
    expect(console.log).toHaveBeenCalled();
  });
});
