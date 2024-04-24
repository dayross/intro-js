

const persona = {
    nombre: 'Nath',
    edad: '34',
    color: 'verde',
    medidas : {
        cintura : 28,
        cadera : 32,
        busto : 29,
        zapato : "6 US",
        general : "M"
    }
};

// esto hace una copia de la referencia a persona en la constante
// persona 2
const persona2 = persona;
// esto CAMBIA el valor en el objeto (al que hace referencia)
persona2.medidas.general = "Ch"

const persona3REAL = {...persona, nombre : "Melissa", };


console.log(persona);
console.log(persona2);
console.log(persona3REAL);