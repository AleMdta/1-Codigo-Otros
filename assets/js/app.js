/*
  El código obtiene información de un usuario de github, que lee desde la API de GitHub https://api.github.com
  Y encuentra 3 datos en específico: el nombre, la dirección del blog del usuario y dónde se localiza.
  Estos datos los guarda en un párrafo del HTML que corresponda a su selector, y los muestra si abres la página en un buscador.
  
*/

const baseEndpoint = 'https://api.github.com'; //guaradnado en una constante el endpoint de la API degitHub
const usersEndpoint = `${baseEndpoint}/users`;//Me muevo a esta dirección  https://api.github.com/users , donde encuentro datos de usuarios de gitHub
const $n = document.querySelector('.name');//voy al documento HTML y busco un selector del tipo class= "name"
const $b = document.querySelector('.blog');//voy al documento HTML y busco un selector del tipo class= "blog"
const $l = document.querySelector('.location'); //voy al documento HTML y busco un selector del tipo class= "location"

//Función para mostrar datos de un usuario de github, utilizando el username
async function displayUser(username) { //La función se debe volver asíncrona para poder utilizar el await
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  //console.log(username);//Me imprime un objeto con los datos del usuario que se encuentra en esta ruta https://api.github.com/users/stolinski 
  const data = await response.json();//Guardo en una constante los datos que encontró en la ruta del response
  console.log(data);
  $n.textContent = `${data.name}`;//Asigna el contenido de los datos del usuario al área que le corresponde en el HTML
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
}

//Si la función displayUser no se puede ejecutar por algún error, entonces se ejecuta la función handleError
function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);