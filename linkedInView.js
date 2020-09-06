try {
  var jobTitle = document.querySelector("h1[data-test-job-title]").innerText;
} catch (error) { console.log(error)}

try {
  var company = document.querySelector("a[data-test-company-url]").innerText;
}catch (error) { console.log(error)}
try {
  var mapLocation = document.querySelector("span[data-test-job-location").innerText;
}catch (error) { console.log(error)}
try {
  var description = document.querySelector(
    "span[data-test-job-description-text]"
  ).innerHTML;
}catch (error) { console.log(error)}

var url = document.location.href;

chrome.storage.sync.set({ job_title: jobTitle });
chrome.storage.sync.set({ url: url });
chrome.storage.sync.set({ company: company });
chrome.storage.sync.set({ location: mapLocation });
chrome.storage.local.set({ description: description });
