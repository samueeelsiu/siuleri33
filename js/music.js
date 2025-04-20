const music = document.getElementById("bg-music");
const muteBtn = document.getElementById("mute-btn");

muteBtn.addEventListener("click", () => {
  music.muted = !music.muted;
  muteBtn.textContent = music.muted ? "🔈" : "🔇";
});
