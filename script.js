const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert('Please enter a task');
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li); 
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

// Add event listener to the list container
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){ // Check if the clicked element is an LI
        e.target.classList.toggle("checked"); // Toggle the "checked" class
        saveData();
    }else if(e.target.tagName === "SPAN"){ // Check if the clicked element is a SPAN
        e.target.parentElement.remove(); // Remove the parent element (LI)
        saveData();
    }
}, false);

// Save the data to local storage
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// Show the saved tasks on page load
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

// Add event listener to the input box for the "Enter" key
inputBox.addEventListener("keydown", () => {
    if(event.code === 'Enter'){
        addTask();
    }
})