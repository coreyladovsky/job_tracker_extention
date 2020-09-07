try {
  var jobTitle = document.querySelector(".app-title").innerText;
} catch (error) {
  console.log(error);
}

try {
  var company = document.querySelector(".company-name").innerText.slice(3);
} catch (error) {
  console.log(error);
}
try {
  var mapLocation = document.querySelector(".location")
    .innerText;
} catch (error) {
  console.log(error);
}
try {
  var description = document.querySelector(
    "#content"
  ).innerHTML;
} catch (error) {
  console.log(error);
}

var url = document.location.href;

chrome.storage.sync.set({ job_title: jobTitle });
chrome.storage.sync.set({ url: url });
chrome.storage.sync.set({ company: company });
chrome.storage.sync.set({ location: mapLocation });
chrome.storage.local.set({ description: description });
