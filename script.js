// songs saved here
const songs = [{
    name: "De_De_Pyaar_De_",
    title: "_De_De_Pyaar_De_",
    artist: "palak"
},
{
    name: "Dil_Mein_Ho_Tum_WHY_CHEAT_INDIA__Emraan_H,_Shreya_DRochak_K,_Armaan_M,_Bappi_L,_Manoj_M",
    title: "Dil mein ho tum..",
    artist: "armaan malik,Bappi L",
},
{
    name: "Duniyaa_Full_Video_Song_Kartik_Aaryan_Kriti_Sanon_Akhil__Dhvani_B__Duniya_Full_Song",
    title: "Duniyaa....",
    artist: "Akhil , Dhvani B",
},
{
    name: "arijit_singh",
    title: "Chaho mein aana ",
    artist: "arijit singh",
}, {
    name: "Khairiyat_Song_(Sad_Version)__Chhichhore__Pritam__Amitabh_Bhattacharya(256k)",
    title: "Khairiyat",
    artist: "Pritam, Amitabh Bhattacharya",
},
]

let title = document.getElementById("title");
let artist = document.getElementById("artist");
let music = document.getElementById("song");
let img = document.getElementById("img");
let check = false;
let mainbtn = document.getElementById("mainbtn");
let prevbtn = document.getElementById("prevbtn");
let nextbtn = document.getElementById("nextbtn");


let current_time = document.getElementById("current_time");
let duration = document.getElementById("duration_time");
let progress_bar = document.getElementById("progress-bar");


mainbtn.addEventListener("click", () => {

    if (check == false) {
        check = true;
        music.load() ;
        music.play().then(()=> {

        })
        .catch(error => {
            console.log(error) ;
        })

        img.classList.add("anime");
        mainbtn.classList.replace("fa-play", "fa-pause");
        mainbtn.title = "pause";
    } else {
        check = false;
        music.pause();
        img.classList.remove("anime");
        mainbtn.classList.replace("fa-pause", "fa-play");
        mainbtn.title = "play";
    }
})

function first_song(songs) {
    title.innerText = songs.title;
    artist.innerText = songs.artist;
    music.src = `${songs.name}.mp3`;
    //music.play() ;
    current_time.innerText = "0:0";
    let d = 0;
    duration.innerHTML = `${d}:${d}`;
}
function loadsong(songs) {
    title.innerText = songs.title;
    artist.innerText = songs.artist;
    music.src = `${songs.name}.mp3`;
    if (mainbtn.title == "pause"){
        music.play().then(()=> {

        })
        .catch(error => {
            console.log(error) ;
        })
    }
    current_time.innerText = "0:0";
    let d = 0;
    duration.innerHTML = `${d}:${d}`;
}

let current_song = 0;
first_song(songs[0]);

nextbtn.addEventListener("click", () => {
    current_song = (current_song + 1) % songs.length;
    loadsong(songs[current_song]);

})

prevbtn.addEventListener("click", () => {
    current_song = (current_song - 1) % songs.length;
    loadsong(songs[current_song]);

})

music.addEventListener("timeupdate", function () {
    // progress_bar.value = (song.currentTime)/(song.duration)*100 ;
    current_time.innerHTML = `${Math.floor(music.currentTime / 60)}:${Math.floor(music.currentTime % 60)}`;
    duration.innerHTML = `${Math.floor(music.duration / 60)}:${Math.floor(music.duration % 60)}`;
    progress_bar.min = "0";
    progress_bar.max = `${Math.floor(music.duration)}`;
    progress_bar.value = Math.floor(music.currentTime);

    if (progress_bar.value == progress_bar.max) {
        current_song = (current_song + 1) % songs.length;
        loadsong(songs[current_song]);
    }

})


function show(value) {
    current_time.innerHTML = `${Math.floor(value / 60)}:${Math.floor(value % 60)}`;
    music.currentTime = value;
    progress_bar.value = value;
}


// playlist


let playlist = document.getElementById("playlist");
let html = '<h1 style="text-align: center; margin-bottom: 1rem;">playlist</h1>';
songs.forEach((value, index) => {

    html += `<p id="playlist_song" class="songs" onclick="mayur(${index})">${value.name}</p>`;

   // console.log(value.name);
})
playlist.innerHTML = html;

function mayur(index) {
    music.src = `${songs[index].name}.mp3`;
    title.innerText = songs[index].title;
    artist.innerText = songs[index].artist;
    music.play().then(()=> {

    })
    .catch(error => {
        console.log(error) ;
    })
    mainbtn.classList.replace("fa-play", "fa-pause");
    mainbtn.title = "pause";
    check = true;
    img.classList.add("anime");
    current_song = index;
    //console.log(current_song);
}




        // let chal = document.querySelectorAll(".songs") ;
        // Array.from(chal).forEach((musics)=>{
        //     musics.addEventListener("click", (e)=> {
        //         music.src = `${e.target.innerHTML}.mp3` ;
        //         music.play() ;
        //         mainbtn.classList.replace("fa-play","fa-pause") ;
        //         mainbtn.title = "pause" ;
        //         check = true ;
        //         img.classList.add("anime") ;
        //     })
        // }) ;

// positions of main container and playlist box 

let sidenav = document.getElementById("side-nav") ;
let html2 = '<h1 style="text-align: center; margin-bottom:4px">All songs</h1><i class="fa-solid fa-xmark closebtn" onclick="closenav()"></i>';
songs.forEach((value, index) => {

    html2 += ` <p id="playlist_song" class="songs" onclick="mayur(${index})">${value.name}</p>`;

   // console.log(value.name);
})
sidenav.innerHTML = html2;


function openNav() {
    document.getElementById("side-nav").style.width = "350px";
  }

  function closenav() {
    document.getElementById("side-nav").style.width = "0";
  }