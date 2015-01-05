var id = chrome.contextMenus.create({
    "title": "Inspect Angular scope",
    "contexts":["page", "editable"],
    "onclick": genericOnClick
});

// A generic onclick callback function.
function genericOnClick(info, tab) {
    chrome.tabs.executeScript(tab.id, {
        file: './logscope.js'
    });
}
