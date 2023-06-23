function onClickITEM(itemNum) {
    // function getClassByID(elementID) {
    //     let element = document.getElementById(elementeID);
    //     if (element) {
    //         var currentClass = element.className;
    //         return currentClass;
    //     } else {
    //         return null;
    //     }
    // }

    let canvas = document.getElementById('canvas');
    let item = document.getElementById('IDitem');
    let iframe = document.getElementById('IDiframe');
    let n1 = document.getElementById('n1');
    let n2 = document.getElementById('n2');

    // let CurrentClass = getClassByID();

    canvas.classList.toggle('canvas');
    canvas.classList.toggle('canvas-after');

    item.classList.toggle('item');
    item.classList.toggle('item-after');

    if (itemNum == '1') {
        iframe.setAttribute('src', 'items/n1.html');
    } else if (itemNum == '2') {
        iframe.setAttribute('src', 'items/n2.html');
    }

    console.log(itemNum)
}

// TODO: CSSに変更後のクラスを記述、Display:none
// TODO: 戻るボタン追加