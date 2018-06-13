var shoppingList = [
    "carrots",
    "milk",
    "eggs"
];

var newShoppingList = [
    "cheese"
];

shoppingList.unshift("banannas");//Adds to the front
shoppingList.push("juice"); //Adds to the end
shoppingList.pop(); //Removes from the end
shoppingList.shift();//Removes from the font
shoppingList.length;//returns the size of array
shoppingList.join(", ");//Adds string between elements
var combinedList = shoppingList.concat(newShoppingList); //Combines two arrays

