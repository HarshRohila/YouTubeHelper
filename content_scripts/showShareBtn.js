(function () {
  insertShareBtn();
})();

function insertShareBtn() {
  var btn = document.createElement("button");
  btn.innerText = "Share";
  btn.classList.add("youtubeHelperShareBtn");

  btn.setAttribute(
    "style",
    `position:fixed;
    bottom:20px;
    right:20px;
    z-index:100;

    width: 50px;
    height: 50px;
    background-color: red;
    border-radius: 50%;
    box-shadow: 0 6px 10px 0 #666;
    
    font-size: 14px;
    color: white;

    display:grid;
    place-items:center;
    `
  );
  btn.addEventListener("click", () => {
    var videoURL = getVideoURL();
    share(videoURL);
  });

  document.body.appendChild(btn);
}

function getVideoURL() {
  var ytplayer = document.getElementById("movie_player");
  return ytplayer.wrappedJSObject.getVideoUrl();
}

async function share(url) {
  const shareData = {
    title: "YouTube URL",
    url: url,
  };
  try {
    await navigator.share(shareData);
  } catch (err) {
    console.error(err);
  }
}
