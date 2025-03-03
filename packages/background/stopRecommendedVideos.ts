const STORAGE_ID = "recommended-block";

const stopRecommnededVideos = () => {
  chrome.tabs.onUpdated.addListener(async (tabId) => {
    const { url } = await chrome.tabs.get(tabId);
    if (!url?.includes("https://www.youtube.com/")) return;

    chrome.storage.local.get(STORAGE_ID, (result) => {
      if (result[STORAGE_ID] !== "true") return;

      chrome.scripting.insertCSS({
        target: { tabId },
        files: ["dist/background/stop-recommended-videos.css"],
      });
    });
  });

  chrome.tabs.onActivated.addListener(async ({ tabId }) => {
    const { url } = await chrome.tabs.get(tabId);
    if (!url?.includes("https://www.youtube.com/")) return;

    chrome.storage.local.get(STORAGE_ID, (result) => {
      if (result[STORAGE_ID] !== "true") return;

      chrome.scripting.insertCSS({
        target: { tabId },
        files: ["dist/background/stop-recommended-videos.css"],
      });
    });
  });
};

export default stopRecommnededVideos;
