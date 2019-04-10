browser.contextMenus.create({
  id: "getId",
  title: "Get Course Id"
});
browser.contextMenus.create({
	id: "getLilEntInfo",
	title: "Grab Enterprise Info"
});

browser.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId == "getId") {
	browser.tabs.executeScript({
	  file: "courseid.js"
	});
  }
  if(info.menuItemId == "getLilEntInfo"){
	browser.tabs.executeScript({
		file: "lilentinfo.js"
	});
  }
});