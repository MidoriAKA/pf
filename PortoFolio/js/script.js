function onClickWORK() {
    let canvas = document.getElementById('IDcanvas');
    let maincenter = document.getElementById('IDmaincenter');
    let subwork = document.getElementById('IDsubwork');
    let subabout = document.getElementById('IDsubabout');
    let main = document.getElementById('IDmain');
    let maintxt1 = document.getElementById('IDmaintxt1');
    let maintxt2 = document.getElementById('IDmaintxt2');
    let page = document.getElementById('IDpage');
    let rootdiv = document.getElementById('IDrootdiv');
    
    let iframe = document.getElementById('IDiframe'); // 要素を取得

    function getClassById(elementId) { // 関数を宣言、カッコ内が引数
        let element = document.getElementById(elementId); // 要素を取得
        if (element) {
            var currentClass = element.className; // クラス名を取得
            return currentClass; // 変数currentClassを戻り値として返す
        } else {
            return null; // 要素が見つからない場合はnullを返す
        }
    } // IDからクラス名を取得する関数

    function ToggleStyle() {
        canvas.classList.toggle('canvas');
        canvas.classList.toggle('canvas-click');
        canvas.classList.toggle('canvas-after');
   
        maincenter.classList.toggle('main-center');
        maincenter.classList.toggle('main-center-after');
   
        subwork.classList.toggle('sub');
        subwork.classList.toggle('sub-after');
   
        subabout.classList.toggle('sub');
        subabout.classList.toggle('sub-after');
   
        main.classList.toggle('main');
        main.classList.toggle('main-after');

        maintxt1.classList.toggle('main-txt1');
        maintxt1.classList.toggle('main-txt1-after');

        maintxt2.classList.toggle('main-txt2');
        maintxt2.classList.toggle('main-txt2-after');

        page.classList.toggle('page');
        page.classList.toggle('page-after');

        rootdiv.classList.toggle('rootdiv');
        rootdiv.classList.toggle('rootdiv-after');
    } // レイアウト変更関数

    let CurrentClassWork = getClassById('IDsubwork'); // 取得したクラス名を変数に格納

    iframe.setAttribute('src', 'work.html')
    
    if (CurrentClassWork == 'sub') { // クラス名がsubの場合
        // alert(CurrentClassWork);
        ToggleStyle(); // レイアウト変更
    } else { // 違う場合
        // alert(CurrentClassWork);
        return null; // Nullを返す
    }
}

function onClickABOUT() {
    let canvas = document.getElementById('IDcanvas');
    let maincenter = document.getElementById('IDmaincenter');
    let subwork = document.getElementById('IDsubwork');
    let subabout = document.getElementById('IDsubabout');
    let main = document.getElementById('IDmain');
    let maintxt1 = document.getElementById('IDmaintxt1');
    let maintxt2 = document.getElementById('IDmaintxt2');
    let page = document.getElementById('IDpage');
    let rootdiv = document.getElementById('IDrootdiv');
    let iframe = document.getElementById('IDiframe');

    function getClassById(elementId) {
        let element = document.getElementById(elementId); // 要素を取得
        if (element) {
            var currentClass = element.className; // クラス名を取得
            return currentClass;
        } else {
            return null; // 要素が見つからない場合はnullを返す
        }
    }

    function ToggleStyle() {
        canvas.classList.toggle('canvas');
        canvas.classList.toggle('canvas-click');
        canvas.classList.toggle('canvas-after');
   
        maincenter.classList.toggle('main-center');
        maincenter.classList.toggle('main-center-after');
   
        subwork.classList.toggle('sub');
        subwork.classList.toggle('sub-after');
   
        subabout.classList.toggle('sub');
        subabout.classList.toggle('sub-after');
   
        main.classList.toggle('main');
        main.classList.toggle('main-after');

        maintxt1.classList.toggle('main-txt1');
        maintxt1.classList.toggle('main-txt1-after');

        maintxt2.classList.toggle('main-txt2');
        maintxt2.classList.toggle('main-txt2-after');

        page.classList.toggle('page');
        page.classList.toggle('page-after');

        rootdiv.classList.toggle('rootdiv');
        rootdiv.classList.toggle('rootdiv-after');
    }

    let CurrentClassAbout = getClassById('IDsubabout');

    iframe.setAttribute('src', 'about.html')

    if (CurrentClassAbout == 'sub') {
        // alert(CurrentClassAbout);
        ToggleStyle();
    } else {
        // alert(CurrentClassAbout);
        return null;
    }
}

function onClickMAIN() {
    let canvas = document.getElementById('IDcanvas');
    let maincenter = document.getElementById('IDmaincenter');
    let subwork = document.getElementById('IDsubwork');
    let subabout = document.getElementById('IDsubabout');
    let main = document.getElementById('IDmain');
    let maintxt1 = document.getElementById('IDmaintxt1');
    let maintxt2 = document.getElementById('IDmaintxt2');
    let page = document.getElementById('IDpage');
    let rootdiv = document.getElementById('IDrootdiv');
    let iframe = document.getElementById('IDiframe');

    function getClassById(elementId) {
        let element = document.getElementById(elementId); // 要素を取得
        if (element) {
            var currentClass = element.className; // クラス名を取得
            return currentClass;
        } else {
            return null; // 要素が見つからない場合はnullを返す
        }
    }

    function ToggleStyle() {
        canvas.classList.toggle('canvas');
        canvas.classList.toggle('canvas-click');
        canvas.classList.toggle('canvas-after');
   
        maincenter.classList.toggle('main-center');
        maincenter.classList.toggle('main-center-after');
   
        subwork.classList.toggle('sub');
        subwork.classList.toggle('sub-after');
   
        subabout.classList.toggle('sub');
        subabout.classList.toggle('sub-after');
   
        main.classList.toggle('main');
        main.classList.toggle('main-after');

        maintxt1.classList.toggle('main-txt1');
        maintxt1.classList.toggle('main-txt1-after');

        maintxt2.classList.toggle('main-txt2');
        maintxt2.classList.toggle('main-txt2-after');

        page.classList.toggle('page');
        page.classList.toggle('page-after');

        rootdiv.classList.toggle('rootdiv');
        rootdiv.classList.toggle('rootdiv-after');
    }

    let CurrentClassMain = getClassById('IDmain');
    let CurrentClassWork = getClassById('IDsubwork');
    let CurrentClassAbout = getClassById('IDsubabout');

    if (CurrentClassMain == 'main') {
        return null;
    } else if (CurrentClassMain == 'main-after') {
        ToggleStyle();
    }
}