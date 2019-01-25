
let textArray = [];
let titleArray = [];
function saveText(){
    let selectText = document.querySelector('.popup__textarea');
    if(selectText.value === ''){
        //emptyTextField();
        
    }
    

    let selectSaveButton = document.querySelector('.popup__saveButton');
    selectSaveButton.addEventListener('click', function(e){
        let selectText = document.querySelector('.popup__textarea');
        let selectSaveButton = document.querySelector('.popup__saveButton');
        let selectAbortButton = document.querySelector('.popup__close');
        let selectInputText = document.querySelector('.popup__textField');

        

        let text = selectText.value;
        let inputText = selectInputText.value;
        console.log(inputText)
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
        console.log(cardSelector)
        console.log(e.target)

        let createDiv = document.createElement('div');
        createDiv.classList.add('boards__cards');
        

        for(let i = 0; i < cardSelector.length; i++){
            if(cardSelector[i].classList[1] === 'popup__saveButton--todo'){
                let selectBoardItemContainer = document.querySelector('.boards__iteamsContainerTodo');
                selectBoardItemContainer.appendChild(createDiv);

                console.log('todo')
                cardSelector[i].classList.remove('popup__saveButton--todo')
    
            }
            else if(cardSelector[i].classList[1] === 'popup__saveButton--working'){
                let selectBoardItemContainer = document.querySelector('.boards__iteamsContainerWorking');
                selectBoardItemContainer.appendChild(createDiv);
                console.log('working')
                cardSelector[i].classList.remove('popup__saveButton--working')
            }
            else if(cardSelector[i].classList[1] === 'popup__saveButton--done'){
                let selectBoardItemContainer = document.querySelector('.boards__iteamsContainerDone');
                selectBoardItemContainer.appendChild(createDiv);
                console.log('done')
                cardSelector[i].classList.remove('popup__saveButton--done')
            }
        }

        editText();
        
    })
    
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

function addCard(){

    
    
   

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
abortText()

let exportObject = {

    saveText: saveText,
    editText: editText,
    abortText: abortText,
    

};

export default exportObject;



