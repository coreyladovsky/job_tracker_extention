var jobTitle = document.querySelector(".jobs-details-top-card__job-title").innerText;
var url = document.location.href
var company = document.querySelector(
  ".jobs-details-top-card__company-url"
).innerText;

var mapLocation = document.querySelector("span[data-test-job-location]")
  .innerText;
var description = document.querySelector("span[data-test-job-description-text]").innerHTML;


chrome.storage.sync.set({job_title: jobTitle})
chrome.storage.sync.set({url: url})
chrome.storage.sync.set({company: company})
chrome.storage.sync.set({location: mapLocation})
chrome.storage.sync.set({description: description})

