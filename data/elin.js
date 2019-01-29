
import andreas from './andreas.js';

function renderView() {
  //Finding elements
  let todoContainer = document.querySelector('.boards__iteamsContainerTodo');
  let workingContainer = document.querySelector('.boards__iteamsContainerWorking');
  let doneContainer = document.querySelector('.boards__iteamsContainerDone');

  console.log('This should be the array with all todos');
  console.log(andreas.todoObj.todos); //This should be an array with all todos

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
  for(let todo of andreas.todoObj.todos) {
    //Creating variables
    let titleText = todo.titles;
    let descriptionText = todo.descs;

    //Creating a new div
    let card = document.createElement('div');
    card.classList.add('card');
    card.style.border = '1px solid black';
    todoContainer.appendChild(card);

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
    header.appendChild(deleteButton);
    let icon = document.createElement('i');
    icon.classList.add('material-icons');
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

    card.appendChild(bottomDiv);
  }
}

renderView();









let exportObject = {
  renderView: renderView,
};

export default exportObject;
