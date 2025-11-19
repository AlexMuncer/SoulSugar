const playlist = [
    { title: "Now Playing (2 Sugars) - Country Roads", src: "country roads.wav" },
    { title: "Now Playing (2 Sugars) - Yellow", src: "yellow.wav" },
    { title: "Now Playing (2 Sugars) - The Best", src: "the best.wav" },
    { title: "Now Playing (2 Sugars) - Stand By Me", src: "sbm.wav" },
    { title: "Now Playing (2 Sugars) - Valerie", src: "val.wav" },
    { title: "Now Playing (2 Sugars) - Back To Black", src: "back to black.wav" },
    { title: "Now Playing (2 Sugars) - I'm Yours", src: "i'm yours.wav" },
    { title: "Now Playing (2 Sugars) - Better Together", src: "better together.wav" },
    { title: "Now Playing (2 Sugars) - Everywhere", src: "everywhere.wav" },
    { title: "Now Playing (2 Sugars) - Fly Me To The Moon", src: "fly me to the moon.wav" }
  ];
  
  const audioPlayer = document.getElementById('audioPlayer');
  const playPauseBtn = document.getElementById('playPauseBtn');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const trackTitle = document.getElementById('trackTitle');
  
  let currentTrack = 0;
  
  function loadTrack(index) {
    const track = playlist[index];
    audioPlayer.src = track.src;
    trackTitle.textContent = track.title;
    audioPlayer.load();
    audioPlayer.play();
    playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
  }
  
  playPauseBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
      audioPlayer.play();
      playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
      audioPlayer.pause();
      playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
  });
  
  prevBtn.addEventListener('click', () => {
    currentTrack = (currentTrack - 1 + playlist.length) % playlist.length;
    loadTrack(currentTrack);
  });
  
  nextBtn.addEventListener('click', () => {
    currentTrack = (currentTrack + 1) % playlist.length;
    loadTrack(currentTrack);
  });
  
  audioPlayer.addEventListener('ended', () => {
    currentTrack = (currentTrack + 1) % playlist.length;
    loadTrack(currentTrack);
  });
  
  window.addEventListener('load', () => {
    loadTrack(currentTrack);
  });
  