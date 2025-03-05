class ChromeStorage {
  constructor(private key: string) { }

  async get() {
    return (await chrome.storage.local.get(this.key))[this.key];
  }
  async set(value: string) {
    return chrome.storage.local.set({
      [this.key]: value,
    });
  }
}

export default ChromeStorage;
