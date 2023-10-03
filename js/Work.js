window.onload = function(){
    function readJSON(){
        var f = "js/article.json";
        var retJson;
        var obj = new XMLHttpRequest();
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
    let ArticleData = readJSON();
    console.log(ArticleData)

    ArticleRoot = document.getElementById('IDWorkRoot');
    ArticleData.forEach((element) => {
        
    });

        let article = document.getElementsByClassName('Work-article');
        for (let i = 0; i < article.length; i++) {
            article[i].addEventListener('click', function() {
                let ThisID = this.id;
                console.log(ThisID);
            });
        };
    }
    // let Slogan_big = document.querySelectorAll('.Slogan-Big');
    // let num = 0
    // let strs = '';
    // Slogan_big.forEach((VarText, i) => {
    //     let html = '';
    //     strs = VarText.textContent.split('');
    //     strs.forEach((str, num) => {
    //         let replacedStr = str.replace(/\s|&nbsp;/g);
    //         html += `<span class='Slogan-Big anim${num}'>${replacedStr}</span>`;
    //     });
    //     strs += `anim${num}`
    //     num = i + 1;
    //     VarText.innerHTML = html;
    // });

    // let Slogan_big_Text = Slogan_big.innerHTML;
    // let Slogan_big_len = Slogan_big_Text.length;
    // console.log(Slogan_big_len);
    // for (let i = 0; i < Slogan_big_len; i++) {
    //     let char = Slogan_big_Text.charAt(i);
    //     let span = document.createElement('span');
    //     span.textContent = char;
    //     span.style.animationDelay = i * 100 + 'ms';
    //     Slogan_big.appendChild(span);