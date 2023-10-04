window.onload = function(){
    function readJSON(){
        let f = "js/article.json";
        let retJson;
        let obj = new XMLHttpRequest();
        obj.open( 'get', f, false );
        obj.onload = function() {
          try {
            retJson = JSON.parse(this.responseText);
          } catch (e) {
            ;
          }
        }
        obj.send(null);
        return retJson;
      }
    let ArticleDataOBJ = readJSON();
    let ArticleData = ArticleDataOBJ.article;
    let ArticleRoot = document.getElementById('IDWorkRoot');
    let fragment = document.createDocumentFragment();
    ArticleData.forEach(element => {
        let DOMarticle = document.createElement('article');
        DOMarticle.id = `IDArticle-${element.id}`;
        DOMarticle.className = 'Work-article';
        let DOMdiv = document.createElement('div');
        DOMdiv.className = 'Work-article-background';
        let DOMsection = document.createElement('section');
        let DOMimg = document.createElement('img');
        DOMimg.src = element.thumb;
        DOMimg.className = 'article-thumb';
        let DOMspan = document.createElement('span');
        DOMspan.textContent = element.title;
        DOMspan.className = 'Work-article-title';
        DOMsection.appendChild(DOMimg);
        DOMdiv.appendChild(DOMsection);
        DOMdiv.appendChild(DOMspan);
        DOMarticle.appendChild(DOMdiv);
        fragment.appendChild(DOMarticle);
    });
    ArticleRoot.appendChild(fragment);
    let article = document.getElementsByClassName('Work-article');
    for (let i = 0; i < article.length; i++) {
        article[i].addEventListener('click', function() {
            let ThisID = this.id;
            console.log(ThisID);
            });
        };
    }