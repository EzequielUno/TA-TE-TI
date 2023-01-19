let botones = document.querySelectorAll("button");
let tableroX = document.querySelector(".tableroX");
let tableroO = document.querySelector(".tableroO");
let botonCero = document.querySelector(".pongoCero")
let contador = 0;
let puntosX = 0;
let puntosO = 0;
let matrix=["","","","","","","","",""];


let validoFilas = () =>{
let fila1=matrix[0]+matrix[1]+matrix[2];    
let fila2=matrix[3]+matrix[4]+matrix[5];    
let fila3=matrix[6]+matrix[7]+matrix[8];    
    
if(fila1 === "circulocirculocirculo" ||
   fila2 === "circulocirculocirculo" || 
   fila3 === "circulocirculocirculo")
     {
        puntosO++;
        alert("Ganó el jugador O");  
        return(true);
        };

if( fila1 === "cruzcruzcruz" ||
    fila2 === "cruzcruzcruz" ||
    fila3 === "cruzcruzcruz" )  
        {
            puntosX++;
            alert("Ganó el jugador X");
            return(true);
        }

}

let validoColumnas = () =>{
let columna1=matrix[0]+matrix[3]+matrix[6];    
let columna2=matrix[1]+matrix[4]+matrix[7];    
let columna3=matrix[2]+matrix[5]+matrix[8];    
    
if(columna1 === "circulocirculocirculo" ||
   columna2 === "circulocirculocirculo" ||
   columna3 === "circulocirculocirculo")  
        {
            puntosO++
            alert("Ganó el jugador O");  
            return(true);
        }

if(columna1 === "cruzcruzcruz" ||
   columna2 === "cruzcruzcruz" ||
   columna3 === "cruzcruzcruz")  
        {
            puntosX++;
            alert("Ganó el jugador X");  
            return(true)
        }
}

let validoDiagonales = () =>{
let diagonal1=matrix[0]+matrix[4]+matrix[8];    
let diagonal2=matrix[6]+matrix[4]+matrix[2];    
    
if(diagonal1 === "circulocirculocirculo" ||
   diagonal2 === "circulocirculocirculo")  
        {
            puntosO++;
            alert("Ganó el jugador O");  
            return(true)
        }
if(diagonal1 === "cruzcruzcruz" ||
   diagonal2 === "cruzcruzcruz")  
        {
            puntosX++;
            alert("Ganó el jugador X");  
            return(true)
        }
}

let juego = function() {
//    console.log(event.path[0]);
if(contador<9){

    if (contador%2===0){  
    this.classList.add("cruz");
    this.disabled = true;
}else{this.classList.add("circulo");
    this.disabled = true;}
    contador++
//    console.log(contador)

if (contador==9) {
    alert("No hay ganador. Siga jugando!!!")
    resetear();
};
};
let valor = event.target.classList.value;
let  posicion = event.target.innerText;
matrix.splice(posicion-1, 1,valor);

if( validoFilas() ===  true || 
    validoColumnas() ===  true ||
    validoDiagonales() ===  true){
        tableroO.textContent=puntosO;
        tableroX.textContent=puntosX;
        resetear();
    }

};

for(i of botones){
    if(i.innerText == "PONER TABLERO EN CERO"){

    } else {
    i.addEventListener("click", juego);
    // i.addEventListener("click", ver = () =>{
    //     console.dir(event.target.classList.value)
    // })

}
};

let resetear = ()=>{
    botones.forEach(i => {
    if(i.classList.value=="circulo"){
        i.classList.remove("circulo")
        i.disabled=false
    }else{
        i.classList.remove("cruz")
        i.disabled=false
    }   
});
matrix=["","","","","","","","",""]
contador=0
};

let tableroCero = () =>{
    puntosX = 0;
    puntosO = 0;
    tableroO.textContent=puntosO;
    tableroX.textContent=puntosX;
}

botonCero.addEventListener("click", tableroCero);