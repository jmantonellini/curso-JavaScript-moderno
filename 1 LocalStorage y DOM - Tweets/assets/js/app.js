// Variables
const listaTweets = document.getElementById('lista-tweets');


// Event Listeners
eventListeners();

function eventListeners(){
    // cuando se envía el formulario
    document.querySelector('#formulario').addEventListener('submit',
    agregarTweet);

    // borrar tweets
    listaTweets.addEventListener('click', borrarTweet);

    // contenido cargado
    document.addEventListener('DOMContentLoaded', localStorageListo);
}



// Funciones

// Añadir twwet del formulario
function agregarTweet(e){
    e.preventDefault();
    // leer el valor del textarea
    const tweet = document.getElementById('tweet').value;
    // crear botón de eliminar
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';


    // crear elemento y añadirle el contenido a la lista
    const li = document.createElement('li');
    li.innerText = tweet;

    // añade el botón borrar al tweet
    li.appendChild(botonBorrar);
    // añade el tweet a la lista
    listaTweets.appendChild(li);

    // añadir a local storage
    agregatTweetLocalStorage(tweet);
}

// elimina el tweet del DOM
function borrarTweet(e){
    e.preventDefault();
    if(e.target.className === 'borrar-tweet') {
        e.target.parentElement.remove();
        borrarTweetLocalStorage(e.target.parentElement.innerText);
    }
}

// mostrar datos de local storage en la lista
function localStorageListo() {
    let tweets;

    tweets = obtenerTweetsLocalStorage();

    tweets.forEach(function(tweet) {
        // crear botón de eliminar
        const botonBorrar = document.createElement('a');
        botonBorrar.classList = 'borrar-tweet';
        botonBorrar.innerText = 'X';


        // crear elemento y añadirle el contenido a la lista
        const li = document.createElement('li');
        li.innerText = tweet;

        // añade el botón borrar al tweet
        li.appendChild(botonBorrar);
        // añade el tweet a la lista
        listaTweets.appendChild(li); 
    });
}

// agrega tweet al Local Storage
function agregatTweetLocalStorage(tweet){
    let tweets;
    tweets = obtenerTweetsLocalStorage();
    // agregar el nuevo tweet
    tweets.push(tweet);
    // convertir de string a arreglo para local storage
    localStorage.setItem('tweets', JSON.stringify(tweets));

}

// comprobar que hay elementos en local storage, retorna un arreglo
function obtenerTweetsLocalStorage(){
    let tweets;

    // revisamos los valores del local storage
    if(localStorage.getItem('tweets') === null){
        tweets = [];
    } else {
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }
    return tweets;
}

// eliminar tweet del local storage
function borrarTweetLocalStorage(tweet) {
    
    let tweets, tweetBorrar;
    // elimina la X del tweet
    tweetBorrar = tweet.substring(0, tweet.length - 1);

    tweets = obtenerTweetsLocalStorage();

    tweets.forEach(function(tweet, index) {
        if (tweetBorrar === tweet) {
            tweets.splice(index, 1);
        }
    });

    localStorage.setItem('tweets', JSON.stringify(tweets));
}