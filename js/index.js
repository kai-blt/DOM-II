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


//Get all nav links
let navLinks = document.querySelectorAll('.nav-link');

//Get all images
let buttons = document.querySelectorAll('.btn');

//Get all h2s
let h2s = document.querySelectorAll('h2'); 





//Change link color to gold on mouseover
navLinks.forEach(link => {
    link.addEventListener('mouseover', (e) => {
        link.style.color = 'gold';
        console.log(e.type);
    });
});

//Change link color to black on mouseout
navLinks.forEach(link => {
    link.addEventListener('mouseout', (e) => {
        link.style.color = '#000';
        console.log(e.type);
    });
});


//Change buttons gold on dbl click
buttons.forEach(button => {
    button.addEventListener('dblclick', (e) => {
        button.style.backgroundColor = 'gold'
        button.style.color = '#000'
        console.log(e.type);
    });
})

//If window is resized, alert user that they resized window
window.addEventListener('resize', (e) => {
    alert('You resized me!');
    console.log(e.type);
});


//on website load, change the logo to Vacation Dreams
window.addEventListener('load', (e) => {    
    let logo = document.querySelector('.logo-heading');
    logo.textContent = 'Vacation Dreams'
});
