// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';
let isExtensionOn = false;
chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.cmd === "setOnOffState") {
      isExtensionOn = request.data.value;
    }

    if (request.cmd === "getOnOffState") {
      sendResponse(isExtensionOn);
    }
});



// chrome.runtime.onInstalled.addListener(function() {
//   chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
//     chrome.declarativeContent.onPageChanged.addRules([{
//       conditions: [new chrome.declarativeContent.PageStateMatcher({
//         pageUrl: {hostEquals: 'developer.chrome.com'},
//       })
//       ],
//         actions: [new chrome.declarativeContent.ShowPageAction()]
//     }]);
//   });
// });

// chrome.extension.getBackgroundPage()
