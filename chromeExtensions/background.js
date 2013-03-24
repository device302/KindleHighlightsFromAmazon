// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function onRequest(request, sender, sendResponse) {
  chrome.pageAction.show(sender.tab.id);
  chrome.pageAction.setTitle({'title': request.code,'tabId': sender.tab.id});
  chrome.pageAction.onClicked.addListener(sendResponse);
};

// Listen for the content script to send a message to the background page.
chrome.extension.onRequest.addListener(onRequest);
