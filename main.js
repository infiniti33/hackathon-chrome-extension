let hostname = window.location.host;
let whitelist = [];

// 
chrome.storage.sync.get(['whitelistStorage'], (result) => {
  for (let i = 0; i < result.whitelistStorage.length; i += 1) {
    whitelist.push(result.whitelistStorage[i]);
  }
  let isDistracting = true;
  whitelist.forEach((site) => {
    console.log('hostname: ', hostname, 'site: ', site);
    if (hostname.includes(site)) {
      isDistracting = false;
    }
  });

  chrome.extension.sendMessage({cmd: "getOnOffState"}, function (response) {
    if (response !== undefined) {
      console.log('message received ', response)
      console.log(isDistracting);

      if (response && isDistracting) {
        // pointer - events: auto;
        console.log('extension is on, will block links');
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
      else {
        console.log('extension is off, will not block');
      }
    }
  });

  // chrome.storage.sync.get(['enabledOrDisabled'], (result) => {
  //   console.log('enabledOrDisabled in main.js', result.enabledOrDisabled);
  // })



});
