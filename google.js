var job = document.querySelector(".tl-item-selected").innerText;
var jobTitles = document.querySelectorAll(".KLsYvd");
var idx; 
jobTitles.forEach((node, i) => {
    if(job.indexOf(node.innerText) === 0) {
        idx = i;
    }
})

try {
    var jobTitle = document.querySelectorAll(".KLsYvd")[idx].innerText;
} catch (error) {
  console.log(error);
}

try {
  var company = document.querySelectorAll(".nJlQNd")[idx].innerText;
} catch (error) {
  console.log(error);
}
try {
  var mapLocation = document.querySelectorAll(".tJ9zfc > .sMzDkb")[idx].innerText;
} catch (error) {
  console.log(error);
}
try {
  var description = document.querySelectorAll(".YgLbBe")[idx].innerHTML;
} catch (error) {
  console.log(error);
}

var url = document.location.href;
debugger
chrome.storage.sync.set({ job_title: jobTitle });
chrome.storage.sync.set({ url: url });
chrome.storage.sync.set({ company: company });
chrome.storage.sync.set({ location: mapLocation });
chrome.storage.local.set({ description: description });
