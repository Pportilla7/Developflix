import peliculas from './peliculas.js';

const arr_accion=peliculas.filter(pelicula=>pelicula.genre_ids.includes(28));
const arr_thriller=peliculas.filter(pelicula=>pelicula.genre_ids.includes(53));
const arr_aventura=peliculas.filter(pelicula=>pelicula.genre_ids.includes(12));


console.log(arr_accion.length);
console.log(arr_thriller.length);
console.log(arr_aventura.length);

let div_gen_accion=document.getElementById('genero-28');

for(let i=0;i<arr_accion.length;i++){
    //Creo un div para cada pelicula y las coloco como hijo de la div genero-28
    let div_gen_accion_peliculas=document.createElement('div');
    div_gen_accion_peliculas.id='Pelicula_accion'+i;
    div_gen_accion.appendChild(div_gen_accion_peliculas);

    //Creo un titulo y una imagen y los introduzco como hijo de cada div de cada pelicula
    let titulo=document.createElement('h3');
    let image=document.createElement('img');
    div_gen_accion_peliculas.appendChild(image);
    div_gen_accion_peliculas.appendChild(titulo);

    //Les doy valor al titulo y a la imagen
    image.src='https://image.tmdb.org/t/p/w500'+arr_accion[i].poster_path;
    titulo.textContent=arr_accion[i].title;
}


//Para las peliculas de thriller
let div_gen_thriller=document.getElementById('genero-53');

for(let j=0;j<arr_thriller.length;j++){
    //Creo un div para cada pelicula y las coloco como hijo de la div genero-28
    let div_gen_thriller_peliculas=document.createElement('div');
    div_gen_thriller_peliculas.id='Pelicula_thriller'+j;
    div_gen_thriller.appendChild(div_gen_thriller_peliculas);

    //Creo un titulo y una imagen y los introduzco como hijo de cada div de cada pelicula
    let titulo=document.createElement('h3');
    let image=document.createElement('img');
    div_gen_thriller_peliculas.appendChild(image);
    div_gen_thriller_peliculas.appendChild(titulo);

    //Les doy valor al titulo y a la imagen
    image.src='https://image.tmdb.org/t/p/w500'+arr_thriller[j].poster_path;
    titulo.textContent=arr_thriller[j].title;
}



