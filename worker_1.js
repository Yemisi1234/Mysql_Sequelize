const connect = require ('amqplib/callback_api');
const CONN_URL = 'amqps://wmffiaoz:MvzuWjDKJ4BHZDOuWMgD2i8VlmEMZNgo@hawk.rmq.cloudamqp.com/wmffiaoz';
connect(CONN_URL, function (err, conn) {
  conn.createChannel(function (err, ch) {
    ch.consume('folahanmi', function (msg) {
      console.log('.....');
      setTimeout(function(){
        console.log("Message:", msg.content);
      },4000);
      },{ noAck: true }
    );
  });
});