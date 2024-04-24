const nombre = 'Diana';
const apellido = 'Zapata';

// const nombreCompleto = nombre + ' ' + apellido;
// dentro de los corchetes, va codigo de JS
const nombreCompleto = `${nombre}
${apellido} `;
const saludo = `Hewwo`;

console.log(nombreCompleto);
console.log(saludo);
console.log(`Funcion ${getSaludo(apellido)}`);

function getSaludo(nombre){
    return 'Hola ' + nombre;
}