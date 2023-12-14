const myURL = new URL(
  "https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1"
);

console.log(myURL.hostname); // www.ejemplo.org
console.log(myURL.pathname); // /cursos/programacion
console.log(myURL.searchParams); // ordenar=vistas&nivel=1  - Query Parameters
console.log(typeof myURL.searchParams);
console.log(myURL.searchParams.get("ordenar"));
console.log(myURL.searchParams.get("nivel"));
