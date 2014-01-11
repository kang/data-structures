var makeBinarySearchTree = function(value){
  this._value = value;
  this._left = undefined;
  this._right = undefined;
};

makeBinarySearchTree.prototype.insert = function(newVal){
  
  var locatePos = function(pos){
    // console.log(pos);
    if(newVal > pos._value){
      if(pos._right){
        return locatePos(pos._right);
      } else {
        pos._right = new makeBinarySearchTree(newVal);
        console.log(pos);
      }
    } else if (newVal < pos._value){
      if(pos._left){
        return locatePos(pos._left);
      } else {
        console.log('Yay');
        pos._left = new makeBinarySearchTree(newVal);
        console.log(pos);
      }
    }

  };
  return locatePos(this);
};

makeBinarySearchTree.prototype.depthFirstLog = function(){

};



makeBinarySearchTree.prototype.contains = function(target){
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