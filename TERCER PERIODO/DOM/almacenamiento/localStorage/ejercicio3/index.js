let productos=[];
let guardar=()=>{
    let nombre=document.getElementById("name").value
    let tipo=document.getElementById("type").value
    let precio=document.getElementById("price").value
    let prod={
        nombre:nombre,
        tipo:tipo,
        precio:precio
    }
    //push final de un arreglo
    productos.push(prod)
    console.log(productos)
    //localStorage es de tipo texto
    //json.stringify=> convertir objeto a texto
    //json.parse=> convertir texto a arreglo
    localStorage.setItem("productos", JSON.stringify(productos))
}
// creacion de tabla
let verDatos=()=>{
    //alert(datos)
    tabla.textContent=""
    let datos=JSON.parse(localStorage.getItem("productos"))
    let tabla=document.createElement("table")
    for(let i=0; i<datos.length; i=i+1){
            let fila=document.createElement("tr")
            let celdaNombre=document.createElement("td")
            celdaNombre.textContent=datos[i].nombre
            fila.appendChild(celdaNombre)
            let celdaTipo=document.createElement("td")
            celdaTipo.textContent=datos[i].tipo
            fila.appendChild(celdaTipo)
            let celdaPrecio=document.createElement("td")
            celdaPrecio.textContent=datos[i].precio
            fila.appendChild(celdaPrecio)
            tabla.appendChild(fila)
    }
    
    let div=document.getElementById("tabla")
    div.appendChild(tabla)
}