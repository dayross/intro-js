const flores = ["margarita", "rosa", "violeta"];

const [, , pos3] = flores;

console.log(pos3);

const retornaArreglo = () => (['ASAD', 454]);

const arreglo = retornaArreglo;

const [letras, num] = retornaArreglo();

console.log(letras);
console.log(num);

const ueState = (valor) => {
    return [valor, ()=>{console.log(`Hola ${valor}`);}];
}
console.log('----------');
const [nombre, setNombre] = ueState('Diana');
console.log(nombre);
setNombre();
