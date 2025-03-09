// select item
const alert = document.getElementsByClassName('alert');
const addlist = document.getElementById('addlist');
const submit_button = document.getElementsByClassName('submit-button');
const  edit  = document.getElementsByClassName('edit-btn'); 
const deletes = document.getElementsByClassName('delete-btn');
const clear = document.getElementsByClassName('clear');
const form = document.querySelector('.todolistform')


//edit option 
let editElement ;
let editFlag = false ;
let editID = "";

// event listening 
form.addEventListener("submit", additem);
function additem(e){
    e.preventDefault();
    console.log('a')
  
}


//function 





