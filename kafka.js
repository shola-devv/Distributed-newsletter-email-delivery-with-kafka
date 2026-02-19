require('dotenv').config();
const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: "newsletter-service",
  brokers: [process.env.KAFKA_BROKER],
  ssl: true,
  sasl: {
    mechanism: "plain",
    username: process.env.KAFKA_USERNAME,
    password: process.env.KAFKA_PASSWORD,
  },
});

module.exports = kafka;