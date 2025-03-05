import ChromeStorage from "./ChromeStorage";

type CallbackType = (tabId: number) => void;

const createListener = <T extends string | CallbackType>(
  key: string,
  work: T,
  callback2?: T extends string ? CallbackType : never,
) => {
  const storage = new ChromeStorage(key);

  const callback = async (tabId: number) => {
    const { url } = await chrome.tabs.get(tabId);
    if (!url?.includes("https://www.youtube.com/")) return;

    if ((await storage.get()) !== "true") return;

    if (typeof work === "string") {
      chrome.scripting.insertCSS({ target: { tabId }, files: [work] });
      if (callback2) callback2(tabId);
    } else {
      work(tabId);
    }
  };

  chrome.tabs.onUpdated.addListener(callback);
  chrome.tabs.onActivated.addListener(({ tabId }) => callback(tabId));
};

export default createListener;
