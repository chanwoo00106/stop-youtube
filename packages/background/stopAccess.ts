import createListener from "./lib/createListener";

createListener("access-block", (tabId) => {
  chrome.tabs.remove(tabId);
});
