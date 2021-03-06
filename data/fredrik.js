// Fil nr 1 i vårt grupparbete - Importerar Andreas och Elins JS filer
import andreas from './andreas.js';
//import elin from './elin.js';
import elin from './elin.js';

let getPopup = document.querySelector('.popup-container');

// Add cards
andreas.moveTodo();
andreas.moveWorking();
andreas.moveDone();
addIteam();
function addIteam(){

  andreas.abortText();
  andreas.saveTextEvent();


  let getListenerBtn = document.querySelectorAll('.boards__addCardBtn');
  for (let i = 0; i < getListenerBtn.length; i++) {
    let getTargetBtn = getListenerBtn[i];
    getTargetBtn.addEventListener('click', function(e){
      let selSelect = document.querySelector('.popup__select__container')
      selSelect.classList.add('displayNone');
      selSelect.classList.remove('displayBlock');
      let selMoveButton = document.querySelector('.popup__move');

      let saveButton = document.querySelector('.popup__saveButton')
      console.log(saveButton)
      if(e.target.classList[1] === 'boards__addCardBtnTodo'){
        andreas.removeClasLists();

        saveButton.classList.add('popup__saveButton--todo')

      }
      else if(e.target.classList[1] === 'boards__addCardBtnWorking'){
        andreas.removeClasLists();
        andreas.removeClassListsMoveButton();
        saveButton.classList.add('popup__saveButton--working')

      }
      else if(e.target.classList[1] === 'boards__addCardBtnDone'){
        andreas.removeClasLists();
        andreas.removeClassListsMoveButton();
        saveButton.classList.add('popup__saveButton--done')

      }

      console.log(e.target)
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

    getDatePlace.textContent = dd + " " + monthname + " " + yyyy;
    function checkTime(i){
      if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
      return i;
    }

    // Titel i popupen töms
    let getTitelPopup = document.querySelector('.popup__textField');
    getTitelPopup.value = '';
    });
  }
}
