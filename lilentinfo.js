var url = window.location.href;
var accountId = url.substring(url.indexOf("enterpriseAccount:") + 18,url.indexOf("/profiles"));
var profileId = url.substring(url.indexOf("profiles/") + 9,url.indexOf("/licenses"));

alert("• Profile ID: " + profileId + "\n• Account ID: " + accountId);

window.location.replace("https://customer.www.linkedin.com/support/product/urn:li:enterpriseApplicationInstance:(urn:li:enterpriseAccount:" + acountId + ")");




