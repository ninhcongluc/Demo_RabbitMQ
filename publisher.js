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
        let message = 'Transform text message';
        channel.assertQueue(queueName, {
            durable: false
        })

        channel.sendToQueue(queueName, Buffer.from(message));
        setTimeout(() => {
            connection.close();
        }, 1000)
    })
})