alert("Bienvenido a la App de tareas");

const input = document.querySelector('input');
const input2 = document.querySelector('input2');
const addButton = document.querySelector('.btn');
const editButton = document.querySelector('.btn2');
const ul = document.querySelector('ul');
const estado = document.querySelector('.estado');
let lista = document.getElementById('listar')
edittask.style.display = "none";

addButton.addEventListener('click', (event) => {
    event.preventDefault();
    var texto1 = tipoTarea();
    const texto = input.value;
    if (texto !== "") {
        const li = document.createElement('li');
        const p = document.createElement('p');
        const p1 = document.createElement('p');
        p1.textContent =texto1;
        p.textContent = texto;
        li.appendChild(p1);
        li.appendChild(p);
        li.appendChild(agregarBtnEdit());
        li.appendChild(agregarBtndelete());
        ul.appendChild(li);
        input.value = "";
        estado.style.display = "none";
        edittask.style.display="none";
        background();
    }
});
function tipoTarea(){
    var val1 = document.getElementById("item").value;
    return (val1)
 }

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

    editBtn.addEventListener('click', (ev) => {
        ev.preventDefault();
        const pruebaItem = ev.target.parentElement;
        ul.replaceChild(pruebaItem) = "Remplazado"
        console.log(pruebaItem);
        edittask.style.display = "block";
    });

    return editBtn;
}

function background(){
    color = document.getElementById("item").value;
    if (color === "primary"){
        alert("item primary")
        document.getElementById("listar").style.backgroundColor="#0000ff";
    }
    if (color === "secondary"){
        alert("item secondary")
        document.getElementById("listar").style.backgroundColor= "#ff0c00";
    }
    if (color === "success"){
        alert("item success")
        document.getElementById("listar").style.backgroundColor="#0000ff";
    }
    if (color === "danger"){
        alert("item danger")
        document.getElementById("listar").style.backgroundColor= "#ff0c00";
    }
    if (color === "warning"){
        alert("item warning")
        document.getElementById("listar").style.backgroundColor="#0000ff";
    }
    if (color === "info"){
        alert("item info")
        document.getElementById("listar").style.backgroundColor= "#ff0c00";
    }
    if (color === "light"){
        alert("item light")
        document.getElementById("listar").style.backgroundColor="#0000ff";
    }
    if (color === "dark"){
        alert("item dark")
        document.getElementById("listar").style.backgroundColor= "#ff0c00";
    }
}
