(function () {
    'use strict';

    let textArray = [];
    function saveText(){

        

        let selectSaveButton = document.querySelector('.popup__saveButton');
        selectSaveButton.addEventListener('click', function(){
            let selectText = document.querySelector('.popup__textarea');
            let selectSaveButton = document.querySelector('.popup__saveButton');
            let selectAbortButton = document.querySelector('.popup__close');

            let text = selectText.value;

            textArray.push(text);
            console.log(textArray);

            text = text.replace(/\r?\n/g, '<br/>');

            let pTag = document.createElement('p');
            pTag.innerHTML = text;
            let selectContainer = document.querySelector('.popup__descriptionFieldContainer');
            selectContainer.appendChild(pTag);
            selectText.style.display = 'none';
            selectSaveButton.style.display = 'none';
            selectAbortButton.style.display = 'none';
            pTag.classList.add('popup__pTag');
            selectText.value = '';
            editText();
            
        });
        
    }

    function editText(){
        
        let selectPTag = document.querySelectorAll('.popup__pTag');
            
        for(let i = 0; i < selectPTag.length; i++){
            selectPTag[i].addEventListener('click', function(){
                
                let selectTextArea = document.querySelector('.popup__textarea');
                let selectSaveButton = document.querySelector('.popup__saveButton');
                let selectAbortButton = document.querySelector('.popup__close');

                selectTextArea.style.display = 'block';
                selectSaveButton.style.display = 'block';
                selectAbortButton.style.display = 'block';

                let selectContainer = document.querySelector('.popup__descriptionFieldContainer').lastChild;
                selectTextArea.value = textArray[textArray.length -1]; // konvertera tillbaka till radbrytning...
                selectContainer.remove(selectContainer);
                
            });
        }

        

    }

    function abortText(){

        let selectAbortButton = document.querySelector('.popup__close');
        let selectAbortButtonRight = document.querySelector('.popup__closeUpRight');

        selectAbortButton.addEventListener('click', function(){
            let selectPopup = document.querySelector('.popup-container');
            let selectTextArea = document.querySelector('.popup__textarea');
            let selectSaveButton = document.querySelector('.popup__saveButton');
            selectPopup.classList.add('displayNone');
            selectPopup.classList.remove('displayBlock');
            // clear popup window
            let selectContainer = document.querySelector('.popup__descriptionFieldContainer').lastChild;
            selectContainer.remove(selectContainer);
            selectTextArea.style.display = 'block';
            selectSaveButton.style.display = 'block';
            selectAbortButton.style.display = 'block';
            selectTextArea.value = '';
            
        });
        selectAbortButtonRight.addEventListener('click', function(){
            let selectPopup = document.querySelector('.popup-container');
            let selectTextArea = document.querySelector('.popup__textarea');
            let selectSaveButton = document.querySelector('.popup__saveButton');
            selectPopup.classList.add('displayNone');
            selectPopup.classList.remove('displayBlock');
            // clear popup window
            let selectContainer = document.querySelector('.popup__descriptionFieldContainer').lastChild;
            selectContainer.remove(selectContainer);
            selectTextArea.style.display = 'block';
            selectSaveButton.style.display = 'block';
            selectAbortButton.style.display = 'block';
            selectTextArea.value = '';
        });
        
        
        
    }

    saveText();
    abortText();

    // Fil nr 1 i vårt grupparbete - Importerar Andreas och Elins JS filer
    //import elin from './elin.js';
     
    let getPopup = document.querySelector('.popup-container');

    // Add cards
    addIteam();
    function addIteam(){
      let getListenerBtn = document.querySelectorAll('.boards__addCardBtn');
      for (let i = 0; i < getListenerBtn.length; i++) {
        let getTargetBtn = getListenerBtn[i];
        getTargetBtn.addEventListener('click', function(){
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
        
        });
      }
    }

}());
