chrome.storage.sync.get(function(items) { wl = items.wl.split("\n"); });

function markresults() {
    results = document.getElementsByTagName("a");
    for (i = 0; i < results.length; i++) {
        if (wl.indexOf(results[i].hostname) > -1 && !(results[i].hostname == "") && ((results[i].classList.contains("title")) || (results[i].classList.contains("search-link")) || (results[i].classList.contains("search-title")) || (results[i].classList.contains("Post__titleLink")) || (results[i].classList.contains("CommentTitle__postTitle")) || (results[i].classList.contains("eBXPWN")) || (results[i].classList.contains("iaTZyj")) || (results[i].classList.contains("kfCtqI")) || (results[i].classList.contains("fEbPZL")))) {
            results[i].style.backgroundColor = "lightgreen";
            results[i].style.borderRadius = "25px";
    	}
    }
}

window.addEventListener('load', function(){ setTimeout(markresults,1100) });
