
//Get all nav links
let navLinks = document.querySelectorAll('.nav-link');

//Get all images
let buttons = document.querySelectorAll('.btn');

//Get all h2s
let h2s = document.querySelectorAll('h2'); 

let imgs = document.querySelectorAll('img');

let scrollCount = 0;


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


//on click images make them grayscale
imgs.forEach(img => {
    img.addEventListener('click', (e) => {
        img.style.filter = 'grayscale(100%)'
    })
});

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


//on website load, change the logo to Vacation Dreams
document.addEventListener('scroll', (e) => { 
    scrollCount++;
    if (scrollCount % 20 === 0) { //only do this if scrollcount is divisible by 20
        let color1 = Math.ceil(Math.random() * 255);
        let color2 = Math.ceil(Math.random() * 255);
        let color3 = Math.ceil(Math.random() * 255);
        document.body.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`;
    }    
});


//on keydown, change images to circles
window.addEventListener('keydown', (e) => {
    imgs.forEach(img => {
        img.style.borderRadius = '100%';        
    });
});


//on keyup, revert images back, but with a small border radius
window.addEventListener('keyup', (e) => {
    imgs.forEach(img => {
        img.style.borderRadius = '20px';        
    });
});

//on copy, send alert message with what was copied 
window.addEventListener('copy', (e) => {
    const selection = document.getSelection();
    alert(`Stop plagiarizing! You just copied: \n ${selection}`);
});


//Add similar events on page and stop propagation
window.addEventListener('click', (e) => {
    console.log(`You clicked on the ${e.target}`);
});

//Stop propagation of click event on button!
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        console.log(`You clicked on the ${e.target}`);
        e.stopPropagation();
    });
})


//Prevent page refresh on nav links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
    });
});