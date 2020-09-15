try {
  var jobTitle = document.querySelector(
    "h4.styles_component__1kg4S"
  ).innerText;
} catch (error) {
  console.log(error);
}

try {
  var company = document.querySelector(".component_23893 details_cdf42")
    .innerText;
    debugger
} catch (error) {
  console.log(error);
}
try {
  var mapLocation = document
    .querySelector(".characteristic_650ae > dd > span")
    .innerText;
} catch (error) {
  console.log(error);
}
try {
  var description = document.querySelector(".about_63363").innerHTML;
} catch (error) {
  console.log(error);
}

var url = document.location.href;

chrome.storage.sync.set({ job_title: jobTitle });
chrome.storage.sync.set({ url: url });
chrome.storage.sync.set({ company: company });
chrome.storage.sync.set({ location: mapLocation });
chrome.storage.local.set({ description: description });
