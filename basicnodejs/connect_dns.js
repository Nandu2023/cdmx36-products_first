// const undici = require('undici');
// //import { Agent, setGlobalDispatcher } from "undici";

// // Replace with your custom DNS server IP
// const DnsIp = "35.81.194.197";   //"35.81.194.197";

// const agent = new undici.Agent({
//   connect: {
//     // The third argument refers to the IP family (4 for IPv4, 6 for IPv6)
//     lookup: (_hostname, _options, callback) => callback(null, DnsIp, 4)
//   },
// });

// // Set the custom agent as the global dispatcher
// undici.setGlobalDispatcher(agent);

// Example: Use the DNS server at 127.0.0.1 to resolve git.dev
// const response = await fetch("https://git.dev/");
// const response = fetch("mft-us2.concursolutions.com");

// var ping = require('ping');

// var hosts = ['google.com', 'yahoo.com'];
// hosts.forEach(function(host){
//     ping.sys.probe(host, function(isAlive){
//        console.log(isAlive);
//         var msg = isAlive ? 'host ' + host + ' is alive' : 'host ' + host + ' is dead';
//         console.log(msg);
//     });
// });

var ping = require('ping');
var Error = require('error');

var hosts = ['192.168.1.1', 'google.com', 'yahoo.com'];

hosts.forEach(function (host) {
    ping.promise.probe(host)
        .then(function (res) {
            console.log(res);
        });
});