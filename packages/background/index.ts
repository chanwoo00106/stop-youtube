import StopShorts from "./stop-shorts";

StopShorts();

chrome.storage.local.get(["access-block"], (result) => {
  if (result["access-block"] !== "true") return;

  chrome.tabs.query({ url: "https://www.youtube.com/*" }, (tabs) => {
    tabs.forEach((tab) => {
      if (tab.id) chrome.tabs.remove(tab.id);
    });
  });
});

chrome.tabs.query({ url: "https://www.youtube.com/*" }, async (tabs) => {
  const result = await chrome.storage.local.get(["screen-block"]);
  if (result["screen-block"] !== "true") return;

  tabs.forEach((tab) => {
    if (tab.id)
      chrome.scripting.insertCSS({
        target: { tabId: tab.id },
        files: ["dist/background/stop-youtube.css"],
      });
  });
});

chrome.tabs.onUpdated.addListener(async (tabId) => {
  const { url } = await chrome.tabs.get(tabId);
  if (!url?.includes("https://www.youtube.com/")) return;

  chrome.storage.local.get(["screen-block"], (result) => {
    if (result["screen-block"] !== "true") return;

    chrome.scripting.insertCSS({
      target: { tabId },
      files: ["dist/background/stop-youtube.css"],
    });
  });

  chrome.storage.local.get(["access-block"], (result) => {
    if (result["access-block"] !== "true") return;
    chrome.tabs.remove(tabId);
  });
});

chrome.tabs.onActivated.addListener(async ({ tabId }) => {
  const { url } = await chrome.tabs.get(tabId);
  if (!url?.includes("https://www.youtube.com/")) return;

  chrome.storage.local.get(["screen-block"], (result) => {
    if (result["screen-block"] !== "true") return;

    chrome.scripting.insertCSS({
      target: { tabId },
      files: ["dist/background/stop-youtube.css"],
    });
  });
});
