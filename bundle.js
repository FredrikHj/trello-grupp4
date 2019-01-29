(function () {
   'use strict';

   let textField = document.querySelector('.popup__textField');
   let textArea = document.querySelector('.popup__textarea');
   let popupWindow = document.querySelector('.popup-container');
   let popupPtag = document.querySelector('.popup__pTag');
   let abortButtons = document.querySelectorAll('.popup__close');
   let saveButton = document.querySelector('.popup__saveButton');
   let textFromTextField = textField.value;
   let textFromTextArea = textArea.value;

       let todoObj = {
           todos: [],
           addTodos: function(title, desc){
               this.todos.push({
                   titles: title,
                   descs: desc    
               });
           }
       };
       
       let workingObj = {
           workings: [],
           addWorkings: function(title, desc){
               this.workings.push({
                   titles: title,
                   descs: desc    
               });
           }
       };
       
       let doneObj = {
           dones: [],
           addDones: function(title, desc){
               this.dones.push({
                   titles: title,
                   descs: desc    
               });
           }
       };






   function saveTextEvent(){
      
       saveButton.addEventListener('click', saveText);

   }

   function editText(){
       

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

   function getTextFromFieldAndArea(){

       
       

   }

   function saveText(e){
       let eventTarget = e.target;
       textFromTextField = textField.value;
       textFromTextArea = textArea.value;
       textFromTextArea = textFromTextArea.replace(/\r?\n/g, '<br/>');
       
       
       if(eventTarget.classList[1] === 'popup__saveButton--todo'){
           todoObj.addTodos(textFromTextField, textFromTextArea);
           console.log(todoObj.todos);
           // spara i objekt
           
       }
       if(eventTarget.classList[1] === 'popup__saveButton--working'){
           workingObj.addWorkings(textFromTextField, textFromTextArea);
           console.log(workingObj.workings);
           // spara i objekt
           
       }
       if(eventTarget.classList[1] === 'popup__saveButton--done'){
           doneObj.addDones(textFromTextField, textFromTextArea);
           console.log(doneObj.dones);
           // spara i objekt
           
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
       textArea.classList.add('displayNone');
       textArea.classList.remove('displayBlock');
       popupPtag.classList.add('displayBlock');
       popupPtag.classList.remove('displayNone');
       
   }


   let exportObject = {

       saveTextEvent: saveTextEvent,
       editText: editText,
       abortText: abortText,
       removeClasLists: removeClasLists,
       getTextFromFieldAndArea: getTextFromFieldAndArea,
       todoObj: todoObj,
       workingObj: workingObj,
       doneObj: doneObj,
   };

   // Fil nr 1 i vårt grupparbete - Importerar Andreas och Elins JS filer
   //import elin from './elin.js';

   let getPopup = document.querySelector('.popup-container');

   // Add cards

   addIteam();
   function addIteam(){
     exportObject.abortText();
     exportObject.saveTextEvent();
     let getListenerBtn = document.querySelectorAll('.boards__addCardBtn');
     for (let i = 0; i < getListenerBtn.length; i++) {
       let getTargetBtn = getListenerBtn[i];
       getTargetBtn.addEventListener('click', function(e){
         
         let saveButton = document.querySelector('.popup__saveButton');
         console.log(saveButton);
         if(e.target.classList[1] === 'boards__addCardBtnTodo'){
           exportObject.removeClasLists();
           saveButton.classList.add('popup__saveButton--todo');
         }
         else if(e.target.classList[1] === 'boards__addCardBtnWorking'){
           exportObject.removeClasLists();
           saveButton.classList.add('popup__saveButton--working');
         }
         else if(e.target.classList[1] === 'boards__addCardBtnDone'){
           exportObject.removeClasLists();
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
