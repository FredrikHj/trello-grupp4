
let textArray = [];
let titleArray = [];
function saveText(){

    

    let selectSaveButton = document.querySelector('.popup__saveButton');
    selectSaveButton.addEventListener('click', function(){
        let selectText = document.querySelector('.popup__textarea');
        let selectSaveButton = document.querySelector('.popup__saveButton');
        let selectAbortButton = document.querySelector('.popup__close');
        let selectInputText = document.querySelector('.popup__textField');

        let text = selectText.value;
        let inputText = selectInputText.value;
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
        selectText.value = '';
        editText()
        
    })
    
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
        
    })
    selectAbortButtonRight.addEventListener('click', function(){
        let selectPopup = document.querySelector('.popup-container');
        let selectTextArea = document.querySelector('.popup__textarea');
        let selectSaveButton = document.querySelector('.popup__saveButton');
        selectPopup.classList.add('displayNone')
        selectPopup.classList.remove('displayBlock');
        // clear popup window
        let selectContainer = document.querySelector('.popup__descriptionFieldContainer').lastChild;
        selectContainer.remove(selectContainer);
        selectTextArea.style.display = 'block';
        selectSaveButton.style.display = 'block';
        selectAbortButton.style.display = 'block';
        selectTextArea.value = '';
    })
    
    
    
}

saveText();
abortText()

let exportObject = {

    saveText: saveText,
    editText: editText,
    abortText: abortText,
    

};

export default exportObject;



