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

module.exports = exportObject;
