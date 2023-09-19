async function MenuSelected(Selected) {
    function getClassById(elementId) {
        let element = document.getElementById(elementId);
        if (element) {
            var currentClass = element.className;
            return currentClass;
        } else {
            return null;
        }
    }
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      };

    let WelcomeElm = document.getElementById('IDwelcome-hide');
    let Welcome_1 = document.getElementById('Welcome-1');
    let AboutElm = document.getElementById('IDabout-hide');
    let About_1 = document.getElementById('About-1');
    let WorkElm = document.getElementById('IDwork-hide');
    let Work_1 = document.getElementById('Work-1');
    let ContactElm = document.getElementById('IDcontact-hide');
    let Contact_1 = document.getElementById('Contact-1');
    let HasHideClass = getClassById(`ID${Selected}-hide`);

    switch (Selected) {
        case 'welcome':
            WelcomeElm.classList.remove('NoCheckHide');
            Welcome_1.classList.add('welcome-pad-Check');
            if (AboutElm.classList.contains('NoCheckHide')) {
                ;
            } else {
                About_1.classList.add('about-pad-noCheck');
                await sleep(500);
                About_1.classList.remove('about-pad-Check');
                AboutElm.classList.add('NoCheckHide');
                
            }
            if (About_1.classList.contains('about-pad-Check')) {
               
            } else {
                ;
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