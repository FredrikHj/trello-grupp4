/* Fil nr 1 i vårt grupparbete - Importerar Andreas och Elins JS filer */
import andreas from './andreas.js';
import elin from './elin.js';

let getPopup = document.querySelector('.popup-container');

// Add cards
addIteam();
function addIteam(){
  let getListenerBtn = document.querySelectorAll('.boards__addCardBtn');
  for (let i = 0; i < getListenerBtn.length; i++) {
    let getTargetBtn = getListenerBtn[i];
    getTargetBtn.addEventListener('click', function(){
      getPopup.setAttribute('style', 'display: block');

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

    //setTimeout(startDateTime, 500);

    function checkTime(i){
      if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
      return i;
    }
    // Kalla på function för beskrivning utvikning
    andreas.removeFakeTextAndInsertTextArea();
    });
  }
}

// Avsluta knapp
closeBtn();
function closeBtn(){
  let getPopupCloseBtn = document.querySelector('.popup__close');
  getPopupCloseBtn.addEventListener('click', function(){
    getPopup.style.display = 'none';
  });
}
