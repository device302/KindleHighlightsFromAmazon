function checkForValidUrl(tabId, changeInfo, tab) {
  // If the letter 'g' is found in the tab's URL...
  var _url = tab.url.match(/amazon.co.jp/);

  console.log(_url);
  console.log(typeof(_url));
  if ( _url != null ) {
    // ... show the page action.
    chrome.pageAction.show(tabId);
    console.log(document);
    
    var _isbn = document.evaluate('normalize-space(//li[b/text()="ISBN-10:"]/text())', document, null, XPathResult.STRING_TYPE, null).stringValue
    console.log(document.evaluate('normalize-space(//li[b/text()="ISBN-10:"]/text())', document, null, XPathResult.STRING_TYPE, null).stringValue);
    //chrome.pageAction.onClicked.addListener(openAmazonHighlight);
  } else {
    chrome.pageAction.hide(tabId);
  }
};

function openAmazonHighlight(tab){
  var _isbn = document.evaluate('normalize-space(//li[b/text()="ISBN-10:"]/text())', document, null, XPathResult.STRING_TYPE, null).stringValue
  tab.url("https://kindle.amazon.co.jp/work/"+_isbn);
}

// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForValidUrl);
