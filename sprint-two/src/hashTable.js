var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._stored = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(this._stored * 2 >= this._limit - 1){
    this_._limit = this._limit * 2;
  }
  this._storage.set(i, [k,v]);
  this._stored++;



  // var i = getIndexBelowMaxForKey(k, this._limit);
  // if(this._stored*2 >= this._limit-1){
  //   this._limit=this._limit*2;
  // }
  // if(Array.isArray(this._storage[i])===false){
  //   this._storage[i].set();
  // }
  // this._storage[i].push([k,v]);
  // this._stored++;
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var cb = function(bucket, index){
    for(var x = 0; x < bucket.length; x++){
      if(bucket[x][0]===k){
        console.log(bucket[x][1]);
        return bucket[x][1];
      }
    }
  };
  this._storage.each(cb);


  // if(this._storage[i]){
  //   for(var j = 0; j < this._storage[i].length; j++){
  //     if(this._storage[i][j]===undefined){
  //       return null;
  //     } else if (this._storage[i][j][0]===k){
  //       return this._storage[i][j][1];
  //     }
  //   }
  // } else {
  //   return null;
  // }
};

HashTable.prototype.remove = function(k){
  var cb = function(bucket, index, collection){
    for (var i = 0; i < bucket.length; i++) {
      if(bucket[i][0] === k){
        delete bucket[i];
        this._stored--;
      }
    }
  };
  this._storage.each(cb);

  if(this._stored <= this._limit/2){
    this._limit = this._limit/2;
  }
};

