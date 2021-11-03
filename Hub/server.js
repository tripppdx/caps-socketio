'use strict';

const socketio = require('socket.io');
const PORT = process.env.PORT || 3030;

const server = socketio(PORT);
const logEvent = require('./log-event.js');

const caps = server.of('/caps');

server.on('connection', socket => {
  console.log('Server Socket is connected', socket.id);
});

caps.on('connection', socket => {
  console.log('Caps Socket is connected', socket.id);

  socket.on('pick-up', payload => {
    logEvent('pick-up')(payload);
    socket.broadcast.emit('pick-up', payload);
  });

  socket.on('in-transit', payload => {
    logEvent('in-transit')(payload);
    socket.broadcast.emit('in-transit', payload);
  });

  socket.on('delivered', payload => {
    logEvent('delivered')(payload);
    socket.broadcast.emit('delivered', payload);
  });
});
