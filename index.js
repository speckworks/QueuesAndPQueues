function Queue(){
  collection = [];
  this.print = function(){
    console.log(collection)
  }
  this.enqueue = function(item){
    collection.push(item)
  }
  this.dequeue = function(item){
   return collection.shift()
  }
  this.front = function(){
    return collection[0];
  }
  this.size = function(){
    return collection.length;
  }
  this.isEmpty = function(){
    return (collection.length === 0);
  }
}

var q = new Queue();
q.enqueue("a");
q.enqueue("b");
q.enqueue("c");
q.print();
q.dequeue();
console.log(q.front());
q.print();

function PriorityQueue(){
  let collection = [];
  this.print = function(){
    console.log(collection)
  }
  this.enqueue = function(item){
    if(this.isEmpty()){
    collection.push(item);
  }else{
    let added = false;
    for(let i = 0; i < collection.length; i++){
      if(element[1]< collection[i][1]){//checking priorities
      collection.splice(i,0,element);
      added = true;
      break;
      }
    }
    if(!added){
      collection.push(element)
      }
    }
  }
  this.dequeue = function(){
    let value = collection.shift();
    return value[0];

  }
}