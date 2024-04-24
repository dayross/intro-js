// desestructuracion

const comida_nutrimental = {
    nombre : 'manzana',
    tipo : 'golden granny',
    vitaminas : true,
    minerales : false,
    calcio : false,
    proteina : true,
    carbs : true,
};

// si queremos asignar el valor de carbs a la variable tieneCarbohidratos

const {carbs : tieneCarbohidratos} = comida_nutrimental;

console.log(tieneCarbohidratos);

// para acceder a ese valor con ese mismo nombre en la variable
const {nombre, tipo} = comida_nutrimental;

//
console.log(nombre);
console.log(tipo);

// podemos desestructurar desde el argumento cuando conocemos
// la propiedad del objeto y vamos a solicitar esa siempre
//-----
// si especificamos una prpiedad que no se encuentra en el objeto,
// se establece como undefined
const retornaComida = ({proteina, grasa})=>{
    //const {calcio, proteina} = comida
    console.log(proteina, grasa);
};
retornaComida(comida_nutrimental);

const ueContext = ({nombre, vitaminas}) =>{
    return {
        nombreCientifico: nombre,
        valor : vitaminas
    }
};
const {nombreCientifico} = ueContext(comida_nutrimental);


console.log(`nombre cientifico: ${nombreCientifico}`);
