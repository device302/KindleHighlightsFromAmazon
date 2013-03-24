/*
 * Copyright (c) 2010 The Chromium Authors. All rights reserved.  Use of this
 * source code is governed by a BSD-style license that can be found in the
 * LICENSE file.
 */
var _isbm = document.evaluate('normalize-space(//li[b/text()="ISBN-10:"]/text())', document, null, XPathResult.STRING_TYPE, null).stringValue
  , _asin = document.evaluate('normalize-space(//li[b/text()="ASIN:"]/text())', document, null, XPathResult.STRING_TYPE, null).stringValue
  , _title= document.evaluate('//*[@id="btAsinTitle"]/text()', document, null, XPathResult.STRING_TYPE, null).stringValue
  , code  = _isbm?_isbm:_asin;
console.log(_title);
if ( code ){
  chrome.extension.sendRequest({'code':code}, function(response) { window.location.href = 'https://kindle.amazon.co.jp/work/'+_title+'/'+code; });
} else {
  // 
}
