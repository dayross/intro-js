
// arreglos  
const arreglo = [];

arreglo.push(1);
arreglo.push(2);
arreglo.push(3);
arreglo.push(4);

// operador spread manda individualmente cada uno de los objetos
// a su nueva posicion

const arreglo2 = [...arreglo, 5]
// esta funcion se llama callback: una funcion que se ejecuta solamente dentro
// de esa llamada. se ejecuta en este caso por cada uno de los elementos
// del arreglo
const arreglo3 = arreglo2.map( function(number){
    return `Hola ${number * 3}`;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);


