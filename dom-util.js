
const visitAllNodes = function(node, callback) {
  let children = node.childNodes;

  if(children) {
    for(let i = 0; i < children.length; i++) {
      visitAllNodes(children[i], callback);
    }
  }
  callback(node);
};

const flattenTreeToArray = function(node) {
  const arr = [];
  visitAllNodes(node, children => arr.push(children));
  return arr;
};

module.exports = {
  visitAllNodes: visitAllNodes,
  flattenTreeToArray: flattenTreeToArray
};