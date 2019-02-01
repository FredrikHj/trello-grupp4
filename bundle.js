(function () {
  'use strict';

  function renderView() {
    //Finding elements
    let todoContainer = document.querySelector('.boards__iteamsContainerTodo');
    let workingContainer = document.querySelector('.boards__iteamsContainerWorking');
    let doneContainer = document.querySelector('.boards__iteamsContainerDone');

    console.log('This should be the array with all todos');
    console.log(exportObject$1.todoObj.todos);

    //Looping through all cards in todo
    for(let todo of exportObject$1.todoObj.todos) {
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

  // renderView();


  let exportObject = {
    renderView: renderView,
  };

  let textField = document.querySelector('.popup__textField');
  let textArea = document.querySelector('.popup__textarea');
  let popupWindow = document.querySelector('.popup-container');
  let popupPtag = document.querySelector('.popup__pTag');
  let abortButtons = document.querySelectorAll('.popup__close');
  let saveButton = document.querySelector('.popup__saveButton');

  let textFromTextField = textField.value;
  let textFromTextArea = textArea.value;
  let idTodo;
  let idWorkings;
  let idDone;
  let todoCounter = 1;
  let workingsCounter = 1;
  let doneCounter = 1;


      let todoObj = {
          todos: [],
          addTodos: function(title, desc, identifier){
              this.todos.push({
                  titles: title,
                  descs: desc,
                  identifier: identifier
              });
          }
          
      };
      
      let workingObj = {
          workings: [],
          addWorkings: function(title, desc, identifier){
              this.workings.push({
                  titles: title,
                  descs: desc,
                  identifier: identifier
              });
          }
      };
      
      let doneObj = {
          dones: [],
          addDones: function(title, desc, identifier){
              this.dones.push({
                  titles: title,
                  descs: desc,
                  identifier: identifier
              });
          }
      };


  function saveTextEvent(){
     
      saveButton.addEventListener('click', saveText);

  }

  function abortText(){
      
      for(let i = 0; i < abortButtons.length; i++){
          abortButtons[i].addEventListener('click', abortPopup);
      }
      showArea();
     
  }

  function showArea(){

      popupPtag = document.querySelector('.popup__pTag');
      popupPtag.addEventListener
      ('click', showTextArea);

  }

  function removeClasLists(){
          saveButton = document.querySelector('.popup__saveButton');
          saveButton.classList.remove('popup__saveButton--todo');
          saveButton.classList.remove('popup__saveButton--working');
          saveButton.classList.remove('popup__saveButton--done');
  }

  function saveContentInPopup(){

      popupPtag.textContent = '';
      popupPtag.innerHTML = textFromTextArea;

      if(popupPtag.textContent.length <= 0){
          popupPtag.textContent = 'Lägg till beskrivning';
      }
      textArea.classList.add('displayNone');
      textArea.classList.remove('displayBlock');
      popupPtag.classList.add('displayBlock');
      popupPtag.classList.remove('displayNone');
      

  }
  // edit under konstruktion
  function editTodo(){
      let card = document.querySelectorAll('.card');
      for(let i = 0; i < card.length; i++){
          card[i].addEventListener('click', edit);
      }
      
  }

  function edit(e){
      console.log(e.target);
      popupWindow.classList.remove('displayNone');
      popupWindow.classList.add('displayBlock');
      
      
  }

  function del(){
      let deleteX = document.querySelector('.card__headerDiv__deleteButton');
      deleteX.addEventListener('click', deleteCard);
  }

  function deleteCard(e){
      if(e.target.classList === 'card__headerDiv__deleteButton');
      let deleteX = document.querySelector('.card__headerDiv__deleteButton');
     
      deleteX.parentNode.parentNode.parentNode.removeChild(deleteX.parentNode.parentNode);
      console.log(e.target);
  }
     

  function saveText(e){
      let eventTarget = e.target;
      textFromTextField = textField.value;
      textFromTextArea = textArea.value;
      textFromTextArea = textFromTextArea.replace(/\r?\n/g, '<br/>');
      
      
      
      
      if(eventTarget.classList[1] === 'popup__saveButton--todo'){
          idTodo = 'Todo: ' + todoCounter;
          todoCounter++;
          saveContentInPopup();
          todoObj.addTodos(textFromTextField, textFromTextArea, idTodo);
          console.log(idTodo);
          console.log(todoObj.todos);
          exportObject.renderView();
          editTodo();
          del();
      }
      if(eventTarget.classList[1] === 'popup__saveButton--working'){
          idWorkings = 'Workings: ' + workingsCounter;
          workingsCounter++;
          saveContentInPopup();
          workingObj.addWorkings(textFromTextField, textFromTextArea, idWorkings);
          console.log(idWorkings);
          console.log(workingObj.workings);
          exportObject.renderView();
          editTodo();
          
      }
      if(eventTarget.classList[1] === 'popup__saveButton--done'){
          idDone = 'Done: ' + doneCounter;
          doneCounter++;
          saveContentInPopup();
          doneObj.addDones(textFromTextField, textFromTextArea, idDone);
          console.log(idDone);
          console.log(doneObj.dones);
          exportObject.renderView();
          editTodo();
          
      }
  }


  function showTextArea(e){
      popupPtag = document.querySelector('.popup__pTag');
      popupPtag.classList.add('displayNone');
      popupPtag.classList.remove('displayBlock');
      textArea = document.querySelector('.popup__textarea');
      textArea.classList.add('displayBlock');
      textArea.classList.remove('displayNone');
      
  }


  function abortPopup(e){

      popupWindow = document.querySelector('.popup-container');
      popupWindow.classList.add('displayNone');
      popupWindow.classList.remove('displayBlock');
      textArea.value = '';
      popupPtag.textContent = 'Lägg till en beskrivning';
      textArea.classList.add('displayNone');
      textArea.classList.remove('displayBlock');
      popupPtag.classList.add('displayBlock');
      popupPtag.classList.remove('displayNone');
      
  }


  let exportObject$1 = {

      saveTextEvent: saveTextEvent,
      abortText: abortText,
      removeClasLists: removeClasLists,
      todoObj: todoObj,
      workingObj: workingObj,
      doneObj: doneObj,
      saveContentInPopup: saveContentInPopup,
      editTodo: editTodo,
      
  };

  // Fil nr 1 i vårt grupparbete - Importerar Andreas och Elins JS filer

  let getPopup = document.querySelector('.popup-container');

  // Add cards

  addIteam();
  function addIteam(){
    exportObject$1.abortText();
    exportObject$1.saveTextEvent();
    let getListenerBtn = document.querySelectorAll('.boards__addCardBtn');
    for (let i = 0; i < getListenerBtn.length; i++) {
      let getTargetBtn = getListenerBtn[i];
      getTargetBtn.addEventListener('click', function(e){
        
        let saveButton = document.querySelector('.popup__saveButton');
        console.log(saveButton);
        if(e.target.classList[1] === 'boards__addCardBtnTodo'){
          exportObject$1.removeClasLists();
          saveButton.classList.add('popup__saveButton--todo');
        }
        else if(e.target.classList[1] === 'boards__addCardBtnWorking'){
          exportObject$1.removeClasLists();
          saveButton.classList.add('popup__saveButton--working');
        }
        else if(e.target.classList[1] === 'boards__addCardBtnDone'){
          exportObject$1.removeClasLists();
          saveButton.classList.add('popup__saveButton--done');
        }

        console.log(e.target);
        getPopup.classList.add('displayBlock');
        
      // Datum och tid --------------------------------------------------------------------------------------------
      let getDatePlace = document.querySelector('.popup__todaysDate');

      var today = new Date();

      //  Visa datum
      var dd = today.getDate();

      // Visa månadens namn
      var month = new Array();

      month[0] = "Januari";
      month[1] = "Februari";
      month[2] = "Mars";
      month[3] = "April";
      month[4] = "Maj";
      month[5] = "Juni";
      month[6] = "Juli";
      month[7] = "Augusti";
      month[8] = "September";
      month[9] = "Oktober";
      month[10] = "November";
      month[11] = "December";

      var monthnr = new Date();
      var monthname = month[monthnr.getMonth()];

      var yyyy = today.getFullYear();

      // Visa tid
      // var h = today.getHours();
      // var m = today.getMinutes();
      // var s = today.getSeconds();
      // m = checkTime(m);
      // s = checkTime(s);

      // Infoga allt och presentera i namngiven div

      getDatePlace.textContent = dd + " " + monthname + " " + yyyy;
      // Kalla på function för beskrivning utvikning

      // Titel i popupen töms
      let getTitelPopup = document.querySelector('.popup__textField');
      getTitelPopup.value = '';
      
      });
      
    }
  }

}());
