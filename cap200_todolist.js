let input;
let todo = [];
let add;
let del;

console.log("*******");

console.log("add");
console.log("list");
console.log("delete");
console.log("quit");

console.log("*******");

while(input !== 'quit'){
    input = prompt('What do you want to do?');
    if(input == 'add'){
        console.log("You have to add a new todo")
        add = prompt('Insert a new todo');
        todo.push(add);
        console.log(`${add} Asigned to todo list`);
    }
    else if(input == 'list'){
        console.log("You List all todos");
        for(let i= 0; i< todo.length; i++){
            console.log(i + ": " +  todo[i]);
        }
    }    
    else if(input == 'delete'){
        console.log("Select the index of the element you want to delete")
        del = parseInt(prompt("Enter the index number you want to delete"));
        console.log("You have been deleted the element number:  " + del)
        todo.splice(del, 1);
    }
}
console.log("OK you Quit!");