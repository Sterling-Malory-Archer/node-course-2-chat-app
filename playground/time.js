var moment = require('moment');

// var date = moment();
// date.add(58, 'year');
// console.log(date.format('MMM Do, YYYY'));

// 9:44 AM

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm a'));