var makeQueue = function(){
  var instance = Object.create(queueMethods);
  instance._storage = {};
  instance._size = 0;
  instance._removed = 0;
  return instance;
};

var queueMethods = {};


queueMethods.enqueue = function(value){
  this._storage[this._size] = value;
  this._size++;
};

queueMethods.dequeue = function(){
  // var queue = Object.keys(this._storage);
  var result = this._storage[this._removed];
  delete this._storage[this._removed];
  if(this._size-this._removed){
    this._removed++;
  }
  return result;
};

queueMethods.size = function(){
  return this._size-this._removed;
};