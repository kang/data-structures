var makeStack = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  /* START PROMPT
    var size; // Hint: set an initial value here
  -END PROMPT */
  var size = 0;

  // Implement the methods below
  instance.push = function(value){
    size++;
    storage[size-1] = value;
  };
  instance.pop = function(){
    var popped = storage[size-1];
    delete storage[size-1];
    if(size) {
      size--;
    }
    return popped;
  };

  instance.size = function(){
    return size;
  };
  return instance;
};

var stackMethods = {};