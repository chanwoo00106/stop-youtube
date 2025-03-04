const accessBlock = document.querySelector(".access-block");
if (accessBlock instanceof HTMLInputElement) {
  chrome.storage.local.get(["access-block"], (result) => {
    accessBlock.defaultChecked = result["access-block"] === "true";
  });

  accessBlock?.addEventListener("click", () => {
    chrome.storage.local.set({
      "access-block": `${accessBlock.checked}`,
    });
  });
}

const screenBlock = document.querySelector(".screen-block");
if (screenBlock instanceof HTMLInputElement) {
  chrome.storage.local.get(["screen-block"], (result) => {
    screenBlock.defaultChecked = result["screen-block"] === "true";
  });

  screenBlock?.addEventListener("click", () => {
    chrome.storage.local.set({
      "screen-block": `${screenBlock.checked}`,
    });
  });
}

const shortsBlock = document.querySelector(".shorts-block");
if (shortsBlock instanceof HTMLInputElement) {
  chrome.storage.local.get(["shorts-block"], (result) => {
    shortsBlock.defaultChecked = result["shorts-block"] === "true";
  });

  shortsBlock?.addEventListener("click", () => {
    chrome.storage.local.set({
      "shorts-block": `${shortsBlock.checked}`,
    });
  });
}

const thumbnailBlock = document.querySelector(".thumbnail-block");
if (thumbnailBlock instanceof HTMLInputElement) {
  chrome.storage.local.get(["thumbnail-block"], (result) => {
    thumbnailBlock.defaultChecked = result["thumbnail-block"] === "true";
  });

  thumbnailBlock?.addEventListener("click", () => {
    chrome.storage.local.set({
      "thumbnail-block": `${thumbnailBlock.checked}`,
    });
  });
}

const recommendedBlock = document.querySelector(".recommended-videos-block");
if (recommendedBlock instanceof HTMLInputElement) {
  chrome.storage.local.get(["recommended-block"], (result) => {
    recommendedBlock.defaultChecked = result["recommended-block"] === "true";
  });

  recommendedBlock?.addEventListener("click", () => {
    chrome.storage.local.set({
      "recommended-block": `${recommendedBlock.checked}`,
    });
  });
}

const mainListBlock = document.querySelector(".main-list-block");
if (mainListBlock instanceof HTMLInputElement) {
  chrome.storage.local.get(["stop-main-list"], (result) => {
    mainListBlock.defaultChecked = result["stop-main-list"] === "true";
  });

  mainListBlock?.addEventListener("click", () => {
    chrome.storage.local.set({
      "stop-main-list": `${mainListBlock.checked}`,
    });
  });
}
