try {
  var jobTitle = document.querySelector(".jobs-details-top-card__job-title")
    .innerText;
} catch(err) {
    console.log(err);
}
try {
  var company = document.querySelector(".jobs-details-top-card__company-url")
    .innerText;
} catch(err) {
    console.log(err);
}

try {
  var mapLocation = document.querySelector("span[data-test-job-location]")
    .innerText;
} catch(err) {
    console.log(err);
}
try {
  var description = document.querySelector(
    "span[data-test-job-description-text]"
  ).innerHTML;
} catch(err) {
    console.log(err);
}

var url = document.location.href;

chrome.storage.sync.set({ job_title: jobTitle });
chrome.storage.sync.set({ url: url });
chrome.storage.sync.set({ company: company });
chrome.storage.sync.set({ location: mapLocation });
chrome.storage.sync.set({ description: description });
