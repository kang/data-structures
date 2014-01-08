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
  };

  instance.pop = function(){
    size--;
  };

  instance.size = function(){
    return size;
  };
  
    return instance;
  };