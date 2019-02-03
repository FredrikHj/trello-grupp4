(function () {
  'use strict';

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
      let getBtnToLeftArrow = document.createElement('button');
      getBtnToLeftArrow.classList.add('card__bottomDiv__leftArrow');
      leftArrow.classList.add('material-icons');
      leftArrow.textContent = 'arrow_back';
      getBtnToLeftArrow.appendChild(leftArrow);
      bottomDiv.appendChild(getBtnToLeftArrow);

      // -- Right arrow --
      let rightArrow = document.createElement('i');
      let getBtnToRightArrow = document.createElement('button');
      getBtnToRightArrow.classList.add('card__bottomDiv__rightArrow');
      rightArrow.classList.add('material-icons');
      rightArrow.textContent = 'arrow_forward';
      getBtnToRightArrow.appendChild(rightArrow);
      bottomDiv.appendChild(getBtnToRightArrow);
  }
  }

  function renderView() {
    //Finding elements
    let todoContainer = document.querySelector('.boards__iteamsContainerTodo');
    let workingContainer = document.querySelector('.boards__iteamsContainerWorking');
    let doneContainer = document.querySelector('.boards__iteamsContainerDone');

    //Calling on renderCards for each column
    renderCards(todoContainer, exportObject$1.todoObj.todos);
    renderCards(workingContainer, exportObject$1.workingObj.workings);
    renderCards(doneContainer, exportObject$1.doneObj.dones);
    exportObject$1.del();
    exportObject$1.edit();
    }

  let exportObject = {
    renderView: renderView,
    renderCards: renderCards,
  };

  // Fixa så att man klickar på rätt sak när man trycker på krysset.

  let textField = document.querySelector('.popup__textField');
  let textArea = document.querySelector('.popup__textarea');
  let popupWindow = document.querySelector('.popup-container');
  let popupPtag = document.querySelector('.popup__pTag');
  let abortButtons = document.querySelectorAll('.popup__close');
  let saveButton = document.querySelector('.popup__saveButton');
  let saveButtonAll = document.querySelectorAll('.popup__saveButton');


  let textFromTextField = textField.value;
  let textFromTextArea = textArea.value;
  let idTodo = '';
  let idWorkings;
  let idDone;
  let todoCounter = 1;
  let workingsCounter = 1;
  let doneCounter = 1;
  let tempIdTodo = '';
  let tempIdWorking = '';
  let tempIdDone = '';


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
<<<<<<< HEAD
  // edit under konstruktion
  //function editTodo(){
  //    let card = document.querySelectorAll('.card');
  //    for(let i = 0; i < card.length; i++){
  //        card[i].addEventListener('click', edit)
  //    }
  //
  //}
  //
  //function edit(e){
  //    console.log(e.target);
  //    popupWindow.classList.remove('displayNone');
  //    popupWindow.classList.add('displayBlock');
  //
  //
  //}

  function del(){

=======


  function del(){
      
      
>>>>>>> de76a673d95ab91b66e1312bf46daeff4ddf130c
      let deleteX = document.querySelectorAll('.card__headerDiv__deleteButton');

          for(let i = 0; i < deleteX.length; i++){
              deleteX[i].addEventListener('click', deleteCard);
          }

  }

<<<<<<< HEAD

  function deleteCard(e){
      console.log(e.target.id);
      //let deleteX = document.querySelectorAll('.card__headerDiv__deleteButton');
      console.log(todoObj.todos);

          for(let key in todoObj.todos){
              if(e.target.id === todoObj.todos[key].identifier){
              todoObj.todos.splice(todoObj.todos.lastIndexOf(todoObj.todos[key]), 1,);
              exportObject.renderView();

          }
=======
  function edit(){
      let selHeaderDiv = document.querySelectorAll('.card');

      for(let i = 0; i < selHeaderDiv.length; i++){
          selHeaderDiv[i].addEventListener('click', editCard);
      }}

  function editCard(e){
      
      textField.value = '';
      textArea.value = '';
      //popupPtag.textContent = '';
      let eventTarget = e.target;
      let selCardDiv = eventTarget.querySelector('.card__headerDiv__deleteButton');
      console.log(selCardDiv);

      for(let key in todoObj.todos){
          console.log(e.target);
          
          tempIdTodo = selCardDiv.getAttribute('id');
          saveButton.setAttribute('id', tempIdTodo);
          selCardDiv.setAttribute('id', tempIdTodo);
          console.log(selCardDiv.id);

          for(let i = 0; i < saveButtonAll.length; i++){
              console.log(saveButtonAll);
              if(saveButtonAll[i].id.includes('Todo')){
                  removeClasLists();
                  saveButtonAll[i].classList.add('popup__saveButton--todo');
              }
          }
          
         if(selCardDiv.id === todoObj.todos[key].identifier){
              textField.value = todoObj.todos[key].titles;
              textArea.value = todoObj.todos[key].descs;
              popupPtag.textContent = todoObj.todos[key].descs;

              if(popupPtag.textContent === ''){
                  popupPtag.textContent = 'Lägg till beskrivning';
              }
              else{
                  popupPtag.textContent = todoObj.todos[key].descs;
              }
              
              
          }
          
      }
      for(let key in workingObj.workings){
          tempIdWorking = selCardDiv.getAttribute('id');
          saveButton.setAttribute('id', tempIdWorking);
          selCardDiv.setAttribute('id', tempIdWorking);
          
          console.log(selCardDiv.id);

          for(let i = 0; i < saveButtonAll.length; i++){
              console.log(saveButtonAll);
              if(saveButtonAll[i].id.includes('Work')){
                  removeClasLists();
                  saveButtonAll[i].classList.add('popup__saveButton--working');
              }
          }
          
         if(selCardDiv.id === workingObj.workings[key].identifier){
              textField.value = workingObj.workings[key].titles;
              textArea.value = workingObj.workings[key].descs;
              popupPtag.textContent = workingObj.workings[key].descs;

              if(popupPtag.textContent === ''){
                  popupPtag.textContent = 'Lägg till beskrivning';
              }
              else{
                  popupPtag.textContent = workingObj.workings[key].descs;
              }
              
              
          }
          
      }
      for(let key in doneObj.dones){
          tempIdDone = selCardDiv.getAttribute('id');
          
          saveButton.setAttribute('id', tempIdDone);
          selCardDiv.setAttribute('id', tempIdDone);
          console.log(selCardDiv.id);

          for(let i = 0; i < saveButtonAll.length; i++){
              console.log(saveButtonAll);
              if(saveButtonAll[i].id.includes('Done')){
                  removeClasLists();
                  saveButtonAll[i].classList.add('popup__saveButton--done');
              }
          }
          
         if(selCardDiv.id === doneObj.dones[key].identifier){
              textField.value = doneObj.dones[key].titles;
              textArea.value = doneObj.dones[key].descs;
              popupPtag.textContent = doneObj.dones[key].descs;

              if(popupPtag.textContent === ''){
                  popupPtag.textContent = 'Lägg till beskrivning';
              }
              else{
                  popupPtag.textContent = doneObj.dones[key].descs;
              }
              
              
          }
          
      }
      
      // om identifier är tom kör render. om inte kör inte.

      // loopa objekten och kolla om selCarddiv.id === todoObj.todos[key].identifier.
      // om ja, todoObj.todos.splice(todoObj.todos.lastIndexOf(todoObj.todos[key]), 1,);

    
      popupWindow.classList.add('displayBlock');
      popupWindow.classList.remove('displayNone');
      
  }
      

  function deleteCard(e){

      
          
          for(let key in todoObj.todos){
              if(e.target.id === todoObj.todos[key].identifier){
              todoObj.todos.splice(todoObj.todos.lastIndexOf(todoObj.todos[key]), 1,);
              exportObject.renderView(); 
               
>>>>>>> de76a673d95ab91b66e1312bf46daeff4ddf130c

          }
          for(let key in workingObj.workings){
              if(e.target.id === workingObj.workings[key].identifier){
              workingObj.workings.splice(workingObj.workings.lastIndexOf(workingObj.workings[key]), 1,);
              exportObject.renderView();

          }

          }
          for(let key in doneObj.dones){
              if(e.target.id === doneObj.dones[key].identifier){
              doneObj.dones.splice(doneObj.dones.lastIndexOf(doneObj.dones[key]), 1,);
              exportObject.renderView();

          }

          }

          
  }
<<<<<<< HEAD


  //    deleteX.parentNode.parentNode.parentNode.removeChild(deleteX.parentNode.parentNode);
  //    console.log(e.target)
=======
     
>>>>>>> de76a673d95ab91b66e1312bf46daeff4ddf130c



  function saveText(e){
     
      saveButton.removeEventListener('click', saveText);
      
      let eventTarget = e.target;
      textFromTextField = textField.value;
      textFromTextArea = textArea.value;
      textFromTextArea = textFromTextArea.replace(/\r?\n/g, '<br/>');

<<<<<<< HEAD



      if(eventTarget.classList[1] === 'popup__saveButton--todo'){
          idTodo = 'Todo: ' + todoCounter;
          todoCounter++;
          saveContentInPopup();
          todoObj.addTodos(textFromTextField, textFromTextArea, idTodo);
          console.log(idTodo);
          console.log(todoObj.todos);
          exportObject.renderView();
          del();

=======
      
      
      
      if(eventTarget.classList[1] === 'popup__saveButton--todo'){
          
          // om den har id/klassen skriv in de nya värdena på nycklarna och stäng ner fönstret
              
             
              if(saveButton.id.length <= 0){

              idTodo = 'Todo: ' + todoCounter;
              todoCounter++;
              saveContentInPopup();
              todoObj.addTodos(textFromTextField, textFromTextArea, idTodo);
              exportObject.renderView();
              del();
              saveButton.id = idTodo;
              }
              else{
                  for(let key in todoObj.todos){

                      if(e.target.id === todoObj.todos[key].identifier){
                          todoObj.todos[key].titles = textField.value;
                          todoObj.todos[key].descs = textArea.value;
                          exportObject.renderView();
                      }

                      
                      
                  }
                  saveButton.id = tempIdTodo;
                 
              }
               console.log(todoObj.todos);
           
          
>>>>>>> de76a673d95ab91b66e1312bf46daeff4ddf130c
      }
      if(eventTarget.classList[1] === 'popup__saveButton--working'){
          if(saveButton.id.length <= 0){
              idWorkings = 'Workings: ' + workingsCounter;
              workingsCounter++;
              saveContentInPopup();
              workingObj.addWorkings(textFromTextField, textFromTextArea, idWorkings);
              exportObject.renderView();
              del();
              saveButton.idWorkings = idWorkings;
          }
          else{
              for(let key in workingObj.workings){

                  if(e.target.id === workingObj.workings[key].identifier){
                      workingObj.workings[key].titles = textField.value;
                      workingObj.workings[key].descs = textArea.value;
                      exportObject.renderView();
                  }

                  
                  
              }
              saveButton.id = tempIdWorking;
             
          }
          
          console.log(idWorkings);
          console.log(workingObj.workings);
<<<<<<< HEAD
          exportObject.renderView();
          del();

      }
      if(eventTarget.classList[1] === 'popup__saveButton--done'){
          idDone = 'Done: ' + doneCounter;
          doneCounter++;
          saveContentInPopup();
          doneObj.addDones(textFromTextField, textFromTextArea, idDone);
          console.log(idDone);
          console.log(doneObj.dones);
          exportObject.renderView();
          del();

=======
          
          
      }
      if(eventTarget.classList[1] === 'popup__saveButton--done'){
          if(saveButton.id.length <= 0){
              idDone = 'Done: ' + doneCounter;
              doneCounter++;
              saveContentInPopup();
              doneObj.addDones(textFromTextField, textFromTextArea, idDone);
              exportObject.renderView();
              del();
              saveButton.idDone = idDone;
          }
          else{
              for(let key in doneObj.dones){

                  if(e.target.id === doneObj.dones[key].identifier){
                      doneObj.dones[key].titles = textField.value;
                      doneObj.dones[key].descs = textArea.value;
                      exportObject.renderView();
                  }

                  
                  
              }
              saveButton.id = tempIdDone;
             
          }
          
          
          
          
>>>>>>> de76a673d95ab91b66e1312bf46daeff4ddf130c
      }
      //Starting listen at the movements arrow´s
      findCreatedArrows ();
  }
  //Starting listen at the movements arrow´s
    function findCreatedArrows () {
      // if Arrow class is find perferm else stop
      let getLeftArrow = document.querySelectorAll('.card__bottomDiv button');
      for (let i = 0; i < getLeftArrow.length; i++) {
        let targetArrow = getLeftArrow[i];
        targetArrow.addEventListener('click', function (e) {
          let targetArrowClass = e.target.className;
          if (targetArrowClass === 'card__bottomDiv__leftArrow') {
            console.log('Vänster');
          }
          if (targetArrowClass === 'card__bottomDiv__rightArrow') {
            console.log('Höger');
          }
        });
      }
    }
    //   while ( !== null) {
    //       console.log('Is not null!');
    //   }
    // }
    // let getCardContainer = document.querySelector('.card__bottomDiv__leftArrow');
    // getCardContainer.addEventListener('click', function () {
    //   console.log('efwf');
    // });


  function showTextArea(e){
      popupPtag = document.querySelector('.popup__pTag');
      popupPtag.classList.add('displayNone');
      popupPtag.classList.remove('displayBlock');
      textArea = document.querySelector('.popup__textarea');
      textArea.classList.add('displayBlock');
      textArea.classList.remove('displayNone');

  }


  function abortPopup(e){

      saveButton.id = '';
      popupWindow = document.querySelector('.popup-container');
      popupWindow.classList.add('displayNone');
      popupWindow.classList.remove('displayBlock');
      textArea.value = '';
      popupPtag.textContent = 'Lägg till beskrivning';
      textArea.classList.add('displayNone');
      textArea.classList.remove('displayBlock');
      popupPtag.classList.add('displayBlock');
      popupPtag.classList.remove('displayNone');
      saveTextEvent();
  }


  let exportObject$1 = {

      saveTextEvent: saveTextEvent,
      abortText: abortText,
      removeClasLists: removeClasLists,
      todoObj: todoObj,
      workingObj: workingObj,
      doneObj: doneObj,
      saveContentInPopup: saveContentInPopup,
      del: del,
<<<<<<< HEAD


=======
      edit: edit,
      
      
>>>>>>> de76a673d95ab91b66e1312bf46daeff4ddf130c
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
