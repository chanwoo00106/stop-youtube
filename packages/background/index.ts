chrome.tabs.query({ url: "https://www.youtube.com/*" }, (tabs) => {
  tabs.forEach((tab) => {
    if (tab.id) chrome.tabs.remove(tab.id);
  });
});

chrome.tabs.onUpdated.addListener(async (tabId, moveInfo) => {
  console.log("hello");
  if (!moveInfo.url?.includes("https://www.youtube.com/")) return;
  chrome.tabs.remove(tabId);
});
