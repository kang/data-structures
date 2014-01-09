// var makeQueue = function(){
//   var instance = {};

//   // Use an object with numeric keys to store values
//   var storage = {};
//   var size = 0;
//   // Implement the methods below

//   instance.enqueue = function(value){
//     storage[size]=value;
//     size++;
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
  var storage = {};
  var size = 0;
  extend(instance, queueMethods);
  return instance;
};

var extend = function(to, from){
  for(var key in from){
    to[key]=from[key];
  }
};


var queueMethods = {};

queueMethods.dequeue = function(){
    var queue = Object.keys(this.storage);
    var result = this.storage[queue[0]];
    delete this.storage[queue[0]];
    return result;
  };

queueMethods.enqueue = function(value){
    this.storage[this.size]=value;
    this.size++;
};

queueMethods.size = function(){
    return Object.keys(this.storage).length;
};