/************************************SELECTORS************************************/
const colors = document.querySelectorAll('.color');
const boxes = document.querySelectorAll('.box');
const main = document.getElementById('main');
const removeBtn = document.getElementById('remove-btn');
let getColor = '';
let getBox;

/************************************EVENTS************************************/

main.addEventListener('click', (e) => {
    const children = main.children;
    const colors = main.children[0];
    const boxes = main.children[1];
    let chosenColorOrBox = e.target;
    //let getColor = ''; hier lukte het niet
    
    //first -> get the color
    if(chosenColorOrBox.classList == 'color'){
        getColor = chosenColorOrBox.getAttribute('id');
        //console.log(getColor);

    //second -> get the box and change background color
    }else if(chosenColorOrBox.classList == 'box' && getColor !== ''){
        getBox = chosenColorOrBox;
        //console.log(getBox);
        getBox.style.backgroundColor = getColor;
    }
})

removeBtn.addEventListener('click', (e) =>{
    location.reload();
})


/***********************************************************************/

/*

LOOPEN OVER DE NODELIST

colors.forEach((color) =>{
    color.addEventListener('click', (e) =>{
        let color = e.target;
        getColor(color);
    })
})

boxes.forEach((box) =>{
    box.addEventListener('click', (e) =>{
        let box = e.target;
        changeBackground(box);
    })
})

*/

/************************************************************************/
