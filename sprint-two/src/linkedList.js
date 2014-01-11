var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if(list.tail){
      list.tail.next = makeNode(value);
      list.tail.next.previous = list.tail;
      list.tail = list.tail.next;
    } else {
      list.tail=makeNode(value);
    }
    if(list.head===null){
      list.head=list.tail;
    }
  };

  list.addToHead = function(value){
    if(list.head){
      list.head.previous = makeNode(value);
      list.head.previous.next = list.head;
      list.head = list.head.previous;
    } else {
      list.head = makeNode(value);
    }
    if(list.tail===null){
      list.tail=list.head;
    }
  };

  list.removeTail = function(value){
    var tmp;
    if(list.tail.previous){
      tmp = list.tail.previous;
    }
    delete list.tail;
    list.tail = tmp;
  };

  list.removeHead = function(){
    var tmp;
    if(list.head.next){
      tmp = list.head.next;
    }
    delete list.head;
    list.head = tmp;
  };

  list.contains = function(target, node){
    node = node || list.head;
    if(node.value===target){
      return true;
    } else {
      if(node.next===null){
        return false;
      }
      return list.contains(target, node.next);
    }
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};
