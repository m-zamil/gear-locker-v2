/* Video play pause button */
// Select the button and video elements
const playBtn = document.getElementById("playBtn");
const video = document.getElementById("video");

// Add event listener for button click
playBtn.addEventListener("click", function () {
  if (video.paused) {
    // If the video is paused, play the video and hide the button
    video.play();
    playBtn.style.display = "none";
  } else {
    // If the video is playing, pause the video and show the button
    video.pause();
    playBtn.style.display = "block";
  }
});

// Add event listener for video click
video.addEventListener("click", function () {
  if (video.paused) {
    // If the video is paused, play the video and hide the button
    video.play();
    playBtn.style.display = "none";
  } else {
    // If the video is playing, pause the video and show the button
    video.pause();
    playBtn.style.display = "block";
  }
});

video.addEventListener("play", function () {
  playBtn.style.display = "none";
});

video.addEventListener("pause", function () {
  playBtn.style.display = "block";
});

// Optional: Show the button again when the video ends (in case it was hidden)
video.addEventListener("ended", function () {
  playBtn.style.display = "block";
});
