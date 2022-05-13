import mqtt from "mqtt";

const websocketUrl = "wss://54.163.200.67:9001";
function getClient() {
  const client = mqtt.connect(websocketUrl,{username:"Aditya",password:"aditya"});
  client.stream.on("error", (err) => {
    console.log(`Connection to ${websocketUrl} failed`);
    client.end();
  });
  return client;
}
function subscribe(client, topic) {
  const callBack = (err, granted) => {
    if (err) {
      console.log("Subscription request failed");
    }
  };
  return client.subscribe(topic, callBack);
}
function onMessage(client) {
  client.on("message", (topic, message, packet) => {
    console.log(JSON.parse(new TextDecoder("utf-8").decode(message)));
  });
}
function unsubscribe(client, topic) {
  client.unsubscribe(apiEndpoint + topic);
}
function closeConnection(client) {
  client.end();
}
const mqttService = {
  getClient,
  subscribe,
  onMessage,
  unsubscribe,
  closeConnection,
};
export default mqttService;