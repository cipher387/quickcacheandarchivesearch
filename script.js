	function validURL(str) {
     var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
       '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
       '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
       '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
       '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
       '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
      return !!pattern.test(str);
     }
  	  function buttonOpen(buttonValue)
        {

        	userURL=document.getElementById("url").value;

        	if(validURL(userURL)==false)
        	{
               	 alert("Enter a valid URL, please");
        		
           }
        	else
        	{

        	  const links = [];
        	  links["GoogleCache"]="https://google.com/search?q=";
        	  links["YandexCache"]="https://yandex.ru/search/?text=";
        	  links["BingCache"]="https://www.bing.com/search?q=";
        	  links["WebArchive"]="https://web.archive.org/web/";
        	  links["ArchiveIS"]="http://archive.is/newest/";
        	  links["WebCitation"]="https://www.webcitation.org/query?url=";
        	  links["WikiWix"]="http://archive.wikiwix.com/cache/index2.php?url=";
        	  links["Exalead"]="https://www.exalead.com/search/web/results/?q=";
        	  links["Gigablast"]="https://www.gigablast.com/search?q=url:";
        	  links["Sogou"]="https://www.sogou.com/web?query=";
        	  links["365"]="https://www.so.com/s?ie=utf-8&fr=none&src=home_www&q=";
        	  links["Baidu"]="https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=";
        	  links["Naver"]="https://search.naver.com/search.naver?where=webkr&query=";
        	  links["Yahoo"]="https://search.yahoo.com/search?ei=UTF-8&p=";
        	 links["Megalodon"]="https://megalodon.jp/?url=";
        	 links["Mailru"]="https://go.mail.ru/search?q=";
        	 links["UKWA"]="https://www.webarchive.org.uk/en/ukwa/search?text=";
        	 links["Arquivopt"]="https://arquivo.pt/page/search?hitsPerPage=10&query=";
        	 links["Locarchive"]="https://webarchive.loc.gov/all/19960101000000-20200606235959*/";
        	 links["Stanfordarchive"]="https://swap.stanford.edu/*/";
        	 links["Versafn"]="https://vefsafn.is/?page=wayback-results&site=";
	         links["Archiveit"] = "https://archive-it.org/explore?q=";
                 links["Hawnskhr"] = "https://haw.nsk.hr/wayback/*/";
                 links["Arhivnuk"] = "http://arhiv.nuk.uni-lj.si/?q=";
                 links["Nationalukarchive"] = "https://webarchive.nationalarchives.gov.uk/search/result/?q=";
                 links["Singaporearchive"] = "https://eresources.nlb.gov.sg/webarchives/search-result/";
		 links["Trovearchive"] = "https://trove.nla.gov.au/search/category/websites?keyword=";
		 links["Unchrarchive"] = "https://webarchive.archive.unhcr.org/search/results?q=";
		 links["Estonianarchive"] = "https://veebiarhiiv.digar.ee/a/*/";
	         links["Pronigovarchive"] = "https://webarchive.proni.gov.uk/#!/search?query=";
		 links["Unescoarchive"] = "https://webarchive.unesco.org/#!/search?query=";
		 links["Endofterm"] = "http://eotarchive.cdlib.org/search?keyword=";
		 links["Czechwebarchive"] = "https://wayback.webarchiv.cz/wayback/*/";
		 links["FinnishWebArchive"] = "https://verkkoarkisto.kansalliskirjasto.fi/va/index.php/search?view=frontpage&material_type=website_word&query=";
		 links["EuExithWebArchive"] = "https://webarchive.nationalarchives.gov.uk/eu-exit/results/?title=";
		 links["AUEBWebArchive"] = "http://archive.aueb.gr/?query=";
		 links["CataloniaWebArchive"] = "https://wayback.padicat.cat/wayback/*/";
		 links["GhostArchive"] = "http://ghostarchive.org/search?term=";
        	 window.open(links[buttonValue]+userURL);
        	  
            }
}


