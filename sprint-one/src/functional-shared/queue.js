// var makeQueue = function(){
//   var instance = {};

//   // Use an object with numeric keys to store values
//   var storage = {};
//   var _size = 0;
//   // Implement the methods below

//   instance.enqueue = function(value){
//     storage[size]=v

//   };

//   instance.dequeue = function(){
//     var queue = Object.keys(storage);
//     var result = storage[queue[0]];
//     delete storage[queue[0]];
//     return result;
//   };

//   instance.size = function(){
//     return Object.keys(storage).length;
//   };

//   return instance;
// };

var makeQueue = function(){
  var instance = {};
  instance._storage = {};
  instance._size = 0;
  instance._removed = 0;

  extend(instance, queueMethods);

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
