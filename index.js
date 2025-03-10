// select item
const alert = document.getElementById('alert');
const addlist = document.getElementById('addlist');
const submit_button = document.querySelector('.submit-button');
const clear = document.getElementById('clear');
const form = document.querySelector('.todolistform')
const list = document.querySelector('.todo-list');

//dom loaded
window.addEventListener("DOMContentLoaded",function(){
    let  itemse  = getlocalstorage('list');
    if(itemse.length>0){
        itemse.map(function(item){
            createlistitems(item.id,item.value)
        })
    }
})
//edit option 
let editElement ;
let editFlag = false ;
let editID = "";

// event listening 
form.addEventListener("submit", additem);

//clear 
clear.addEventListener("click", function(){
    const remove = document.querySelectorAll('.todo-item');
    remove.forEach(function(items){
        list.removeChild(items);
        localStorage.removeItem("list");
    });
});
function additem(e){
    e.preventDefault();
    const value = addlist.value;
    const id = new Date().getTime().toString();

    if(value && editFlag=== false){
        createlistitems(id, value)
      
                        //add to local storage 


                        //set back to default

            
    addToLocalStorage(id,addlist.value) 
   alerts("items added","success");
   setBackToDefault();

    }
    
    else if(value && editFlag===true){
        editElement.innerHTML = value;

    

     
        
        editlocalstorage(editID, value)
     alerts("items edited","success");
     setBackToDefault();

    }
    else{
        alerts("enter some value","danger");

    }

    //function
 

  
}
function alerts(text,action){
    alert.textContent = text ;
    alert.classList.add(`alert-${action}`);
    console.log(alert.getAttribute('class'));

    // settimeout 
    setTimeout(function(){
        alert.textContent="";
        alert.classList.toggle(`alert-${action}`);
    },6000);
}


//function 


//local storage 
 function addToLocalStorage(id,value){
    const todolists = {id, value};
    let items = getlocalstorage();

    items.push(todolists);
    localStorage.setItem("list",JSON.stringify(items));


}

function removeFromLocalStorage(id){
    let items =getlocalstorage();
    items = items.filter(function(item){
        if(item.id!==id){
            return id 
        }
    });
    localStorage.setItem("list",JSON.stringify(items));


}
function editlocalstorage(id, value) {
    let items = getlocalstorage();
    items = items.map(function(item) {
        console.log(id)
        if (item.id == id) {
            item.value = value; // Update the value of the item
            console.log("okay")
        }
        return item; // Return the item (modified or not)
    });
    localStorage.setItem("list", JSON.stringify(items)); // Save the updated items back to localStorage
}

function getlocalstorage(){
    return(
    localStorage.getItem("list")?
    JSON.parse(localStorage.getItem("list")):
    []);
}


// set  back to default 
function setBackToDefault(){
    addlist.value="";
    editID = "";
    submit_button.textContent ="Add Task"; 
editFlag= false  ;
editElement="";



    

}


//edit 
function editfunction(e){
const element = e.currentTarget.parentElement.parentElement;
editElement = e.currentTarget.parentElement.previousElementSibling ; 
addlist.value = editElement.textContent;
editID= element.getAttribute('id');
editFlag= true  ;
submit_button.textContent= "update";

update(editElement);

}

function deletefunction(e){
 const element = e.currentTarget.parentElement.parentElement;
 list.removeChild(element);
 const id = element.getAttribute('id');
 removeFromLocalStorage(id);

 setBackToDefault();
 alerts("data deleted", "danger");

   
}


// 
function createlistitems(id, value){

  
    const todo_item = document.createElement('article');
    todo_item.classList.add('todo-item');
    todo_item.setAttribute('id', id);
    todo_item.innerHTML =`<p class="title">${value}</p>
            <div class="btn-container">
                <button type="button" class="edit-btn">
                    <i class="fas fa-edit">edit</i>
                </button>
                <button type="button" class="delete-btn">
                    <i class="fas fa-delete">delete</i>`;
                  

const  edit  = todo_item.querySelector('.edit-btn'); 
const deletes = todo_item.querySelector('.delete-btn');

edit.addEventListener("click", editfunction); 
deletes.addEventListener('click',deletefunction);

//append child
list.appendChild(todo_item);

}






