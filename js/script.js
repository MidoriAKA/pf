function MenuSelected(Selected) {
    function getClassById(elementId) {
        let element = document.getElementById(elementId);
        if (element) {
            var currentClass = element.className;
            return currentClass;
        } else {
            return null;
        }
    }

    let WelcomeElm = document.getElementById('IDwelcome-hide');
    let WelcomeSec = document.getElementById('welcome-sec');
    let AboutElm = document.getElementById('IDabout-hide');
    let AboutSec = document.getElementById('about-sec');
    let WorkElm = document.getElementById('IDwork-hide');
    let WorkSec = document.getElementById('work-sec');
    let ContactElm = document.getElementById('IDcontact-hide');
    let ContactSec = document.getElementById('contact-sec');
    let HasHideClass = getClassById(`ID${Selected}-hide`)

    switch (Selected) {
        case 'welcome':
            WelcomeElm.classList.remove('NoCheckHide');
            if (AboutElm.classList.contains('NoCheckHide')) {
                ;
            } else {
                AboutElm.classList.add('NoCheckHide');
            }
            if (WorkElm.classList.contains('NoCheckHide')) {
                ;
            } else {
                WorkElm.classList.add('NoCheckHide');
            }
            if (ContactElm.classList.contains('NoCheckHide')) {
                ;
            } else {
                ContactElm.classList.add('NoCheckHide');
            }
        break;
    
        case 'about':
            AboutElm.classList.remove('NoCheckHide');
            if (WelcomeElm.classList.contains('NoCheckHide')) {
                ;
            } else {
                WelcomeElm.classList.add('NoCheckHide');
            }
            if (WorkElm.classList.contains('NoCheckHide')) {
                ;
            } else {
                WorkElm.classList.add('NoCheckHide');
            }
            if (ContactElm.classList.contains('NoCheckHide')) {
                ;
            } else {
                ContactElm.classList.add('NoCheckHide');
            }
            break;

        case 'work':
            WorkElm.classList.remove('NoCheckHide');
            if (AboutElm.classList.contains('NoCheckHide')) {
                ;
            } else {
                AboutElm.classList.add('NoCheckHide');
            }
            if (WelcomeElm.classList.contains('NoCheckHide')) {
                ;
            } else {
                WelcomeElm.classList.add('NoCheckHide');
            }
            if (ContactElm.classList.contains('NoCheckHide')) {
                ;
            } else {
                ContactElm.classList.add('NoCheckHide');
            }
            break;
        
        case 'contact':
            ContactElm.classList.remove('NoCheckHide');
            if (AboutElm.classList.contains('NoCheckHide')) {
                ;
            } else {
                AboutElm.classList.add('NoCheckHide');
            }
            if (WelcomeElm.classList.contains('NoCheckHide')) {
                ;
            } else {
                WelcomeElm.classList.add('NoCheckHide');
            }
            if (WorkElm.classList.contains('NoCheckHide')) {
                ;
            } else {
                WorkElm.classList.add('NoCheckHide');
            }
            break;
    }
    console.log(Selected);
}