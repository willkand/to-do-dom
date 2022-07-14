// variables

//form
let form = document.querySelector("form");

//input
let input = document.querySelector("#userInput");

//to-DO list
let toDoList = document.querySelector("#to-DoList");

//buttons
let addButton = document.querySelector("#addButton");
let deleteButton = document.querySelector("#deleteButton");
let clearAll = document.querySelector("#clearButton");

//functions 

let taskList = [];

form.addEventListener('submit', function(event){
    event.preventDefault();

    if (input.value === ""){
        alert("Please input a to-Do item.")
    } else {
        let newList = document.createElement("li");

        newList.addEventListener('click', function(){
            newList.style.textDecoration = "line-through";
        })
        newList.innerText = input.value;

        toDoList.appendChild(newList);

        input.value = "";

        deleteButton.addEventListener('click', function(){
            if (newList.style.textDecoration === "line-through"){
                newList.remove();
            }
        })
    
        clearAll.addEventListener('click', function(){
            newList.remove();
        })
    }
})



  

