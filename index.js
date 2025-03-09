// select item
const alert = document.getElementById('alert');
const addlist = document.getElementById('addlist');
const submit_button = document.getElementsByClassName('submit-button');
const  edit  = document.getElementsByClassName('edit-btn'); 
const deletes = document.getElementsByClassName('delete-btn');
const clear = document.getElementsByClassName('clear');
const form = document.querySelector('.todolistform')
const list = document.getElementsByClassName('todo-list');


//edit option 
let editElement ;
let editFlag = false ;
let editID = "";

// event listening 
form.addEventListener("submit", additem);
function additem(e){
    e.preventDefault();
    const value = addlist.value;
    const id = new Date().getTime().toString();

    if(value && editFlag=== false){
        
        const todo_item = document.createElement('article');
        todo_item.setAttribute('data-id', id);
        todo_item.innerHTML =`<p class="title">item</p>
                <div class="btn-container">
                    <button type="button" class="edit-btn">
                        <i class="fas fa-edit">edit</i>
                    </button>
                    <button type="button" class="delete-btn">
                        <i class="fas fa-delete">delete</i>`;
                        list.appendChild(todo_item);
            
   
        
   alerts("items added","success");
    }

    else if(value && editFlag===true){
     console.log("value is editing here");
     alerts("items edited","success");

    }
    else{
        alerts("enter some value","danger");

    }

    //function
    function alerts(text,action){
        alert.textContent = text ;
        alert.classList.add(`alert-${action}`);

        // settimeout 
        setTimeout(function(){
            alert.textContent="";
            alert.classList.tooggle(`aler-${action}`);
        },6000)
    }

  
}


//function 





