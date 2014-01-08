var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  // Implement the methods below

  instance.enqueue = function(value){
    storage[size]=value;
    size++;
  };

  instance.dequeue = function(){
    var queue = Object.keys(storage);
    var result = storage[queue[0]];
    delete storage[queue[0]];
    return result;
  };

  instance.size = function(){
    return Object.keys(storage).length;
  };

  return instance;
};
