browser.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status == "complete") {
    var isYouTubeVideoPage = tab.url.match(new RegExp("https://.*.youtube.com/watch?.*"));

    if (isYouTubeVideoPage) {
      showShareBtn(tabId);
      return;
    }

    removeShareBtn(tabId);
  }
});

function removeShareBtn(tabId) {
  browser.tabs.executeScript(tabId, { file: "/content_scripts/removeShareBtn.js" });
}

function showShareBtn(tabId) {
  browser.tabs.executeScript(tabId, {
    file: "/content_scripts/showShareBtn.js",
  });
}
