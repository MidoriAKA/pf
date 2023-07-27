function onClickITEM(ArticleNum) {
    let canvas = document.getElementById('canvas');
    let article = document.getElementById('IDarticle');
    let iframe = document.getElementById('IDiframe');
    canvas.classList.toggle('canvas');
    canvas.classList.toggle('canvas-after');
    article.classList.toggle('article');
    article.classList.toggle('article-after');
    switch (ArticleNum) {
        case '1':
            iframe.setAttribute('src', 'articles/n1.html');
            break
        case '2':
            iframe.setAttribute('src', 'articles/n2.html');
            break
    }
}
function onClickRETURN() {
    let canvas = document.getElementById('canvas');
    let article = document.getElementById('IDarticle');
    canvas.classList.toggle('canvas');
    canvas.classList.toggle('canvas-after');
    article.classList.toggle('article');
    article.classList.toggle('article-after');
}