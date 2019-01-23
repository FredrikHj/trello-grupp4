(function () {
    'use strict';

    function descriptionText(){

    //EventListener  "spara"-button and insert Ptag when saved. The Ptag should also be inserted to main page. make description editible.


    let descriptionText;
    let saveButton = document.querySelector('.popup__saveButton');
    saveButton.addEventListener('click', function(e){

        descriptionText = document.querySelector('.popup__textarea');
        let description = descriptionText.value;
        console.log(descriptionText);

        let hideTextArea = document.querySelector('.popup__textarea');
        hideTextArea.classList.add('displayNone');

        let popup__saveCloseContainer = document.querySelector('.popup__saveCloseContainer');

        popup__saveCloseContainer.classList.add('displayNone');

        let insertText = document.querySelector('.popup__descriptionFieldContainer');
        let pTag = document.createElement('p');
        pTag.classList.add('popup__Ptag');
        pTag.textContent = description;
        insertText.appendChild(pTag);

    });

    }


    function removeFakeTextAndInsertTextArea(){
    // change to correct textArea
    let fakteTextDiv = document.querySelector('.popup__fakeTextDiv');

    fakteTextDiv.addEventListener('click', function(e){
        fakteTextDiv.classList.add('displayNone');

        let popup__textarea = document.querySelector('.popup__textarea');
        let popup__saveCloseContainer = document.querySelector('.popup__saveCloseContainer');

        popup__saveCloseContainer.classList.remove('displayNone');
        popup__textarea.classList.remove('displayNone');

    });
    }


    let exportObject = {

        descriptionText: descriptionText,
        removeFakeTextAndInsertTextArea: removeFakeTextAndInsertTextArea,

    };

    /* Fil nr 1 i vårt grupparbete - Importerar Andreas och Elins JS filer */

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
        // Kalla på function för beskrivning utvikning
        exportObject.removeFakeTextAndInsertTextArea();
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

}());
