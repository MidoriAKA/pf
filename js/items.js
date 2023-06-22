function onClickITEM() {
    function getClassByID(elementID) {
        let element = document.getElementById(elementeID);
        if (element) {
            var currentClass = element.className;
            return currentClass;
        } else {
            return null;
        }
    }
}