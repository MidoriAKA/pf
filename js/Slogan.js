window.onload = function(){
    let Slogan_big = document.querySelectorAll('.Slogan-Big');
    let num = 0
    Slogan_big.forEach((VarText) => {
        let html = '';
        let strs = VarText.textContent.split('');
        strs.forEach((str, i) => {
            let replacedStr = str.replace(/\s|&nbsp;/g);
            num = i + 1;
            html += `<span class='Slogan-Big anim${num}'>${replacedStr}</span>`;
        });
        VarText.innerHTML = html;
    });
    let Slogan_small = document.querySelectorAll('Slogan-small');
    // Slogan_small.forEach((VarText_small) => {
    //     let html_s = '';
    //     let strs_s = VarText_small.split('');
    //     strs_s.forEach((str_s)) => {

    //     }

    // })
    }
    // let Slogan_big_Text = Slogan_big.innerHTML;
    // let Slogan_big_len = Slogan_big_Text.length;
    // console.log(Slogan_big_len);
    // for (let i = 0; i < Slogan_big_len; i++) {
    //     let char = Slogan_big_Text.charAt(i);
    //     let span = document.createElement('span');
    //     span.textContent = char;
    //     span.style.animationDelay = i * 100 + 'ms';
    //     Slogan_big.appendChild(span);