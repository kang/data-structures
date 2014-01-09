var Stack = function(){
  // Use an object with numeric keys to store values
  this._storage = {};
  this._size = 0;
};

// Implement the methods below
Stack.prototype.push = function(value){
  this._size++;
  this._storage[this._size-1] = value;
};
Stack.prototype.pop = function(){
  var popped = this._storage[this._size-1];
  delete this._storage[this._size-1];
  if(this._size) {
    this._size--;
  }
  return popped;
};

Stack.prototype.size = function(){
  return this._size;
};

var newStack = new Stack();