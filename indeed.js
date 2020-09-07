var iframe = document.querySelector("iframe");
var innerDoc = iframe.contentDocument || iframe.contentWindow.document;


try {
  var jobTitle = innerDoc.querySelector(".jobsearch-JobInfoHeader-title").innerText;
} catch (error) {
  console.log(error);
}

try {
  var company = innerDoc.querySelectorAll(
    ".jobsearch-InlineCompanyRating > div"
  )[0].innerText;
} catch (error) {
  console.log(error);
}
try {
//   var mapLocation = innerDoc.querySelectorAll(".jobsearch-InlineCompanyRating")
    var mapLocation = innerDoc.querySelectorAll(
      ".jobsearch-InlineCompanyRating > div"
    )
    mapLocation = mapLocation[mapLocation.length - 1].innerText;
} catch (error) {
  console.log(error);
}
try {
  var description = innerDoc.querySelector(
    ".jobsearch-JobComponent-description"
  ).innerText;
} catch (error) {
  console.log(error);
}

var url = document.location.href;

chrome.storage.sync.set({ job_title: jobTitle });
chrome.storage.sync.set({ url: url });
chrome.storage.sync.set({ company: company });
chrome.storage.sync.set({ location: mapLocation });
chrome.storage.local.set({ description: description });
