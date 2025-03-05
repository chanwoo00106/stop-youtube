import createListener from "./lib/createListener";

createListener(
  "shorts-block",
  "dist/background/stop-shorts.css",
  async (tabId) => {
    const { url } = await chrome.tabs.get(tabId);
    if (!url?.includes("https://www.youtube.com/shorts")) return;
    chrome.tabs.remove(tabId);
  },
);
