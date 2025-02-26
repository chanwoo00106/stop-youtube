import stopAccess from "./stopAccess";
import stopScreen from "./stopScreen";
import stopShorts from "./stopShorts";

chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
  if (tabs.length === 0) return;

  stopShorts();
  stopAccess();
  stopScreen();
});
