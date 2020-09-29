try {
  var jobTitle = document.querySelector(".title").innerText;
} catch (error) {
  console.log(error);
}

try {
  var company = document.querySelector(".employerName").innerText;
  var rating = document.querySelector(".employerName > .rating").innerText;
    company = company.slice(0, rating.length * -1)
} catch (error) {
  console.log(error);
}
try {
  var mapLocation = document.querySelector(".empInfo > .location").innerText;
} catch (error) {
  console.log(error);
}
try {
  var description = document.querySelector("#JobDescriptionContainer")
    .innerHTML;
} catch (error) {
  console.log(error);
}

var url = document.location.href;

chrome.storage.sync.set({ job_title: jobTitle });
chrome.storage.sync.set({ url: url });
chrome.storage.sync.set({ company: company });
chrome.storage.sync.set({ location: mapLocation });
chrome.storage.local.set({ description: description });