function buttonOpen(buttonValue)
        {

        	userURL=document.getElementById("url").value;

        	if(validURL(userURL)==false)
        	{
               	 alert("Enter a valid URL, please");
        		
           }
        	else
        	{

        	  const links = [];
        	  links["GoogleCache"]="https://google.com/search?q=";
        	  links["YandexCache"]="https://yandex.ru/search/?text=";
        	  links["BingCache"]="https://www.bing.com/search?q=";
        	  links["WebArchive"]="https://web.archive.org/web/";
        	  links["ArchiveIS"]="http://archive.is/newest/";
        	  links["WebCitation"]="https://www.webcitation.org/query?url=";
        	  links["WikiWix"]="http://archive.wikiwix.com/cache/index2.php?url=";
        	  links["Exalead"]="https://www.exalead.com/search/web/results/?q=";
        	  links["Gigablast"]="https://www.gigablast.com/search?q=url:";
        	  links["Sogou"]="https://www.sogou.com/web?query=";
        	  links["365"]="https://www.so.com/s?ie=utf-8&fr=none&src=home_www&q=";
        	  links["Baidu"]="https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=";
        	  links["Naver"]="https://search.naver.com/search.naver?where=webkr&query=";
        	  links["Yahoo"]="https://search.yahoo.com/search?ei=UTF-8&p=";
        	 links["Megalodon"]="https://megalodon.jp/?url=";
        	 links["Mailru"]="https://go.mail.ru/search?q=";
        	 links["UKWA"]="https://www.webarchive.org.uk/en/ukwa/search?text=";
        	 links["Arquivopt"]="https://arquivo.pt/page/search?hitsPerPage=10&query=";
        	 links["Locarchive"]="https://webarchive.loc.gov/all/19960101000000-20200606235959*/";
        	 links["Stanfordarchive"]="https://swap.stanford.edu/*/";
        	 links["Versafn"]="https://vefsafn.is/?page=wayback-results&site=";
	         links["Archiveit"] = "https://archive-it.org/explore?q=";
                 links["Hawnskhr"] = "https://haw.nsk.hr/wayback/*/";
                 links["Arhivnuk"] = "http://arhiv.nuk.uni-lj.si/?q=";
                 links["Nationalukarchive"] = "https://webarchive.nationalarchives.gov.uk/search/result/?q=";
                 links["Singaporearchive"] = "https://eresources.nlb.gov.sg/webarchives/search-result/";
		 links["Trovearchive"] = "https://trove.nla.gov.au/search/category/websites?keyword=";
		 links["Unchrarchive"] = "https://webarchive.archive.unhcr.org/search/results?q=";
		 links["Estonianarchive"] = "https://veebiarhiiv.digar.ee/a/*/";
	         links["Pronigovarchive"] = "https://webarchive.proni.gov.uk/#!/search?query=";
		 links["Unescoarchive"] = "https://webarchive.unesco.org/#!/search?query=";
		 links["Endofterm"] = "http://eotarchive.cdlib.org/search?keyword=";
		 links["Czechwebarchive"] = "https://wayback.webarchiv.cz/wayback/*/";
		 links["FinnishWebArchive"] = "https://verkkoarkisto.kansalliskirjasto.fi/va/index.php/search?view=frontpage&material_type=website_word&query=";
		 links["EuExithWebArchive"] = "https://webarchive.nationalarchives.gov.uk/eu-exit/results/?title=";
		 links["AUEBWebArchive"] = "http://archive.aueb.gr/?query=";
		 links["CataloniaWebArchive"] = "https://wayback.padicat.cat/wayback/*/";
		 links["GhostArchive"] = "http://ghostarchive.org/search?term=";
        	 window.open(links[buttonValue]+userURL);
        	  
            }
}

function openAll(buttonValue)
{
	userURL=document.getElementById("url").value;

        	if(validURL(userURL)==false)
        	{
               	 alert("Enter a valid URL, please");
        		
           }
        	else
        	{

        	  const links = [];
        	  window.open("https://google.com/search?q="+userURL;
        	  window.open("https://yandex.ru/search/?text="+userURL;
        	  window.open("https://www.bing.com/search?q="+userURL;
        	  window.open("https://web.archive.org/web/"+userURL;
        	   window.open("http://archive.is/newest/"+userURL;
        	   window.open("https://www.webcitation.org/query?url="+userURL;
        	   window.open("http://archive.wikiwix.com/cache/index2.php?url="+userURL;
        	   window.open("https://www.exalead.com/search/web/results/?q="+userURL;
        	   window.open("https://www.gigablast.com/search?q=url:"+userURL;
        	  window.open("https://www.sogou.com/web?query="+userURL;
        	   window.open("https://www.so.com/s?ie=utf-8&fr=none&src=home_www&q="+userURL;
        	  window.open("https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd="+userURL;
        	   window.open("https://search.naver.com/search.naver?where=webkr&query="+userURL;
        	   window.open("https://search.yahoo.com/search?ei=UTF-8&p="+userURL;
        	  window.open("https://megalodon.jp/?url="+userURL;
        	  window.open("https://go.mail.ru/search?q="+userURL;
        	  window.open("https://www.webarchive.org.uk/en/ukwa/search?text="+userURL;
        	  window.open("https://arquivo.pt/page/search?hitsPerPage=10&query="+userURL;
        	 window.open("https://webarchive.loc.gov/all/19960101000000-20200606235959*/"+userURL;
        	  window.open("https://swap.stanford.edu/*/"+userURL;
        	  window.open("https://vefsafn.is/?page=wayback-results&site="+userURL;
	          window.open("https://archive-it.org/explore?q="+userURL;
                  window.open("https://haw.nsk.hr/wayback/*/"+userURL;
                 window.open("http://arhiv.nuk.uni-lj.si/?q="+userURL;
                  window.open("https://webarchive.nationalarchives.gov.uk/search/result/?q="+userURL;
                  window.open("https://eresources.nlb.gov.sg/webarchives/search-result/"+userURL;
		  window.open("https://trove.nla.gov.au/search/category/websites?keyword="+userURL;
		  window.open("https://webarchive.archive.unhcr.org/search/results?q="+userURL;
		  window.open("https://veebiarhiiv.digar.ee/a/*/"+userURL;
	          window.open("https://webarchive.proni.gov.uk/#!/search?query="+userURL;
		  window.open("https://webarchive.unesco.org/#!/search?query="+userURL;
		  window.open("http://eotarchive.cdlib.org/search?keyword="+userURL;
		  window.open("https://wayback.webarchiv.cz/wayback/*/"+userURL;
		  window.open("https://verkkoarkisto.kansalliskirjasto.fi/va/index.php/search?view=frontpage&material_type=website_word&query="+userURL;
		  window.open("https://webarchive.nationalarchives.gov.uk/eu-exit/results/?title="+userURL;
		  window.open("http://archive.aueb.gr/?query="+userURL;
		  window.open("https://wayback.padicat.cat/wayback/*/"+userURL;
		  window.open("http://ghostarchive.org/search?term="+userURL;
		 
     
        	  
            }
}
