

const hamButton = document.querySelector('#menu');
const mainnav = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hamButton.classList.toggle('show');
});


/*function toggleClass() {
    const hamButton = document.getElementById("menu");
    if (Element.style.display === "none") {
        Element.style.display = "flex";
    } else {
        Element.style.display = "none";
    }
};*/
