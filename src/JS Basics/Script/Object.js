var person = {
    name: "Lee",
    country: "USA",
    age: 29,
    treehouseStudent: true,
    skills: ["JavaScript", "HTML", "CSS"]
};

function print(message) {
    var div = document.getElementById("output");
    div.innerHTML = message;
}

var message = '<p>Hello. My name is ' + person.name + '</p>';
message += '<p>I live in the ' + person.country + '</p>';
person.name = 'Lee Owen';
message += '<p>But, full; name is ' + person.name + '</p>';
message += '<p>I have ' + person.skills.length + ' skills: ';
message += person.skills.join(", ");
print(message);