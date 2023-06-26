function onClickITEM(ArticleNum) {
    let canvas = document.getElementById('canvas');
    let article = document.getElementById('IDarticle');
    let iframe = document.getElementById('IDiframe');
    let n1 = document.getElementById('n1');
    let n2 = document.getElementById('n2');

    canvas.classList.toggle('canvas');
    canvas.classList.toggle('canvas-after');

    article.classList.toggle('article');
    article.classList.toggle('article-after');

    if (ArticleNum == '1') {
        iframe.setAttribute('src', 'articles/n1.html');
    } else if (ArticleNum == '2') {
        iframe.setAttribute('src', 'articles/n2.html');
    }
}
function onClickRETURN() {
    let canvas = document.getElementById('canvas');
    let article = document.getElementById('IDarticle');
    let iframe = document.getElementById('IDiframe');
    let n1 = document.getElementById('n1');
    let n2 = document.getElementById('n2');

    canvas.classList.toggle('canvas');
    canvas.classList.toggle('canvas-after');
    article.classList.toggle('article');
    article.classList.toggle('article-after');
}