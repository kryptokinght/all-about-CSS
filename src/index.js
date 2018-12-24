const Droppable = require('droppable');

console.log(document.querySelector('#my-droppable-element'));

const droppable = new Droppable({
    element: document.querySelector('#my-droppable-element')
});

