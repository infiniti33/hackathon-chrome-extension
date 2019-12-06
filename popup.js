let disableButton = document.getElementById("disableButton");

// disableButton.addEventListener('click', () => {
//   let bool = true;
//   if (disableButton.innerHTML === 'enable') {
//     bool = false;
//   }
//   chrome.runtime.sendMessage(string extensionId, any message, object options, function responseCallback)
//   chrome.storage.sync.set({ enabledOrDisabled: bool }, () => {
//     chrome.storage.sync.get(['enabledOrDisabled'], (result) => {
//       console.log('enabledOrDisabled in popup.js', result.enabledOrDisabled);
//     })
//   });
// })


// function disableButton() {
//   var disableButton = document.getElementById("disableButton");
//   if (disableButton.innerHTML === "Disable") {
//       isExtensionOn = false;
//       console.log(isExtensionOn);
//   } else if (disableButton.innerHTML === "Enable") {
//       isExtensionOn = true;
//       console.log(isExtensionOn);

//   } else {
//       alert("Error");
//   }
// }

document.addEventListener('DOMContentLoaded', function() {
  chrome.extension.sendMessage({cmd: "getOnOffState"}, function (response) {
    if (response !== undefined) {
      if (response) {
        disableButton.innerHTML = "Disable";
        // disableButton.className = "button button3";
        disableButton.style.display = "";
        br1.style.display = "";
        br2.style.display = "";
      }
      else {
        disableButton.innerHTML = "Enable";
        // disableButton.className = "button button1";
        disableButton.style.display = "";
        br1.style.display = "";
        br2.style.display = "";
      }
    }
  });

  document.querySelector('#about').addEventListener('click', function() {
    window.open("https://github.com/infiniti33/hackathon-chrome-extension");
  });

  document.querySelector('#config').addEventListener('click', function() {
    window.open(chrome.runtime.getURL("options.html"));
  });

  document.querySelector('#disableButton').addEventListener('click', function() {
    chrome.extension.sendMessage({cmd: "getOnOffState"}, function (response) {
      if (response !== undefined) {
        let isExtensionOn = response;
        isExtensionOn = !isExtensionOn;
        chrome.extension.sendMessage({cmd: "setOnOffState", data: {value: isExtensionOn}});
        if (isExtensionOn) {
          disableButton.innerHTML = "Disable";
        } else {
          disableButton.innerHTML = "Enable";
        }
      }
    });
  });
  var br1 = document.getElementById("br1");
  var br2 = document.getElementById("br2");

  //Send message to event.js (background script) telling it to disable the extension.





});

  // chrome.storage.sync.get({ enabled: true }, function(storage) {
  //     toggleEnabledUI(storage.enabled);
  // });


  // chrome.storage.sync.get({ enabled: true }, function(storage) {
  //     toggleEnabledUI(storage.enabled);
  // });

  // function toggleEnabled(enabled, callback) {
  //     chrome.storage.sync.set({
  //         enabled: enabled,
  //     }, function() {
  //         toggleEnabledUI(enabled);
  //         if (callback) callback(enabled);
  //     });
  // }

  // function toggleEnabledUI(enabled) {
  //     document.querySelector('#enable').classList.toggle("hide", enabled);
  //     document.querySelector('#disable').classList.toggle("hide", !enabled);

  //     const suffix = `${(enabled ? "" : "_disabled")}.png`
  //     chrome.browserAction.setIcon({
  //         "path": {
  //             "19": "icons/icon19" + suffix,
  //             "38": "icons/icon38" + suffix,
  //             "48": "icons/icon48" + suffix
  //         }
  //     });
  // }