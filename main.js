let domain = window.location.host.replace();
let hostname = window.location.host;
console.log('domain: ', domain);
console.log('hostname: ', hostname);
let whitelist = [];
chrome.storage.sync.get(['whitelistStorage'], (result) => {
  for (let i = 0; i < result.whitelistStorage.length; i += 1) {
    whitelist.push(result.whitelistStorage[i]);
  }
  let isDistracting = true;
  whitelist.forEach((site) => {
    if (hostname.includes(site)) {
      isDistracting = false;
    }
  });

  // let disableButton = document.getElementById("disableButton");
  // if (disableButton.innerHTML === "disable") {
  //   isExtensionOn = true;
  // } else {
  //   isExtensionOn = false;
  // }

  console.log('whitelist: ', whitelist);
  console.log('isDistracting? ', !whitelist.includes(hostname));
  console.log('isExtensionOn accessed from main.js: ', isExtensionOn);
  if (isDistracting && isExtensionOn) {
    // pointer - events: auto;
    console.log('success');
    $('a').bind("click.myDisable", function() {
      return false;
    });
    $('span').bind("click.myDisable", function() {
      return false;
    });
    $('button').bind("click.myDisable", function() {
      return false;
    });
  }
});
