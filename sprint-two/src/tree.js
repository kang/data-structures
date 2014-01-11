var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = undefined;
  newTree.parent = null;
  extend(newTree, treeMethods);
  return newTree;
};

var extend = function(to, from){
  for(var key in from){
    to[key]=from[key];
  }
};


var treeMethods = {};


treeMethods.addChild = function(value){
  if(this.children){
    var tmp = makeTree(value);
    this.children.push(tmp);
    tmp.parent=this;
  } else {
    this.children=[makeTree(value)];
  }
};

treeMethods.contains = function(target){
  var travAndCheck = function(node){
    for(var i = 0; i<node.length; i++){
      if(node[i].value===target){
        return true;
      }
      if(node[i].children){
        if(travAndCheck(node[i].children)){
          return true;
        }
      }
    }
    return false;
  };
  return travAndCheck(this.children);
};

