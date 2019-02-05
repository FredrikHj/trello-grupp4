
<<<<<<< Updated upstream
import andreas from './andreas.js';

function renderCards(element, array) {

  //Clear container
  while(element.firstChild){
    element.removeChild(element.firstChild);
  }

  //Looping through the array with todos/workings/dones
  for(let todo of array) {
    //Creating variables
    let titleText = todo.titles;
    let descriptionText = todo.descs;
    let identifier = todo.identifier;

    //Creating a new div (the card)
    let card = document.createElement('div');
    card.classList.add('card');
    card.style.border = '1px solid black';
    element.appendChild(card);

    //Creating a container for the header
    let header = document.createElement('div');
    header.classList.add('card__headerDiv');
=======
function renderView() {
  //Finding elements
  let todoContainer = document.querySelector('.boards__iteamsContainerTodo');
  let workingContainer = document.querySelector('.boards__iteamsContainerWorking');
  let doneContainer = document.querySelector('.boards__iteamsContainerDone');

  // console.log(todoObj.todos); //This should be an array with all todos

  //Creating test object
  let testObject = {
    todos: [
      {
        titles: 'titel',
        descs: 'beskrivning'
      }, {
        titles: 'do cleaning-up',
        descs: ''
      }, {
        titles: 'do shopping',
        descs: 'boy milk and eggs'
      }
    ],
  };

  //Looping through all cards in todo
  for(let todo of testObject.todos) {
    //Creating a new div
    let card = document.createElement('div');
    todoContainer.appendChild(card);
    card.style.border = '1px solid black';
    card.style.width = '200px';
    card.style.height = '200px';

    //Creating a container for the header
    let header = document.createElement('div');
>>>>>>> Stashed changes
    card.appendChild(header);

    //Adding title
    let title = document.createElement('p');
<<<<<<< Updated upstream
    title.textContent = titleText;
    title.classList.add('card__headerDiv__title');
    header.appendChild(title);

    //Adding edit button
    let editButton = document.createElement('button');
    editButton.classList.add('card__headerDiv__editButton');
    editButton.setAttribute('id', identifier);
    header.appendChild(editButton);
    let editIcon = document.createElement('i');
    editIcon.classList.add('material-icons');
    editIcon.classList.add('card__headerDiv__editButton__icon');
    editIcon.textContent = 'edit';
    editButton.appendChild(editIcon);

    //Adding delete button
    let deleteButton = document.createElement('button');
    deleteButton.classList.add('card__headerDiv__deleteButton');
    deleteButton.setAttribute('id', identifier);
    header.appendChild(deleteButton);
    let deleteIcon = document.createElement('i');
    deleteIcon.classList.add('material-icons');
    deleteIcon.classList.add('card__headerDiv__deleteButton__icon');
    deleteIcon.textContent = 'clear';
    deleteButton.appendChild(deleteIcon);

    //Adding text icon if there is a description
    if (descriptionText) {
      let textIcon = document.createElement('i');
      textIcon.classList.add('card__descIcon', 'material-icons');
      textIcon.textContent = 'description';
      card.appendChild(textIcon);
    }

    // //Adding a container with the arrows
    // let bottomDiv = document.createElement('div');
    // bottomDiv.classList.add('card__bottomDiv');
    // card.appendChild(bottomDiv);
    //
    // // -- Left arrow --
    // let leftArrow = document.createElement('i');
    // let getBtnToLeftArrow = document.createElement('button');
    // getBtnToLeftArrow.classList.add('card__bottomDiv__leftArrow');
    // leftArrow.classList.add('material-icons');
    // leftArrow.textContent = 'arrow_back';
    // getBtnToLeftArrow.appendChild(leftArrow);
    // bottomDiv.appendChild(getBtnToLeftArrow);
    //
    // // -- Right arrow --
    // let rightArrow = document.createElement('i');
    // let getBtnToRightArrow = document.createElement('button');
    // getBtnToRightArrow.classList.add('card__bottomDiv__rightArrow');
    // rightArrow.classList.add('material-icons');
    // rightArrow.textContent = 'arrow_forward';
    // getBtnToRightArrow.appendChild(rightArrow);
    // bottomDiv.appendChild(getBtnToRightArrow);
}
}

function renderView() {
  //Finding elements
  let todoContainer = document.querySelector('.boards__iteamsContainerTodo');
  let workingContainer = document.querySelector('.boards__iteamsContainerWorking');
  let doneContainer = document.querySelector('.boards__iteamsContainerDone');

  //Calling on renderCards for each column
  renderCards(todoContainer, andreas.todoObj.todos);
  renderCards(workingContainer, andreas.workingObj.workings);
  renderCards(doneContainer, andreas.doneObj.dones);
  andreas.del();
  andreas.edit();
  }

let exportObject = {
  renderView: renderView,
  renderCards: renderCards,
=======
    title.textContent = todo.titles;
    header.appendChild(title);

    //Adding button
    let deleteButton = document.createElement('button');
    header.appendChild(deleteButton);
  }
}

renderView();









let exportObject = {
  renderView: renderView,
>>>>>>> Stashed changes
};

export default exportObject;
