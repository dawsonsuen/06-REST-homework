var news=new XMLHttpRequest();
var nObj;
news.open('GET', 'https://newsapi.org/v2/top-headlines?sources=abc-news-au&apiKey=bd5f8cbe30584118a18fab7cf19e0e6d', true);
news.responseType = 'text';
news.send();
news.onload = function() {
	console.log(news.responseText);
    if (news.status === 200){
        nObj = JSON.parse(news.responseText); 
        console.log(nObj);
        document.getElementById('title').innerHTML=nObj.articles[0].title;
        document.getElementById('desc').innerHTML=nObj.articles[0].description;
        var imgPath=nObj.articles[0].urlToImage;
        document.getElementById('img').src=imgPath;

    }
}