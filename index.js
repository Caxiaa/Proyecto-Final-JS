class Producto {
    constructor(id, nombre, precio, stock){
        this.id = id;
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.stock = parseInt(stock);
    }
}

let productos = [];

const addProduct = (product) =>{
    productos.push(product);
    return product;   
}

const readProducts = ()=>{
    for(let i=0;i<productos.length;i++){
        alert(`Producto ${i+1}:
        -${productos[i].nombre}
        -$${productos[i].precio}
        -Stock: ${productos[i].stock}
        -ID: ${productos[i].id}`);
    }
}

const deleteProduct = (id)=>{
    let productDelete = productos.filter((producto)=>producto.id != id)
    for(let i=0;i<productos.length;i++){
        if(productos[i].id==id){
            alert(`El producto ${productos[i].nombre} fue eliminado correctamente!`);
        }else{
            alert(`El id ${id} no corresponde a ningun producto!`);
        }
    }
    productos = productDelete;
}

const updateProduct = (id) =>{
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
    let find = productos.find((producto)=>producto.id == id)
    if(!find){
        return alert(`El id ${id} no corresponde a ningun producto!`);
    }
    return find;
}

let ingreso;

do {
    ingreso = prompt(`Ingrese 1 para agregar producto\nIngrese 2 para ver todos los productos
Ingrese 3 para eliminar producto\nIngrese 4 para modificar producto\nIngrese 5 para buscar un producto especifico
Ingrese ESC para salir`);
    switch(ingreso){
        case "1":
            let nombre = prompt("Ingrese el nombre del producto:");
            let precio = prompt("Ingrese el precio del producto:");
            let stock = prompt("Ingrese la cantidad de stock en unidades del producto:");
            let product = new Producto(productos.length+1,nombre,precio,stock);
            let producto = addProduct(product);
            alert(`El producto "${producto.nombre}" fue agregado correctamente!`);
            break;
        case "2":
            readProducts();
            break;
        case "3":
            let idDelete = prompt("Ingrese el id del producto que desea eliminar: ");
            deleteProduct(idDelete);
            break;
        case "4":
            let idUpdate = prompt("Ingrese el id del producto que quiere mofidicar: ");
            updateProduct(idUpdate);
            break;
        case "5":
            let idFind = prompt("Ingrese el id del producto que quiere encontrar: ");
            let encontrado = findProduct(idFind);
            alert(`El producto buscado fue ${encontrado.nombre}:
            Precio: $${encontrado.precio}
            Stock: ${encontrado.stock} unidades
            ID: ${encontrado.id}
            `)
            break;
    }
} while (ingreso != "ESC");

alert("Has salido del sistema. Nos vemos luego! :)")
