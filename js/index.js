/* Nombre: Kelfry Florimon de Jesus.
Matricula: 20164418.
Periodo: 2018-C-3 */  

function resett(n)
{
 document.getElementById("result").value=n;
}

function into(n)
{
    document.getElementById("result").value+=n;
}

function equal() 
{ 
    try
    {
        resett(eval(document.getElementById("result").value)) 
    }
    catch(e) 
    {
        resett('syntax error') } 
}

document.addEventListener('DOMContentLoaded', function (e) {
    e.preventDefault();
    var record = getLocalStorage();

    record.forEach(element => {
        var container = document.getElementById('list');
        var li = document.createElement('li');
        li.textContent = element;
        container.appendChild(li);
    });
})
var btnDelete = document.getElementById('deleteRecord');
btnDelete.addEventListener('click', deleteLocalStorage);

function deleteLocalStorage() {
    var yes = confirm('¿Desea eliminar el historial?');
    if (yes) {
        localStorage.clear();
        alert('Historial Eliminado');
        location.reload();
    } else {
        alert('Accion cancelada');
    }
}
function Total() {
    var resul = document.getElementById('result');
    var operation = resul.value;
    if (resul.value != '') {
        total = eval(resul.value);
        if (resul.value != total) {
            resul.value = total;
            Add(resul.value, operation);
            resul.value="";
        }
    }
}

function Add(value, operation) {

    var record = document.getElementById('list');
    var list = document.createElement('li');
    list.textContent = '' + operation + ' = ' + value;
    record.appendChild(list);

    var op = '' + operation + ' = ' + value;
    addLocalStorage(op);
}
function addLocalStorage(value) {
    var local = getLocalStorage();
    local.push(value);
    localStorage.setItem('list', JSON.stringify(local));
}

function getLocalStorage() {
    var data;
    if (localStorage.getItem('list') == null || localStorage.getItem('list') == undefined) {
        data = [];
    } else {
        data = JSON.parse(localStorage.getItem('list'));
    }
    return data;
}



