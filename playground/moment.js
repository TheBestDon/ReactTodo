var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log('Current time ', now.unix());

var timestamp = 1491254466;
var currentMoment = moment.unix(timestamp);

console.log('current moment', currentMoment.format('MMMM Do, YYYY @ HH:mm A'));