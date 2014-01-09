var makeStack = function(){
  var instance = Object.create(stackMethods);

  // Use an object with numeric keys to store values
  instance._storage = {};
  instance._size = 0;
  return instance;
};

var stackMethods = {};

// Implement the methods below
stackMethods.push = function(value){
  this._size++;
  this._storage[this._size-1] = value;
};
stackMethods.pop = function(){
  var popped = this._storage[this._size-1];
  delete this._storage[this._size-1];
  if(this._size) {
    this._size--;
  }
  return popped;
};

stackMethods.size = function(){
  return this._size;
};