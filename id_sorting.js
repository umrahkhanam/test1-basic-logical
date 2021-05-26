var obj = [
   { "id": 4, "name": "abc"},
   { "id": 10, "name": "ab2"},
   { "id": 5, "name": "abc3"},
    { "id": 6, "name" : "abc5"}
];

items.sort(function(a, b) { 
    return (a.id - b.id) || a.name.localeCompare(b.name); 
});

console.log(obj);