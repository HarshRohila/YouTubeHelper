browser.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	if(changeInfo.status == "complete") {
			if(!tab.url.match(new RegExp('https://.*\.youtube\.com/watch\?.*'))) {

				browser.tabs.executeScript(tabId, {file: '/content_scripts/remove.js'}, function() {
					//script injected
				});
				
			} else {
				browser.tabs.executeScript(tabId, {file: '/content_scripts/beastify.js'}, function() {
					//script injected
				});
			}
	}
});