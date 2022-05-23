// const amqp = require('amqplib/callback_api');
// const CONN_URL = 'amqp://localhost:5672';

// let ch = null;
// amqp.connect(CONN_URL, function (err, conn) {
//    conn.createChannel(function (err, channel) {
//       ch = channel;
//    });
// });

//  const publishToQueue = async (queueName, data) => {
//     await ch.assertQueue(queueName)
//     ch.sendToQueue(queueName, Buffer.from(data, 'base64'));
//  }
 
//  process.on('exit', (code) => {
//     ch.close();
//     console.log(`Closing rabbitmq channel`);
//  });
//  module.exports = publishToQueue;
 
