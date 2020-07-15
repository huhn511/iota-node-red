const client = require('@iota/iota-rs-wasm/node')

module.exports = function (RED) {
    function IOTARed(config) {
        RED.nodes.createNode(this, config);
        var node = this;


        console.log("iota " + client);
        console.log("Publish 0-value tx on iota node: " + config.iotaNode);
        const uri = 'https://nodes.comnet.thetangle.org'
        client.addNode(uri)
        client.getNodeInfo().then(nodeInfo => {
            console.log("nodeInfo " + nodeInfo);
            console.log(nodeInfo);
        })
    
        node.on('input', function (msg) {
            msg.payload = msg.payload.toLowerCase();
            node.send(msg);

            
        });
    }
    RED.nodes.registerType("iota-red", IOTARed);
}