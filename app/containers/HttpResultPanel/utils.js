export default function() {
    const responseElement = document.getElementById("a-response");
    const requestMenuOption = document.getElementById("request-menu-option");
    if (requestMenuOption && requestMenuOption.classList && !responseElement.classList.contains('active')) {
        if (responseElement)
            responseElement.click();
    }
}