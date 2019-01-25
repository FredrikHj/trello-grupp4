(function () {
   'use strict';

   let textArray = [];
   let titleArray = [];
   function saveText(){
       let selectText = document.querySelector('.popup__textarea');
       if(selectText.value === '');
       

       let selectSaveButton = document.querySelector('.popup__saveButton');
       selectSaveButton.addEventListener('click', function(e){
           let selectText = document.querySelector('.popup__textarea');
           let selectSaveButton = document.querySelector('.popup__saveButton');
           let selectAbortButton = document.querySelector('.popup__close');
           let selectInputText = document.querySelector('.popup__textField');

           

           let text = selectText.value;
           let inputText = selectInputText.value;
           console.log(inputText);
           textArray.push(text);
           titleArray.push(inputText);
           console.log(titleArray);
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
           selectText = '';

           let cardSelector = document.querySelectorAll('.popup__saveButton');
           console.log(cardSelector);
           console.log(e.target);

           let createDiv = document.createElement('div');
           createDiv.classList.add('boards__cards');
           

           for(let i = 0; i < cardSelector.length; i++){
               if(cardSelector[i].classList[1] === 'popup__saveButton--todo'){
                   let selectBoardItemContainer = document.querySelector('.boards__iteamsContainerTodo');
                   selectBoardItemContainer.appendChild(createDiv);

                   console.log('todo');
                   cardSelector[i].classList.remove('popup__saveButton--todo');
       
               }
               else if(cardSelector[i].classList[1] === 'popup__saveButton--working'){
                   let selectBoardItemContainer = document.querySelector('.boards__iteamsContainerWorking');
                   selectBoardItemContainer.appendChild(createDiv);
                   console.log('working');
                   cardSelector[i].classList.remove('popup__saveButton--working');
               }
               else if(cardSelector[i].classList[1] === 'popup__saveButton--done'){
                   let selectBoardItemContainer = document.querySelector('.boards__iteamsContainerDone');
                   selectBoardItemContainer.appendChild(createDiv);
                   console.log('done');
                   cardSelector[i].classList.remove('popup__saveButton--done');
               }
           }

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
               let selectInputText = document.querySelector('.popup__textField');

               selectTextArea.style.display = 'block';
               selectSaveButton.style.display = 'block';
               selectAbortButton.style.display = 'block';

               let selectContainer = document.querySelector('.popup__descriptionFieldContainer').lastChild;
               selectTextArea.value = textArray[textArray.length -1]; 
               selectContainer.remove(selectContainer);

               // lägg till så att titelfältet rensas.
               
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

   /* function emptyTextField(){
       let selectText = document.querySelector('.popup__textarea');
       
           
           selectText.classList.add('displayNone');
           let selectContainer = document.querySelector('.popup__descriptionFieldContainer');
           let createP = document.createElement('p');
           createP.textContent = 'Insert text here';
           selectContainer.appendChild(createP);

           createP.addEventListener('click', function(e){
               createP.textContent = '';
               selectText.classList.add('displayBlock');
               
           })

           
       
   } */

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
       getTargetBtn.addEventListener('click', function(e){
         
         let saveButton = document.querySelector('.popup__saveButton');
         console.log(saveButton);
         if(e.target.classList[1] === 'boards__addCardBtnTodo'){
           saveButton.classList.add('popup__saveButton--todo');
         }
         else if(e.target.classList[1] === 'boards__addCardBtnWorking'){
           saveButton.classList.add('popup__saveButton--working');
         }
         else if(e.target.classList[1] === 'boards__addCardBtnDone'){
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
       
       });
     }
   }

}());