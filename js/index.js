// Utilize these event listener options:
// * `mouseover`
// * `keydown`
// * `wheel`
// * `load`
// * `focus`
// * `resize`
// * `scroll`
// * `select`
// * `dblclick`
// * `drag / drop`

let navLinks = document.querySelectorAll('.nav-link');

//Change link color to gold on mouseover
navLinks.forEach(link => {
    link.addEventListener('mouseover', (e) => {
        link.style.color = 'gold';
    });
});

//Change link color to black on mouseout
navLinks.forEach(link => {
    link.addEventListener('mouseout', (e) => {
        link.style.color = '#000';
    });
});