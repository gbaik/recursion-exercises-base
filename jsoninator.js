const _ = require('underscore'); // the real one! :)

const stringify = function(obj) {
  let arr = [];

  if (obj === null) {
     return 'null';
   } else if (typeof obj === 'string') {
     return '"' + obj + '"';
   } else if (typeof obj === 'number') {
     return obj.toString();
   } else if (typeof obj === 'boolean') {
     return '' + obj;
   } else if (_.isArray(obj)) {
       _.each(obj, element => {
         arr.push(stringify(element));
    })
    return '[' + arr + ']';
   } else if (typeof (obj) === 'object') {
     _.each(obj, (value, key) => {
       arr.push(stringify(key) + ":" + stringify(value));
     });
     return '{' + arr + '}';
 };
};

module.exports = {
  stringify: stringify
};