var inStock = ["apples",
    "eggs",
    "milk",
    "cookies",
    "cheese",
    "bread",
    "lettuce",
    "carrot",
    "broccoli",
    "pizza",
    "potato",
    "crackers",
    "onion",
    "tofu",
    "frozen dinner",
    "cucumber"
];
var search;

function print(message) {
    document.write("<p>" + message + "<p>");
}

while (true) {
    search = prompt("Search for a product in our store. Type 'list' to show all of the produce and 'quit' to exit");
    if (search.toLowerCase() === 'quit') {
        break;
    }
    else if (search.toLowerCase() === 'list') {
        print("We currently have the following in stock <br>" +
            inStock.join(", "));
    }
    else if (inStock.indexOf(search.toLowerCase()) !== -1) {
        print("We do have " + search + " in stock!");
    }
    else {
        print("We currently do not have " + search + " in stock...");
    }
}
