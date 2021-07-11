//This function has been copied and pasted from https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url

function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
}



function buttonOpen(buttonValue) {

    userURL = document.getElementById("url").value;

    if (validURL(userURL) == false) {
        alert("Enter a valid URL, please");

    } else {

        const links = [];
        links["GoogleCache"] = "https://google.com/search?q=";
        links["YandexCache"] = "https://yandex.ru/search/?text=";
        links["BingCache"] = "https://www.bing.com/search?q=";
        links["WebArchive"] = "https://web.archive.org/web/";
        links["ArchiveIS"] = "https://archive.is/newest/";
        links["WebCitation"] = "https://www.webcitation.org/query?url=";
        links["WikiWix"] = "https://archive.wikiwix.com/cache/index2.php?url=";
        links["Exalead"] = "https://www.exalead.com/search/web/results/?q=";
        links["Gigablast"] = "https://www.gigablast.com/search?q=url:";
        links["Sogou"] = "https://www.sogou.com/web?query=";
        links["365"] = "https://www.so.com/s?ie=utf-8&fr=none&src=home_www&q=";
        links["Baidu"] = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=";
        links["Naver"] = "https://search.naver.com/search.naver?where=webkr&query=";
        links["Yahoo"] = "https://search.yahoo.com/search?ei=UTF-8&p=";
        links["Megalodon"] = "https://megalodon.jp/?url=";
        links["Mailru"] = "https://go.mail.ru/search?q=";
        links["UKWA"] = "https://www.webarchive.org.uk/en/ukwa/search?text=";
        links["Arquivopt"] = "https://arquivo.pt/page/search?hitsPerPage=10&query=";
        links["Locarchive"] = "https://webarchive.loc.gov/all/19960101000000-20200606235959*/";
        links["Stanfordarchive"] = "https://swap.stanford.edu/*/";
        links["Versafn"] = "https://vefsafn.is/?page=wayback-results&site=";
        finalURL = links[buttonValue] + userURL;
        const newWindowsLinks = ["GoogleCache", "YandexCache", "365", "Naver", "Yahoo", "Mailru", "WebArchive", "Versafn"];


        if (newWindowsLinks.indexOf(buttonValue) == -1) {

            document.getElementById('mainframe').src = finalURL;

        } else {

            window.open(finalURL);

        }


    }
}
