var liasForm = document.getElementsByClassName('lias-form')[0];

var liasLink = liasForm.getAttribute('action');

var profileId = liasLink.substring(liasLink.indexOf('ProfileId=') + 10, liasLink.indexOf('&amp;enterpriseApplication'));

var accountId = liasLink.substring(liasLink.indexOf('Seat/') + 5, liasLink.indexOf('?enterpriseProfileId'));

window.open(`https://customer.www.linkedin.com/support/account/urn:li:enterpriseAccount:${accountId}/profiles/${profileId}/licenses`);
