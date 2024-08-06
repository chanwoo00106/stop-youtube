const stopAccess = () => {
  chrome.tabs.onUpdated.addListener(async (tabId) => {
    const { url } = await chrome.tabs.get(tabId);
    if (!url?.includes("https://www.youtube.com/")) return;

    chrome.storage.local.get(["access-block"], (result) => {
      if (result["access-block"] !== "true") return;
      chrome.tabs.remove(tabId);
    });
  });

  chrome.tabs.onActivated.addListener(async ({ tabId }) => {
    const { url } = await chrome.tabs.get(tabId);
    if (!url?.includes("https://www.youtube.com/")) return;

    chrome.storage.local.get(["access-block"], (result) => {
      if (result["access-block"] !== "true") return;

      chrome.tabs.remove(tabId);
    });
  });
};

export default stopAccess;
