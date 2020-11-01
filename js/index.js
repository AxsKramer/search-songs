import API from './api.js';

const form = document.getElementById('form');
const divMessage = document.getElementById('message');

form.addEventListener('submit', searchSong);

function searchSong(event){
    event.preventDefault();

    const artist = document.querySelector('#artist').value;
    const song = document.querySelector('#song').value;

    if(artist === '' || song === ''){
        divMessage.textContent = "Both field are required";
        divMessage.classList.add('alert', 'alert-danger', 'text-center');
        setTimeout(() => {
            divMessage.textContent = '';
            divMessage.classList.remove('alert', 'alert-danger', 'text-center')
        },3000);
        return;
    }

    const newSearch = new API(artist, song);
    newSearch.getDataFromAPI();
}
