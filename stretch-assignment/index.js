//Get block container
const blockContainer = document.querySelector('.blocks');


//Get individual blocks
const blockArray = document.querySelector('.blocks').children;
console.log(blockArray);

//Add on click to each block which moves it to the top of the stack


// let clicked = "";

// window.addEventListener('click', e => {
//     clicked = e.type;
// })

// // function checkClicks() {
// //     console.log('checking...')
// //     if (clicked === 'click') {          
// //         console.log(clicked);
// //         // gsap.to(block, {duration: 1, y: '-=50'});
// //     };        
// // }
// // window.setInterval(checkClicks, 1000);


Array.from(blockArray).forEach(block => {
    block.addEventListener('click', (e) => {
       blockContainer.prepend(block);
    });
    block.addEventListener('mousedown', (e) => {
        console.log(e.target.className);
        setInterval(function(){
            gsap.to(block, {duration: 1, y: '-=50'});   
        });        
    });
    
    block.addEventListener('mouseup', (e) => {
        console.log('UP');
        setInterval(function(){
            gsap.to(block, {duration: 1, y: '-=50'});
        })    
    })
});