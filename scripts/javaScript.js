alert("Bienvenido a la App de tareas");

const input = document.querySelector('input');
const input2 = document.querySelector('input2');
const addButton = document.querySelector('.btn');
const editButton = document.querySelector('.btn2');
const ul = document.querySelector('ul');
const estado = document.querySelector('.estado');
let tarea;
let lista = document.getElementById('listar')
edittask.style.display = "none";

addButton.addEventListener('click', (event) => {
    event.preventDefault();

    const texto = input.value;
    if (texto !== "") {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = texto;
        li.appendChild(p);
        li.appendChild(agregarBtnEdit());
        li.appendChild(agregarBtndelete());
        ul.appendChild(li);
        input.value = "";
        estado.style.display = "none";
        edittask.style.display="none";
    }
});

function agregarBtndelete() {
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "X";
    deleteBtn.className = "btn-delete";

    deleteBtn.addEventListener('click', (e) => {
        const deleteItem = e.target.parentElement;
        ul.removeChild(deleteItem);
        const totalItems = document.querySelectorAll('li');
        if(totalItems.length === 0){
            edittask.style.display = "none";
            estado.style.display = "block";
            document.getElementById('estado2').innerHTML='Felicidades has finalizado todas tus tareas';
        }else{
            edittask.style.display = "none";
            estado.style.display = "none";
            document.getElementById('estado2').innerHTML='Te quedan '+ totalItems.length + " por realizar";
        }
    });
    return deleteBtn;
}

function agregarBtnEdit() {
    const editBtn = document.createElement('button');
    editBtn.textContent = "Edit";
    editBtn.className = "btn-edit";

    editBtn.addEventListener('click',(eve)=>{
        const deleteItem = eve.target.parentElement;
        ul.removeChild(deleteItem);
        const totalItems = document.querySelectorAll('li');
        if(totalItems.length === 0){
            edittask.style.display = "none";
            estado.style.display = "block";
            document.getElementById('estado2').innerHTML='Felicidades has finalizado todas tus tareas';
        }
    });
    return editBtn;
}

addButton.addEventListener('click', (ev) => {
    edittask.style.display = "block";
    const texto1 = input.value;
    if (texto1 !== "") {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = texto1;
        li.appendChild(p);
        li.appendChild(agregarBtnEdit());
        li.appendChild(agregarBtndelete());
        ul.appendChild(li);
        input2.value = "";
        estado.style.display = "none";
        alert("ENTRE");
    }
});

addButton.addEventListener('click', capturarDatos)
function capturarDatos(){
    tarea = document.getElementById('input').value;
    guardarLocalStorage(tarea)
    listarDatos()
    console.log(tarea);
}

function guardarLocalStorage(tarea){
    localStorage.setItem('Tarea',tarea)
}

function listarDatos(){
    let tas = localStorage.getItem('Tarea')

     lista.innerHTML = `<table class="table">
     <thead>
         <tr>
             <th>Tarea</th>
         </tr>
     </thead>
     <tbody>
         <tr>
             <td>${tas}</td>
         </tr>
     </tbody>
 </table>
 `
 }