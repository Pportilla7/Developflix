import peliculas from './peliculas.js';

const arr_accion=peliculas.filter(pelicula=>pelicula.genre_ids.includes(28));
const arr_thriller=peliculas.filter(pelicula=>pelicula.genre_ids.includes(53));
const arr_aventura=peliculas.filter(pelicula=>pelicula.genre_ids.includes(12));


console.log(arr_accion.length);
console.log(arr_thriller.length);
console.log(arr_aventura.length);

let div_gen_accion=document.getElementById('genero-28');

for(let i=0;i<arr_accion.length;i++){
    let div_gen_accion_peliculas=document.createElement('div');
    div_gen_accion_peliculas.id='Pelicula_accion'+i;
    div_gen_accion.appendChild(div_gen_accion_peliculas);
    let titulo=document.createElement('h3');
    let image=document.createElement('img');
    div_gen_accion_peliculas.appendChild(image);
    div_gen_accion_peliculas.appendChild(titulo);
    image.src='https://image.tmdb.org/t/p/w500'+arr_accion[i].poster_path;
    titulo.textContent=arr_accion[i].title;
}



