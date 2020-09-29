//Get block container
const blockContainer = document.querySelector('.blocks');


//Get individual blocks
const blockArray = document.querySelector('.blocks').children;
console.log(blockArray);

//Add on click to each block which moves it to the top of the stack



Array.from(blockArray).forEach(block => {
    block.addEventListener('click', (e) => {
       blockContainer.prepend(block);
    });
    // block.addEventListener('click', (e) => {
    //     gsap.to(block, {duration: 1, 'blockContainer.prepend(block)'});
    // })
    block.addEventListener('mousedown', (e) => {
      if (e.type === 'mousedown') {
        gsap.to(block, {duration: 1, y: '+=50'});
      };        
    });
});