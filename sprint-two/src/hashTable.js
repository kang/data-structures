var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._stored = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._stored++;
  if(this._stored > this._limit-2){
    this._limit = this._limit * 2;
  }
  if(Array.isArray(this._storage.get(i))){
    this._storage.get(i)[this._storage.get(i).length] = [k,v];
  } else {
    this._storage.set(i, [[k,v]]);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var found = null;
  for(var x = 0; x<this._storage.get(i).length; x++){
    if(this._storage.get(i)[x][0]===k && this._storage.get(i)[x][1]){
      found = this._storage.get(i)[x][1];
    }
  }
  return found;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(this._limit/2 -1> this._stored){
    this._limit = this._limit/2;
  }
  this._stored--;
  for(var x = 0; x<this._storage.get(i).length; x++){
    if(this._storage.get(i)[x][0]===k){
      delete this._storage.get(i)[x][1];
    }
  }
  console.log(this);
};

