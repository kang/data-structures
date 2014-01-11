var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
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

treeMethods.removeFromParent = function(){
  for(var j = 0; j<this.parent.children.length; j++){
    if(this.parent.children[j].value===this.value){
      this.parent.children.splice(j, 1);
      this.parent = null;
      break;
    }
  }
};

treeMethods.addChild = function(value){
  var tmp = makeTree(value);
  tmp.parent=this;
  this.children.push(tmp);
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

