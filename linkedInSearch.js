let jobTitle = document.querySelector(".jobs-details-top-card__job-title").innerText;
let url = document.location.href
let company = document.querySelector(
  ".jobs-details-top-card__company-url"
).innerText;

let mapLocation = document.querySelector(".jobs-details-top-card__exact-location").innerText;
let description = document.querySelector("span[data-test-job-description-text]").innerHTML;


chrome.storage.sync.set({job_title: jobTitle})
chrome.storage.sync.set({url: url})
chrome.storage.sync.set({company: company})
chrome.storage.sync.set({location: mapLocation})
chrome.storage.sync.set({description: description})