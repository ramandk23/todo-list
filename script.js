const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

const btn = document.getElementById("btnAdd");
btn.addEventListener("click" , addTask);

function addTask(){
    if(inputBox.value === '')
    {
        alert("Please add task");
    }
    else{
        let myli = document.createElement("li");
        myli.innerHTML = inputBox.value;
        listContainer.appendChild(myli);
        
        let crossIcon = document.createElement("span");
        crossIcon.innerHTML = '\u00d7';
        myli.append(crossIcon);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click",(e) => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }

}, false);

function saveData(){
    localStorage.setItem("data" , listContainer.innerHTML)
}

function showList(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showList();