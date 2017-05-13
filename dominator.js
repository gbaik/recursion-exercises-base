const { flattenTreeToArray } = require('./dom-util');
const _ = require('underscore');

const getElementById = function(root, id) {
  const flattenedArray = flattenTreeToArray(root);
  for (let i = 0; i < flattenedArray.length; i++) {
    if (flattenedArray[i].id === id){
      return flattenedArray[i];
    };
  };
};

const getElementsByClassName = function(root, className) {
  const flattenedArray = flattenTreeToArray(root);
  const arr = [];
  for (let i = 0; i < flattenedArray.length; i++){
    if (flattenedArray[i].className && (flattenedArray[i].className).indexOf(className) !== -1){
       arr.push(flattenedArray[i]);
    };
  };
  return arr;
};

const getElementsByTagName = function(root, tagName) {
  const flattenedArray = flattenTreeToArray(root);
  const arr = [];
  for (let i = 0; i < flattenedArray.length; i++) {
    if (flattenedArray[i].tagName === tagName) {
      arr.push(flattenedArray[i]);
    };
  };
  return arr;
};

module.exports = {
  getElementById: getElementById,
  getElementsByClassName: getElementsByClassName,
  getElementsByTagName: getElementsByTagName
};
