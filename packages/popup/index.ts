console.log(document.body);

const accessBlock = document.querySelector(".access-block");
if (accessBlock instanceof HTMLInputElement) {
  chrome.storage.local.get(["access-block"], (result) => {
    accessBlock.defaultChecked = result["access-block"] === "true";
  });

  accessBlock?.addEventListener("click", () => {
    chrome.storage.local.set({
      "access-block": `${accessBlock.checked === true}`,
    });
  });
}

// const div = document.createElement("div");
// div.innerText = "Hello World";
//
// document.body.appendChild(div);
