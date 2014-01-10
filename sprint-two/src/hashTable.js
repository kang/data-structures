var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._stored = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(this._stored*4>=this._limit*3){
    this._limit=this._limit*2;
  }
  if(Array.isArray(this._storage[i])===false){
    this._storage[i]=[];
  }
  this._storage[i].push([k,v]);
  this._stored++;
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage[i]){
    for(var j = 0; j < this._storage[i].length; j++){
      if(this._storage[i][j]===undefined){
        return null;
      } else if (this._storage[i][j][0]===k){
        return this._storage[i][j][1];
      }
    }
  } else {
    return null;
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  for(var j = 0; j < this._storage[i].length; j++){
    if(this._storage[i][j][0]===k){
      delete this._storage[i][j];
    }
  }
  // delete this._storage[i];
  if(this._stored >= this._limit){
    this._limit = this._stored/2;
  }
  this._stored--;
};

