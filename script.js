const creatitulo=document.createElement("h1");
creatitulo.textContent="Etch-A-Sketch";
document.body.appendChild(creatitulo);
const creaboton=document.createElement("button");
creaboton.classList.add("botontamaño");
creaboton.textContent="elije el tamaño";
document.body.appendChild(creaboton);
const selectamaño=document.querySelector(".botontamaño");
const creacontenedor=document.createElement("div");
creacontenedor.setAttribute("id","contenedor");
document.body.appendChild(creacontenedor);
const contenedor=document.getElementById("contenedor");
const crearboton=document.createElement("button");
crearboton.classList.add("botonborrado");
crearboton.textContent="borrar";
document.body.appendChild(crearboton);


crearcuadricula(16);
function crearcuadricula(numcuadros){

    let areacuadros=numcuadros*numcuadros;
    for (let index = 0; index <areacuadros; index++) {
        let itemcuadro=document.createElement("div");
        itemcuadro.classList.add("cuadros");
        contenedor.style.display="grid";
        contenedor.style.gridTemplateColumns=`repeat(${numcuadros}, 1fr)`;
        contenedor.style.gridTemplateRows=`repeat(${numcuadros}, 1fr)`;
        contenedor.insertAdjacentElement('beforeend',itemcuadro);
    }
}


function preguntacuadros(){
    let numeroscuadros=prompt("ingresa un numero para cambiar la cantidad de cuadros");
    
    if (numeroscuadros>100){
        preguntacuadros();
    }
    else if(numeroscuadros<100){
        while(contenedor.firstChild){
            contenedor.removeChild(contenedor.firstChild);
        }
        crearcuadricula(numeroscuadros)
        let selecdivs= document.querySelectorAll('.cuadros');
        for (let i = 0; i < selecdivs.length; i++) {
            selecdivs[i].addEventListener('mouseenter',function(){
                selecdivs[i].classList.add("cambio");
            });
            
        }
    }
}

function borrarcuadros(){
    let selecdivs= document.querySelectorAll('.cuadros');
    for (let i = 0; i < selecdivs.length; i++) {
        selecdivs[i].classList.remove("cambio");
        };
        
    }

let selecdivs= document.querySelectorAll('.cuadros');

function cambiocolor(){
    for (let i = 0; i < selecdivs.length; i++) {
        selecdivs[i].addEventListener('mouseenter',function(){
            selecdivs[i].classList.add("cambio");
        });
        
    }

  
};


function eventotamaño(){
    selectamaño.addEventListener('click',preguntacuadros);
}

function eventoboorrado(){
    let botonborrar=document.querySelector('.botonborrado')
    botonborrar.addEventListener('click',borrarcuadros);
}
window.addEventListener("load",eventoboorrado)
window.addEventListener("load",eventotamaño);
window.addEventListener("load",cambiocolor);
