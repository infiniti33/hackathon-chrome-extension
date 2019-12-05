document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('#about').addEventListener('click', function() {
        window.open("https://github.com/infiniti33/hackathon-chrome-extension");
    });

    document.querySelector('#feedback').addEventListener('click', function() {
        window.open("https://github.com/infiniti33/hackathon-chrome-extension");
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

});