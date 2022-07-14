// variables

//form
let form = document.querySelector("form");

//input
let input = document.querySelector("#userInput");

//to-DO list
let toDoList = document.querySelector("#to-DoList");

//buttons
let addButton = document.querySelector("#addButton");
let editButton = document.querySelector("#editButton")
let deleteButton = document.querySelector("#deleteButton");
let clearAll = document.querySelector("#clearButton");

//functions 

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


//Need to restructure code to wire up more function more clean 
// Ver 2.0????
// Edit works inside of "form" (fucntion) but with bugs

/*

        let editLi= false

        editButton.addEventListener('click', function(){
            editLi = true
        })
        newList.addEventListener('click', function(event){
            if (editLi === true){
                const edit = prompt('Edit:')
                event.target.innerHTML = edit
                editButton = fasle;           
            }
        })

*/



  

