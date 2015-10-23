// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });


chrome.tabs.onUpdated.addListener(function(id, info, tab){
 
       // show the page action
        chrome.pageAction.show(tab.id);
        // inject the content script onto the page
});

// listening for an event / one-time requests
// coming from the popup
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	console.log(request);
	templateInfo = request;
    switch(request.template) {
        case "envelope":
        	console.log("envelope");
            insertTemplate();
        	break; 
        case "videoUrl":
        	console.log("videoUrl");
            insertTemplate();
        	break;
        case "imageQuote":
        	console.log("imageQuote");
            insertTemplate();
        	break;
        case "bigImage":
        	console.log("bigImage");
            insertTemplate();
        	break;
        case "confirmEnvelope":
            console.log("confirmEnvelope");
            insertTemplate();
            break;
    }
    return true;
});


// send a message to the content script
function insertTemplate() {
    chrome.tabs.getSelected(null, function(tab){
		console.log(templateInfo);
        chrome.tabs.sendMessage(tab.id, {type: templateInfo});
        // setting a badge
        // chrome.browserAction.setBadgeText({text: "red!"});
    });
}