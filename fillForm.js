chrome.storage.sync.get(["job_title"], (result) => {
    let jobTitle = document.querySelector("input[placeholder='+ add job title']");
    jobTitle.value = result["job_title"];
    jobTitle.dispatchEvent(new Event('input', { bubbles: true }));
    // chrome.storage.sync.remove(["job_title"])
});

chrome.storage.sync.get(["url"], (result) => {
    let url = document.querySelector("input[placeholder='+ add post url']")
    url.value = result["url"];
    url.dispatchEvent(new Event('input', {bubbles: true}));
        // chrome.storage.sync.remove(["url"]);

});

chrome.storage.sync.get(["company"], (result) => {
    let company = document.querySelector("input[placeholder='+ add company']");
    company.value = result["company"];
    company.dispatchEvent(new Event('input', {bubbles: true}));
        // chrome.storage.sync.remove(["company"]);
  
});

chrome.storage.sync.get(["location"], (result) => {
    let location = document.querySelector("input[placeholder='+ add location']");
    location.value = result["location"];
    location.dispatchEvent(new Event('input', {bubbles: true}));
        // chrome.storage.sync.remove(["location"]);

});

chrome.storage.local.get(["description"], (result) => {
    let description = document.querySelector(".sun-editor-editable");
    description.innerHTML = result["description"];
    description.dispatchEvent(new Event('input', { bubbles: true}))
        // chrome.storage.local.remove(["description"]);

});


