const spinner = document.querySelector('.spinner');
const result = document.getElementById('results');

class API {
    constructor(artist, song){
        this.artist = artist;
        this.song = song;
    }

    async getDataFromAPI(){
        while(result.firstChild){
            result.removeChild(result.firstChild);
        }
        spinner.classList.add('d-block');
        const url = `https://api.lyrics.ovh/v1/${this.artist}/${this.song}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        if(data.lyrics){
            const { lyrics } = data;
            const h4Header = document.createElement('h4');
            h4Header.innerHTML= `<strong>Artist:</strong> ${this.artist}`
            h4Header.className ='text-capitalize'
            const pHeader = document.createElement('p');
            pHeader.innerHTML = `<strong>Song:<strong> ${this.song}`;
            pHeader.className ='text-capitalize';
            const divLyrics = document.createElement('div');
            result.appendChild(h4Header);
            result.appendChild(pHeader);
            spinner.classList.remove('d-block');
            divLyrics.textContent = lyrics;
            result.appendChild(divLyrics);
        }else{
            const divLyrics = document.createElement('div');
            divLyrics.textContent = 'This song does not exist. Try it with other.';
            divLyrics.classList.add('alert', 'alert-info', 'text-center');
            spinner.classList.remove('d-block');
            result.appendChild(divLyrics);
            setTimeout(()=> {
                divLyrics.textContent = '';
                divLyrics.classList.remove('alert', 'alert-info', 'text-center');
            },3500)
        }
    }
}

export default API;