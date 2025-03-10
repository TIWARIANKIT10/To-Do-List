// select item
const alert = document.getElementById('alert');
const addlist = document.getElementById('addlist');
const submit_button = document.getElementsByClassName('submit-button');
const clear = document.getElementById('clear');
const form = document.querySelector('.todolistform')
const list = document.querySelector('.todo-list');


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
    });
});
function additem(e){
    e.preventDefault();
    const value = addlist.value;
    const id = new Date().getTime().toString();

    if(value && editFlag=== false){
        
        const todo_item = document.createElement('article');
        todo_item.classList.add('todo-item');
        todo_item.setAttribute('id', id);
        todo_item.innerHTML =`<p class="title">${addlist.value}</p>
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

                        //add to local storage 


                        //set back to default

            
   
        
   alerts("items added","success");
   setBackToDefault();

    }
    
    else if(value && editFlag===true){


     
        
     alerts("items edited","success");

    }
    else{
        alerts("enter some value","danger");

    }

    //function
    function alerts(text,action){
        alert.textContent = text ;
        alert.classList.add(`alert-${action}`);
        console.log(alert.getAttribute('class'));

        // settimeout 
        setTimeout(function(){
            alert.textContent="";
            alert.classList.toggle(`alert-${action}`);
        },60);
    }

  
}


//function 


//local storage 
 function addToLocalStorage(id,value){

}

function removeFromLocalStorage(){
    
}


// set  back to default 
function setBackToDefault(){
    addlist.value="";
    editID = "";

    

}


//edit 
function editfunction(){
console.log("item edited");
}

function deletefunction(e){
 const element = e.currentTarget.parentElement.parentElement;
 list.removeChild(element);
   
}











