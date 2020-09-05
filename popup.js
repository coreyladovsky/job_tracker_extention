let copy = document.querySelector("#copy");

copy.addEventListener("click", (e) => {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url = tabs[0].url;
        if (url.includes("linkedin.com/jobs/search/")) {
            chrome.tabs.executeScript({
                file: 'linkedInSearch.js'
            })
        }
    })
})