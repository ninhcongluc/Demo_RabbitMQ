const amqplib = require('amqplib/callback_api');


amqplib.connect(`amqp://guest:guest@localhost:5672`, (err, connection) => {
    if (err) {
        throw err;
    }
    connection.createChannel((err, channel) => {
        if (err) {
            throw err;
        }
        let queueName = 'lee';
        channel.assertQueue(queueName, {
            durable: false
        })

        channel.consume(queueName, (msg) => {
            console.log('Message: ', msg.content.toString());
            channel.ack(msg);
        });

    })
})