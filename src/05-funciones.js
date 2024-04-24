

// recomendado: asignar las funciones a CONSTANTES para evitar
// sobreescribirlas por error
// function saludar(nombre){
//     return `Hola ${nombre}`;
// };

// (y)
const saludar = function (nombre){
    return `Hola ${nombre}`;
};

// funciones de flecha
const saludar2 = (nombre)=>{
    return `Hola ${nombre}`;
};

// funciones de flecha seguidas
const saludar3 = (nombre)=>  `Hola ${nombre}`;

// funciones sin parametros
const saludar4 = ()=>  `Hola mundowo`;

// funciones sin parametros, sin return PERO con valor de retorno
// los parentesis que envuelven los corchetes indican
// que lo que s encuentra denro de los corchetes es algo que
// se esta devolviendo
const getUser = () => ({
    user : 'dayross',
    likes : 3
});

const getUsuarioActivo = (nombre) => ({
    uid: `@${nombre}.ig`,
    username : nombre.toUpperCase(),
})



console.log(saludar('Nani'));
console.log(saludar2('Nani'));
console.log(saludar3('Nani'));
console.log(saludar4());
console.log(getUser());
console.log(getUsuarioActivo('dayross'));