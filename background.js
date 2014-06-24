var latestTab = null;
var previousTab = null;

chrome.tabs.onActivated.addListener(function(activeInfo) {
  previousTab = latestTab;
  latestTab = activeInfo.tabId;
});

chrome.commands.onCommand.addListener(function(command) {
        if(command == "Go to last-used tab") {
          chrome.tabs.update(previousTab, {selected: true});
        }
});