var datos = [{nombre: "cami", edad:17 },
             {nombre: "juan", edad: 27},
             {nombre: "jhoselin", edad: 18}]

function mostrar(){
    var x = document.getElementById("id").value;

    console.log(datos[x]);
    var nombreDeAtributos = Object.keys(datos[x]);
    console.log(nombreDeAtributos)
    var texto = document.getElementById("texto");
    nombreDeAtributos.forEach(elementos =>{

       console.log(elementos);
})
    texto.innerText = x
    
}
