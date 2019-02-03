
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
    card.appendChild(header);

    //Adding title
    let title = document.createElement('p');
    title.textContent = titleText;
    title.classList.add('card__headerDiv__title');
    header.appendChild(title);

    //Adding delete button
    let deleteButton = document.createElement('button');
    deleteButton.classList.add('card__headerDiv__deleteButton');
      deleteButton.setAttribute('id', identifier);
    header.appendChild(deleteButton);
    let icon = document.createElement('i');
    icon.classList.add('material-icons');
    icon.classList.add('material-icons__delete');
    icon.textContent = 'clear';
    deleteButton.appendChild(icon);

    //Adding text icon if there is a description
    if (descriptionText) {
      let textIcon = document.createElement('i');
      textIcon.classList.add('card__descIcon', 'material-icons');
      textIcon.textContent = 'description';
      card.appendChild(textIcon);
    }

    //Adding a container with the arrows
    let bottomDiv = document.createElement('div');
    bottomDiv.classList.add('card__bottomDiv');
    card.appendChild(bottomDiv);

    // -- Left arrow --
    let leftArrow = document.createElement('i');
    leftArrow.classList.add('card__bottomDiv__leftArrow', 'material-icons');
    leftArrow.textContent = 'arrow_back';
    bottomDiv.appendChild(leftArrow);

    // -- Right arrow --
    let rightArrow = document.createElement('i');
    rightArrow.classList.add('card__bottomDiv__rightArrow', 'material-icons');
    rightArrow.textContent = 'arrow_forward';
    bottomDiv.appendChild(rightArrow);
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
};

export default exportObject;
