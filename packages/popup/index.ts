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
