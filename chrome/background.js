//Javascripts background file

function openProfile(){
	alert("hello");
}


chrome.runtime.onInstalled.addListener(function(){
    chrome.contextMenus.create({
	    "title":"Get Course ID", 
	    "contexts": ["all"], 
	    "id": "courseId"
    });
});

chrome.contextMenus.onClicked.addListener(onClickHandler);

function onClickHandler(info,tab){
	chrome.tabs.sendMessage(tab.id,{text:info.menuItemId});
};

