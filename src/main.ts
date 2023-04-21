interface Grupo {
    nombre: string;
    año: number;
    activo: boolean;
    genero:string;
};

const style = "font-weight: bold; font-size: 18px; color: green;";
const poprock = "🎵 Pop Rock";
const rock = "🎸 Rock";
const hardrock = "🤘 Hard Rock";
const clasica = "🎼 Clásica";

const Grupo1 = {
    nombre: "The Beatles",
    año:1960,
    activo: true,
    genero:poprock,
};

const Grupo2 = {
    nombre: "Queen",
    año:1970,
    activo: false,
    genero:rock,
};

const Grupo3 = {
    nombre: "AC DC",
    año:1973,
    activo: true,
    genero:hardrock,
};

const Grupo4 = {
    nombre: "Ludwig van Beethoven",
    año:1770,
    activo: false,
    genero:clasica,
};

const Grupo5 = {
    nombre: "The Rolling Stones",
    año:1962,
    activo: true,
    genero:rock,
};
console.log("%c"+ Grupo1.nombre, style);
console.log("- Año de fundación:", Grupo1.año);
console.log("- Activo:", Grupo1.activo);
console.log(`- Género musical: ${Grupo1.genero}`);

console.log("%c"+ Grupo2.nombre, style);
console.log("- Año de fundación:", Grupo2.año)
console.log("- Activo:", Grupo2.activo)
console.log(`- Género musical: ${Grupo2.genero}`);

console.log("%c"+ Grupo3.nombre, style);
console.log("- Año de fundación:", Grupo3.año);
console.log("- Activo:", Grupo3.activo)
console.log(`- Género musical: ${Grupo3.genero}`);

console.log("%c"+ Grupo4.nombre, style);
console.log("- Año de fundación:", Grupo4.año);
console.log("- Activo:", Grupo4.activo)
console.log(`- Género musical: ${Grupo4.genero}`);

console.log("%c"+ Grupo5.nombre, style);
console.log("- Año de fundación:", Grupo5.año)
console.log("- Activo:", Grupo5.activo)
console.log(`- Género musical: ${Grupo5.genero}`);