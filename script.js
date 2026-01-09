const video = document.getElementById("video");

if (video) {
  navigator.mediaDevices.getUserMedia({
    video: { facingMode: "user" }
  }).then(stream => {
    video.srcObject = stream;
  });
}

function scanMood() {
  const moods = ["happy", "sad", "calm"];
  const mood = moods[Math.floor(Math.random() * moods.length)];

  setTimeout(() => {
    window.location.href = mood + ".html";
  }, 700);
}
