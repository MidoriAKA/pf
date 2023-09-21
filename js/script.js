async function MenuSelected(Selected) {
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      };
    function SelectedAnim(nowSelected){
        let SelectedVarElm = document.getElementById(`ID${nowSelected}-hide`);
        let SelectedVar_1 = document.getElementById(`ID${nowSelected}`);

        SelectedVarElm.classList.remove('NoCheckHide');
        SelectedVarElm.classList.add('CheckAim');
        SelectedVar_1.classList.add(`${nowSelected}-pad-Check`);
    }
    async function IfNotHide(HideVar) {
        let HideVarElm = document.getElementById(`ID${HideVar}-hide`);
        let HideVar_1 = document.getElementById(`ID${HideVar}`);
        if (HideVarElm.classList.contains('NoCheckHide')) {
            ;
        } else {
            HideVar_1.classList.remove(`${HideVar}-pad-Check`);
            HideVar_1.classList.add(`${HideVar}-pad-noCheck`);
            HideVarElm.classList.remove('CheckAnim');
            HideVarElm.classList.add('unCheckAnim');
            await sleep(500);
            HideVar_1.classList.remove(`${HideVar}-pad-noCheck`);
            HideVarElm.classList.remove('unCheckAnim');
            HideVarElm.classList.add('NoCheckHide');
        }
    }
    switch (Selected) {
        case 'welcome':
            SelectedAnim('welcome');
            IfNotHide('about');
            IfNotHide('work');
            IfNotHide('contact');
            break;
    
        case 'about':
            SelectedAnim('about');
            IfNotHide('welcome');
            IfNotHide('work');
            IfNotHide('contact');
            break;

        case 'work':
            SelectedAnim('work');
            IfNotHide('welcome');
            IfNotHide('about');
            IfNotHide('contact');
            break;
        
        case 'contact':
            SelectedAnim('contact');
            IfNotHide('welcome');
            IfNotHide('about');
            IfNotHide('work');
            break;
    }
}
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