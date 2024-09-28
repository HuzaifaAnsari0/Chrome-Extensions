document.getElementById("toggle-btn").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];
    chrome.scripting.executeScript({
      target: { tabId: activeTab.id },
      func: toggleDarkMode
    });
  });
});

function toggleDarkMode() {
  let body = document.body;
  if (body.style.filter === 'invert(1) hue-rotate(180deg)') {
    body.style.filter = '';
  } else {
    body.style.filter = 'invert(1) hue-rotate(180deg)';
  }
}
