var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = undefined;
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
    this.children.push(makeTree(value));
  } else {
    this.children=[makeTree(value)];
  }
};

treeMethods.contains = function(target){
  // var doesContain=false;
  // for(var i = 0; i<this.children.length; i++){
  //   if(this.children[i].value===target){
  //     doesContain=true;
  //   }
  // }
  // return doesContain;
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

