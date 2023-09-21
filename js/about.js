function LanSelected(Selected) {
    function ShowSelected(nowSelected){
        let SelectedVarElem = document.getElementById(`ID${nowSelected}Main`);
        SelectedVarElem.classList.remove('HIDE');
    }
    function HideOther(check){
        let HideVar = document.getElementById(`ID${check}Main`);
        if (HideVar.classList.contains('HIDE')) {
            ;
        } else {
            HideVar.classList.add('HIDE');
        }
    }
    switch (Selected) {
        case 'en':
            ShowSelected('en');
            HideOther('ja');
            HideOther('pt');
            break;
        case 'ja':
            ShowSelected('ja');
            HideOther('en');
            HideOther('pt');
            break;
        case 'pt':
            ShowSelected('pt');
            HideOther('en');
            HideOther('ja');
            break;
    }
}