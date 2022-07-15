class Producto {
    constructor(id, nombre, precio, stock){
        this.id = id;
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.stock = parseInt(stock);
    }
    addProduct = (product)=>{
        productos.push(product);
        return product;
    }
}

let productos = [];

// const addProduct = (product) =>{
//     productos.push(product);
//     return product;   
// }

const readProducts = ()=>{
    if(productos.length == 0){
        return alert("No hay productos cargados al sistema.");
    }
    for(let i=0;i<productos.length;i++){
        alert(`Producto ${i+1}:
        -${productos[i].nombre}
        -$${productos[i].precio}
        -Stock: ${productos[i].stock}
        -ID: ${productos[i].id}`);
    }
}

const deleteProduct = (id)=>{
    if(id == ""){
        return alert("No puedes ingresar un id vacio");
    }
    let productDelete = productos.filter((producto)=>producto.id != id)
    for(let i=0;i<productos.length;i++){
        if(productos[i].id==id){
            alert(`El producto ${productos[i].nombre} fue eliminado correctamente!`);
            return productos = productDelete;
        }
    }
    return alert(`El id ${id} no corresponde a ningun producto!`);
}

const updateProduct = (id) =>{
    if(id == ""){
        return alert("No puedes ingresar un id vacio");
    }
    for(let i=0;i<productos.length;i++){
        if(productos[i].id == id){
            let ingreso = prompt(`Queres modificar el producto ${productos[i].nombre}? (Ingrese si o SI)`);
            if((ingreso == "si") || (ingreso == "SI")){
                let nombre = prompt("Ingrese el nombre del producto:");
                let precio = prompt("Ingrese el precio del producto:");
                let stock = prompt("Ingrese la cantidad de stock en unidades del producto:");
                let product = new Producto(productos.length+1,nombre,precio,stock);
                alert(`El producto "${productos[i].nombre}" fue modificado correctamente!`);
                productos[i] = product;
            }else{
                alert("Ningun producto fue modificado!");
            }
        }else{
            alert(`El id ${id} no corresponde a ningun producto!`);
        }
    }
}

const findProduct = (id)=>{
    if(id == ""){
        return alert("No puedes ingresar un id vacio");
    }
    let find = productos.find((producto)=>producto.id == id)
    if(!find){
        return alert(`El id ${id} no corresponde a ningun producto!`);
    }
    return alert(`El producto buscado fue ${find.nombre}:
    Precio: $${find.precio}
    Stock: ${find.stock} unidades
    ID: ${find.id}
    `)
}

let ingreso;

do {
    ingreso = prompt(`Ingrese 1 para agregar producto\nIngrese 2 para ver todos los productos
Ingrese 3 para eliminar producto\nIngrese 4 para modificar producto\nIngrese 5 para buscar un producto especifico
Ingrese ESC para salir`);
    switch(ingreso){
        case "1":
            let nombre = prompt("Ingrese el nombre del producto o ESC/esc para volver atras:");
            if((nombre == "ESC") || (nombre == "esc")){
                break;
            }
            if(nombre == ""){
                alert("No puedes ingresar un producto sin nombre.");
                break;
            }
            let precio = prompt("Ingrese el precio del producto:");
            if(precio == ""){
                alert("No puedes ingresar un producto sin precio.");
                break;
            }
            let stock = prompt("Ingrese la cantidad de stock en unidades del producto:");
            let product = new Producto(productos.length+1,nombre,precio,stock);
            let producto = product.addProduct(product);
            alert(`El producto "${producto.nombre}" fue agregado correctamente!`);
            break;
        case "2":
            readProducts();
            break;
        case "3":
            let idDelete = prompt("Ingrese el id del producto que desea eliminar o ESC/esc para volver atras: ");
            if((idDelete == "ESC") || (idDelete == "esc")){
                break;
            }
            deleteProduct(idDelete);
            break;
        case "4":
            let idUpdate = prompt("Ingrese el id del producto que quiere mofidicar o ESC/esc para volver atras: ");
            if((idUpdate == "ESC") || (idUpdate == "esc")){
                break;
            }
            updateProduct(idUpdate);
            break;
        case "5":
            let idFind = prompt("Ingrese el id del producto que quiere encontrar o ESC/esc para volver atras: ");
            if((idFind == "ESC") || (idFind == "esc")){
                break;
            }
            findProduct(idFind);
            break;
    }
} while (ingreso != "ESC");

alert("Has salido del sistema. Nos vemos luego! :)")
