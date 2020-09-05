chrome.storage.sync.get(["job_title"], (result) => {
    let jobTitle = document.querySelector("input[placeholder='+ add job title']");
    jobTitle.focus()
    document.execCommand("insertText", false, result["job_title"]);
});
chrome.storage.sync.get(["url"], (result) => {
    let url = document.querySelector("input[placeholder='+ add post url']")
    url.focus();
    document.execCommand("insertText", false, result["url"]);
});
chrome.storage.sync.get(["company"], (result) => {
    let company = document.querySelector("input[placeholder='+ add company']")
    company.focus()
    document.execCommand("insertText", false, result["company"])
    
});
chrome.storage.sync.get(["location"], (result) => {
    let location = document.querySelector("input[placeholder='+ add location']")
    location.focus()
    document.execCommand("insertText", false, result["location"])
    
});
chrome.storage.sync.get(["description"], (result) => {
//   document.querySelector("textarea").value = result["description"];
//   document.querySelector("textarea").innerText = result["description"];
    let description = document.querySelector(".sun-editor-editable")
    //   result["description"];
    // let description = document.querySelector("textarea");
    description.focus();
    document.execCommand("insertHTML", false, result["description"]);
});
