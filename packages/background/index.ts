// Youtube 접근 차단
chrome.storage.local.get(["access-block"], (result) => {
  if (result["access-block"] !== "true") return;

  chrome.tabs.query({ url: "https://www.youtube.com/*" }, (tabs) => {
    tabs.forEach((tab) => {
      if (tab.id) chrome.tabs.remove(tab.id);
    });
  });
});

chrome.tabs.onUpdated.addListener(async (tabId, moveInfo) => {
  chrome.storage.local.get(["access-block"], (result) => {
    if (result["access-block"] !== "true") return;
    if (!moveInfo.url?.includes("https://www.youtube.com/")) return;
    chrome.tabs.remove(tabId);
  });
});
