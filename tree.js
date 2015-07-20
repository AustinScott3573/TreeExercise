// 1. Create a constructor function called Tree. It should take 4 arguments that correspond to attributes on the objects it creates. Two attributes should be 'name' and 'leaf shape'. Pick the other two. 

// 2. Create 4 tree objects using your Tree function.

// 3. Put those objects into an array called tree_array. 

// 4. for each tree in tree_array, add a block element to the tree-holder div that displays the tree's attributes

var tree = function(name, leafshape, height, bark) {
  this.name = name,
  this.leafshape = leafshape,
  this.height = height,
  this.bark = bark
  };

  var weepingWillow = new tree ("Weeping Willow", "Spiral, long", "Medium", "smooth");
  var pine = new tree ("Pine Tree", "Needles", "Medium to Tall", "Rough");
  var oak = new tree ("Oak Tree", "broad leaves", "Medium to Tall", "Rough");
  var apple = new tree ("Apple Tree", "I don't know", "small to medium", "smooth");

	console.log(weepingWillow)

  var tree_array = [weepingWillow, pine, oak, apple];
  // var showTree = document.getElementById("tree-holder");
  // showTree.innerHTML = tree_array
 

 for (var i = 0; i < tree_array.length; i++) {
 document.getElementById("tree-holder").innerHTML += JSON.stringify(tree_array[i], null, 2);
 }
console.log(tree_array)

