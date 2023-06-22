chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "getResult") {
    var result = calculateResult();
    sendResponse({ result: result });
  }
});
