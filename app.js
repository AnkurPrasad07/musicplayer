const music = document.querySelector("audio");
const play = document.querySelector('#play');
const img = document.querySelector('img');

const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

const artist = document.querySelector('#artist');
const title = document.querySelector('#title');

const songs = [
    {
        name: "1",
        title: "Yalgaar",
        artist: "CarrryMinati"
    },

    {
        name: "2",
        title: "Vardaan",
        artist: "CarrryMinati"
    },

    {
        name: "3",
        title: "Game On",
        artist: "Ujjwal"
    }
]




let isPlaying = false;

const playMusic = ()=> {
    isPlaying = true;
    music.play();
    play.classList.replace('fa-play', 'fa-pause');
}

const pauseMusic = ()=> {
    isPlaying = false;
    music.pause();
    play.classList.replace('fa-pause', 'fa-play');
}

play.addEventListener('click', ()=>{
    isPlaying === true ? pauseMusic() : playMusic()
})


// chaging the music data when clicked
 const loadSongs = (songs)=>{
    title.innerHTML = songs.title;
    artist.innerHTML = songs.artist;
    img.src = "images/" + songs.name + ".jpg"
    music.src = "music/" + songs.name + ".mp3"
 }


//making a new variable for indexing my music
let songIndex = 0 

const nextSong = ()=> {
    songIndex = (songIndex + 1) % songs.length
    loadSongs(songs[songIndex])

    playMusic()
}

const prevSong = ()=> {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSongs(songs[songIndex])
    playMusic()
}


next.addEventListener('click', nextSong)
prev.addEventListener('click', prevSong)