var songs = [
  {
    name: "Devils Eyes",
    duration: "2:16",
    url: "./audio/Devil Eyes (320K).mp3",
    image: "./images/images1.jpeg",
  },
  {
    name: "Friend of the Devil",
    duration: "3:00",
    url: "./audio/Adam Jensen - Friend of the Devil (Official Audio) (320K).mp3",
    image: "./images/images2.jpeg",
  },
  {
    name: "Why Not",
    duration: "2:49",
    url: "./audio/Ghostface Playa - Why Not (320K).mp3",
    image: "./images/images3.jpeg",
  },
  {
    name: "Sahara",
    duration: "2:51",
    url: "./audio/Hensonn-Sahara (320K).mp3",
    image: "./images/images4.jpg",
  },
  {
    name: "Saying Yes (Trias Remix)",
    duration: "3:08",
    url: "./audio/Hopex & Calli Boom - Saying Yes (Trias Remix).mp3",
    image: "./images/images5.jpeg",
  },
  {
    name: "Take me to Church (YABØII Flip)",
    duration: "4:04",
    url: "./audio/Hozier - Take me to Church (YABØII Flip) (320K).mp3",
    image: "./images/images6.jpeg",
  },
  {
    name: "My Ordinary Life",
    duration: "3:19",
    url: "./audio/myOrdinaryLife.mp3",
    image: "./images/images7.jpg",
  },
  {
    name: "suffer with me (𝖙𝖔 𝖆𝖑𝖑 𝖘𝖚𝖇𝖏𝖊𝖈𝖙 𝖔𝖋 𝖞𝖒𝖎𝖗,𝖒𝖞 𝖓𝖆𝖒𝖊 𝖎𝖘 𝕰𝖗𝖊𝖓)",
    duration: "3:47",
    url: "./audio/sufferwithme.mp3",
    image: "./images/images8.jpeg",
  },
  {
    name: "Living Life In The Night",
    duration: "2:43",
    url: "./audio/Living Life In The Night - Cheriimoya, Sierra Kidd (Lyrics) (320K).mp3",
    image: "./images/images9.jpeg",
  },
  {
    name: "Lost Forever & Polozhenie [Kokushibo_ Tiktok]",
    duration: "1:36",
    url: "./audio/Lost Forever & Polozhenie [Kokushibo_ Tiktok] (320K).mp3",
    image: "./images/images10.jpg",
  },
  {
    name: "INCOMING",
    duration: "2:20",
    url: "./audio/MC ORSEN _INCOMING_ (320K).mp3",
    image: "./images/images11.jpeg",
  },
  {
    name: "Mood - Nick Daniels cover (Lyrics)",
    duration: "2:42",
    url: "./audio/Mood - Nick Daniels cover (Lyrics) (320K).mp3",
    image: "./images/images12.jpeg",
  },
  {
    name: "vendetta!",
    duration: "1:47",
    url: "./audio/MUPP x Sadfriendd - vendetta! (320K).mp3",
    image: "./images/images13.jpeg",
  },
  {
    name: "Keraunos",
    duration: "2:25",
    url: "./audio/PlayaPhonk - Keraunos (320K).mp3",
    image: "./images/images14.jpg",
  },
  {
    name: "Hola como tale tale vu (1, 2, 3) (feat. Jason Derulo & De La Ghetto",
    duration: "3:17",
    url: "./audio/Sofia Reyes - Hola como tale tale vu (1, 2, 3) (Lyrics) (feat. Jason Derulo & De La Ghetto (320K).mp3",
    image: "./images/images15.jpeg",
  },
];

var audio = new Audio();
var selectedSong = 0;
var flag = 0;

var allSongs = document.querySelector("#all-songs");
var playing = document.querySelector("#playing");

function mainFunction() {
  var clutter = "";
  songs.forEach(function (song, index) {
    clutter += `<div id="${index}" class="song-card">
    <span>
      <p>${index + 1}</p>
      <img
        src="${song.image}"
        alt="">
      <h3>${song.name}</h3>
    </span>
    <h6>${song.duration}</h6>
  </div>`;
  });
  audio.src = songs[selectedSong].url;
  allSongs.innerHTML = clutter;
  document.querySelector(
    "#left"
  ).innerHTML = `<img id="back" src="${songs[selectedSong].image}" alt="">
    <img id="front" src="${songs[selectedSong].image}" alt="">`;

  allSongs.addEventListener("click", function (dets) {
    selectedSong = dets.target.id;
    mainFunction();
    audio.play();
    playing.style.display = "inline";

    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
    flag = 1;
  });
}

var forward = document.querySelector("#forward");
var play = document.querySelector("#play");
var backward = document.querySelector("#backward");

play.addEventListener("click", function () {
  if (flag == 0) {
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
    mainFunction();
    audio.play();
    playing.style.display = "inline";
    flag = 1;
  } else {
    play.innerHTML = `<i class="ri-play-mini-fill"></i>`;
    mainFunction();
    audio.pause();
    playing.style.display = "none";
    flag = 0;
  }
});

forward.addEventListener("click", function () {
  if (selectedSong < songs.length - 1) {
    console.log(songs.length);
    selectedSong++;
    mainFunction();
    audio.play();
    playing.style.display = "inline";
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
    flag = 1;
  } else if (selectedSong == songs.length - 1) {
    selectedSong = 0;
    mainFunction();
    audio.play();
    playing.style.display = "inline";
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
    flag = 1;
  }
});
backward.addEventListener("click", function () {
  if (selectedSong == 0) {
    selectedSong = songs.length - 1;
    mainFunction();
    audio.play();
    playing.style.display = "inline";
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
    flag = 1;
  } else if (selectedSong > 0) {
    selectedSong--;
    mainFunction();
    audio.play();
    playing.style.display = "inline";
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
    flag = 1;
  }
});

mainFunction();
