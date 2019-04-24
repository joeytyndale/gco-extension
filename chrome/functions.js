

chrome.runtime.onMessage.addListener(function (msg, sender) {
    // If the received message has the expected format...
    if (msg.text === 'openProfile') {

        var liasForm = document.getElementsByClassName('lias-form')[0];

		var liasLink = liasForm.getAttribute('action');

		var profileId = liasLink.substring(liasLink.indexOf('ProfileId=') + 10, liasLink.indexOf('&amp;enterpriseApplication'));

		var accountId = liasLink.substring(liasLink.indexOf('Seat/') + 5, liasLink.indexOf('?enterpriseProfileId'));

		window.open(`https://customer.www.linkedin.com/support/account/urn:li:enterpriseAccount:${accountId}/profiles/${profileId}/licenses`);

    }
    else if (msg.text === 'getInfo'){

    	var url = window.location.href;
		var accountId = url.substring(url.indexOf("enterpriseAccount:") + 18,url.indexOf("/profiles"));
		var profileId = url.substring(url.indexOf("profiles/") + 9,url.indexOf("/licenses"));

		prompt("Enterprise Info", "• Profile ID: " + profileId + "\n• Account ID: " + accountId);

		//window.open("https://customer.www.linkedin.com/support/product/urn:li:enterpriseApplicationInstance:(urn:li:enterpriseAccount:" + acountId + ")");
    }
    else if (msg.text === 'courseId'){

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

    	prompt("Course ID: ", id);
    }
});