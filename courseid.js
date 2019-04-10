if(document.getElementById('vjs_video_1_html5_api') !== null){
	var elem = document.getElementById('vjs_video_1_html5_api').src;
}
if(document.getElementById('vjs_video_2_html5_api') !== null){
	var elem = document.getElementById('vjs_video_2_html5_api').src;
}
if(document.getElementById('vjs_video_3_html5_api') !== null){
	var elem = document.getElementById('vjs_video_3_html5_api').src;
}
if(document.getElementById('vjs_video_4_html5_api') !== null){
	var elem = document.getElementById('vjs_video_4_html5_api').src;
}

var id = elem.slice(elem.indexOf("rses/") + 5,elem.indexOf("/",elem.indexOf("rses/") + 6));

alert("Course ID: " + id);