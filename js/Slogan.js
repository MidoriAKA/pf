window.onload = function(){
    let Slogan_big = document.querySelectorAll('.Slogan-Big');
    let num = 0
    let strs = '';
    Slogan_big.forEach((VarText, i) => {
        let html = '';
        strs = VarText.textContent.split('');
        strs.forEach((str, num) => {
            let replacedStr = str.replace(/\s|&nbsp;/g);
            html += `<span class='Slogan-Big anim${num}'>${replacedStr}</span>`;
        });
        strs += `anim${num}`
        num = i + 1;
        VarText.innerHTML = html;
    });
    
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