var makeBinarySearchTree = function(value){
  this._value = value;
  this._left = undefined;
  this._right = undefined;
};

makeBinarySearchTree.prototype.insert = function(newVal){

  // var locatePos = function(pos){
    // console.log(pos);
    if(newVal > this._value){
      if(this._right){
        this._right.insert(newVal);
      } else {
        this._right = new makeBinarySearchTree(newVal);
      }
    } else if (newVal < this._value){
      if(this._left){
        this._left.insert(newVal);
      } else {
        this._left = new makeBinarySearchTree(newVal);
      }
    }

  // };
  // return locatePos(this);
};

makeBinarySearchTree.prototype.depthFirstLog = function(){

};



makeBinarySearchTree.prototype.contains = function(target){
  if(target === this._value){
    return true;
  } else if(target > this._value){
    if(this._right){
      return this._right.contains(target);
    } else {
      return false;
    }
  } else if (target < this._value){
    if(this._left){
      return this._left.contains(target);
    } else {
      return false;
    }
  }
};