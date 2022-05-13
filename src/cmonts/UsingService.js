import mqttService from "./MqttService";

const client = mqttService.getClient();

client.on('connect',()=>{
    console.log('connected');
    mqttService.subscribe(client,'iot/status');
});

