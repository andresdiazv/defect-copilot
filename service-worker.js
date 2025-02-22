// chrome api, set of functions that allow you to interact with the browser

// when you click on chrome extension,
// this needs manifest "action"
chrome.action.onClicked.addListener((tab) => {
    // chrome execute script
  chrome.scripting.executeScript({
    // in context of the tab 
    target: { tabId: tab.id },
    function: () => {
      alert("Hello from my extension!");
    },
  });
});
