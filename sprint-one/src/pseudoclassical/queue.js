var Queue = function(){
  this._storage={};
  this._size=0;
  this._removed=0;
};

Queue.prototype.enqueue = function(value){
  this._storage[this._size] = value;
  this._size++;
};

Queue.prototype.dequeue = function(){
  var result = this._storage[this._removed];
  delete this._storage[this._removed];
  if(this._size-this._removed){
    this._removed++;
  }
  return result;
};

Queue.prototype.size = function(){
  return this._size-this._removed;
};

var queue = new Queue();
