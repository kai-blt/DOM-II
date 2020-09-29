//Get block container
const blockContainer = document.querySelector('.blocks');


//Get individual blocks
const blockArray = document.querySelector('.blocks').children;
console.log(blockArray);

//Add on click to each block which moves it to the top of the stack


function blockMove(block) {
    gsap.to(block, {duration: 1, x: '+=10'});   
    console.log('moving')
}

Array.from(blockArray).forEach(block => {
    block.addEventListener('mousedown', (e) => {
        setInterval(blockMove(e.target))     
    });    
    block.addEventListener('mouseup', (e) => {
        clearInterval();    
    })    
    block.addEventListener('click', (e) => {
        blockContainer.prepend(block);
     });
});