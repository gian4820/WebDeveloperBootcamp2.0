// WRITE YOUR CODE IN HERE:
const background = document.querySelectorAll('li');

for(let color of background){
    if(color.classList.contains("highlight")){
        color.classList.toggle("highlight");
    }else{
        color.classList.add("highlight");
    }
    
}