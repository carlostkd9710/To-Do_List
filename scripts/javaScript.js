alert("Bienvenido a la App de tareas");

const input = document.querySelector('input');
const addButton = document.querySelector('.btn');
const ul = document.querySelector('ul');
const estado = document.querySelector('.estado');

addButton.addEventListener('click', (event) => {
    event.preventDefault();

    const texto = input.value;
    if (texto !== "") {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = texto;
        li.appendChild(p);
        li.appendChild(agregarBtndelete());
        ul.appendChild(li);
        input.value = "";
        estado.style.display = "none";
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
            estado.style.display = "block";
            document.getElementById('estado2').innerHTML='Felicidades has finalizado todas tus tareas';
        }else{
            estado.style.display = "none";
            document.getElementById('estado2').innerHTML='Te quedan '+ totalItems.length + " por realizar";
        }
    });
    return deleteBtn;
}