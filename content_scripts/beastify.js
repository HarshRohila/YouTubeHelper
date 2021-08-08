(function() {
  /**
   * Check and set a global guard variable.
   * If this content script is injected into the same page again,
   * it will do nothing next time.
   */

  // share('hello');
  insertBtn();
  function insertBtn() {
    var btn = document.createElement('button');
    btn.innerText = 'Share';
    btn.setAttribute('id', 'harsh-rohila')
    btn.setAttribute('style', `position:fixed;
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
    `);
    btn.addEventListener('click', () => {
      var videoURL = getVideoURL();
      share(videoURL);
    })

    document.body.appendChild(btn);
  }

  /**
   * Given a URL to a beast image, remove all existing beasts, then
   * create and style an IMG node pointing to
   * that image, then insert the node into the document.
   */
  // function insertBeast(beastURL) {
  //   removeExistingBeasts();
  //   let beastImage = document.createElement("img");
  //   beastImage.setAttribute("src", beastURL);
  //   beastImage.style.height = "100vh";
  //   beastImage.className = "beastify-image";
  //   document.body.appendChild(beastImage);
  // }

  /**
   * Remove every beast from the page.
   */
  // function removeExistingBeasts() {
  //   let existingBeasts = document.querySelectorAll(".beastify-image");
  //   for (let beast of existingBeasts) {
  //     beast.remove();
  //   }
  // }

  /**
   * Listen for messages from the background script.
   * Call "beastify()" or "reset()".
  */
  // browser.runtime.onMessage.addListener((message) => {
  //   if (message.command === "copy") {
  //     var url = getVideoURL();
  //     share(url);
  //   } else if (message.command === "reset") {
  //     removeExistingBeasts();
  //   }
  // });

  function getVideoURL() {
    var ytplayer = document.getElementById("movie_player");
    return ytplayer.wrappedJSObject.getVideoUrl();
  }

  async function share(url) {
    const shareData = {
      title: 'YouTube URL',
      url: url
    }
    try {
      await navigator.share(shareData);
    } catch(err) {
      console.error(err)
    }
  }
})();
