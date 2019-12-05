let page = document.getElementById('buttonDiv');
let whitelistTextbox = document.getElementById('whitelist-textbox');

/**************************** 
 * Whitelist textbox styling *
 ****************************/

whitelistTextbox.style.width = '500px';
whitelistTextbox.style.height = '500px';
whitelistTextbox.style.fontFamily = 'Open Sans",Arial,"Lucida Grande",sans-serif';
whitelistTextbox.style.fontSize = '13px';
whitelistTextbox.style.textAlign = 'left';
whitelistTextbox.style.textAlign = 'top';
whitelistTextbox.style.color = '#333';
/******** End ********/



// chrome.storage.sync.set({'whitelistStorage': ['w3schools.com', 'stackoverflow.com', 'developer.mozilla.org', 'google.com', 'github.com', 'youmightnotneedjquery.com', 'developer', 'code']}, () => console.log('Whitelist Updated'));
let whitelist = [];
chrome.storage.sync.get(['whitelistStorage'], (result) => {
  for (let i = 0; i < result.whitelistStorage.length; i += 1) {
    whitelist.push(result.whitelistStorage[i] + '\n');
  }
  whitelistTextbox.value = whitelist.join('');
});

function constructWhitelistOptions() {
  let button = document.getElementById('save');
  button.addEventListener('click', () => {
    chrome.storage.sync.set({ whitelistStorage: whitelistTextbox.value.split('\n') }, () => {
      chrome.storage.sync.get(['whitelistStorage'], (result) => {
        console.log(result.whitelistStorage);
      })
    });
  })
}
//   chrome.storage.sync.get(['whitelistStorage'], (result) => {
//     for (let i = 0; i < result.whitelistStorage.length; i += 1) {
//       whitelist.push(result.whitelistStorage[i] + '\n');
//     }
//     console.log('check if successfully added earlier: ', whitelist.join(''));
//   });
// }
constructWhitelistOptions();

// function saveChanges() {
//   // Get a value saved in a form.
//   let domainsToAdd = textarea.value;
//   // Check that there's some code there.
//   if (!domainsToAdd) {
//     message('Error: No value specified');
//     return;
//   }
//   // Save it using the Chrome extension storage API.
//   chrome.storage.sync.set({': theValue}, function() {
//     // Notify that we saved.
//     message('Settings saved');
//   });
// }

// function saveChanges() {
//   // Get a value saved in a form.
//   var theValue = textarea.value;
//   // Check that there's some code there.
//   if (!theValue) {
//     message('Error: No value specified');
//     return;
//   }
//   // Save it using the Chrome extension storage API.
//   chrome.storage.sync.set({ 'value': theValue }, function() {
//     // Notify that we saved.
//     message('Settings saved');
//   });
// }
