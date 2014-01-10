var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(Object.keys(this._storage).length>this._limit-1){
    this._limit=this._limit*2;
  }
  this._storage[i]=v;
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage[i]){
    return this._storage[i];
  } else {
    return null;
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(Object.keys(this._storage).length <= (this._limit/2)){
    this._limit = this._limit/2;
  }
  delete this._storage[i];
};

