let page = document.getElementById('buttonDiv');
const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];

function constructOptions(kButtonColors) {
    for (let item of kButtonColors) {
        let button = document.createElement('button');
        button.style.backgroundColor = item;
        button.addEventListener('click', function() {
            chrome.storage.sync.set({ color: item }, function() {
                console.log('color is ' + item);
            })
        });
        page.appendChild(button);
    }
}
constructOptions(kButtonColors);


function saveChanges() {
    // Get a value saved in a form.
    let domainsToAdd = textarea.value;
    // Check that there's some code there.
    if (!domainsToAdd) {
        message('Error: No value specified');
        return;
    }
    // Save it using the Chrome extension storage API.
    chrome.storage.sync.set({
        ': theValue}, function() {
        // Notify that we saved.
        message('Settings saved');
    });
}
// function saveWhitelist(whitelistItems) {
//     for (let item of whitelistItems) {
//         let button = document.createElement('button');
//         button.style.backgroundColor = item;
//         button.addEventListener('click', function() {
//             chrome.storage.sync.set({ color: item }, function() {
//                 console.log('color is ' + item);
//             })
//         });
//         page.appendChild(button);
//     }
// }
// constructOptions(kButtonColors);