const StopShorts = () => {
  chrome.tabs.query({ url: "https://www.youtube.com/*" }, async (tabs) => {
    const result = await chrome.storage.local.get(["shorts-block"]);
    if (result["shorts-block"] !== "true") return;

    tabs.forEach((tab) => {
      if (!tab.id) return;

      chrome.scripting.insertCSS({
        target: { tabId: tab.id },
        files: ["dist/background/stop-shorts.css"],
      });
    });
  });

  chrome.tabs.onUpdated.addListener(async (tabId) => {
    const { url } = await chrome.tabs.get(tabId);
    if (!url?.includes("https://www.youtube.com/")) return;

    chrome.storage.local.get(["shorts-block"], (result) => {
      if (result["shorts-block"] !== "true") return;

      chrome.scripting.insertCSS({
        target: { tabId },
        files: ["dist/background/stop-shorts.css"],
      });
    });

    if (!url?.includes("https://www.youtube.com/shorts")) return;

    chrome.storage.local.get(["shorts-block"], (result) => {
      if (result["shorts-block"] !== "true") return;
      chrome.tabs.remove(tabId);
    });
  });
};

export default StopShorts;
