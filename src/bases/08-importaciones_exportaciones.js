import heroes, {owners} from '../data/heroes';


console.log(heroes);

const getHeroById = (id) => {
    return heroes.find((element)=> element.id == id);
}

console.log(getHeroById(4));
console.log('----')

const getHeroByOwner = (owner) =>{
    return heroes.filter((elem)=> elem.owner==owner);
}

console.log(getHeroByOwner('Marvel'));