//Javascripts background file

function openProfile(){
	alert("hello");
}


chrome.runtime.onInstalled.addListener(function(){
	var id = chrome.contextMenus.create({
	    "title":"Get Course ID", 
	    "contexts": ["all"], 
	    "id": "courseId"
    });
    var id = chrome.contextMenus.create({
	    "title":"Grab Ent Info", 
	    "contexts": ["all"], 
	    "id": "getInfo"
    });
    var id = chrome.contextMenus.create({
	    "title":"Open Profile", 
	    "contexts": ["all"], 
	    "id": "openProfile"
    });
});

chrome.contextMenus.onClicked.addListener(onClickHandler);

function onClickHandler(info,tab){
	if(info.menuItemId == "getInfo"){
		chrome.tabs.sendMessage(tab.id, {text: 'getInfo'});
	}
	else if (info.menuItemId == "openProfile"){
		chrome.tabs.sendMessage(tab.id, {text: 'openProfile'});
	}
	else if (info.menuItemId == "courseId"){
		chrome.tabs.sendMessage(tab.id, {text: 'courseId'})
	}
	else{
		alert("I don't know what you just did");
	}
};

