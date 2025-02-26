const stopScreen = () => {
  chrome.tabs.onUpdated.addListener(async (tabId) => {
    chrome.storage.local.get(["screen-block"], (result) => {
      if (result["screen-block"] !== "true") return;

      chrome.scripting.insertCSS({
        target: { tabId },
        files: ["dist/background/stop-youtube.css"],
      });
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
};

export default stopScreen;
