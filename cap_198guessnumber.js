let guess = 8;
let input = 0;
input = parseInt(prompt("What is the guess number?"));
while(!input){
    input=parseInt(prompt("Enter a valid number"));
}

while(input !== guess ){
    if(input < guess){
        input = parseInt(prompt("The number you input is LOWER"));
        while(!input){
            input=parseInt(prompt("Enter a valid number"));
        }
    }else if(input > guess){
        input = parseInt(prompt("The number you input is HIGER"));
        while(!input){
            input=parseInt(prompt("Enter a valid number"));
        }
    }else if(!input){
        input=parseInt(prompt("Enter a valid number"));
    }
    else{
        alert("Congratulations! You guess the number");
    }
}

alert("Congratulations! You guess the number");

