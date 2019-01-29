
import elin from './elin.js';

let textField = document.querySelector('.popup__textField')
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

function abortText(){
    
    for(let i = 0; i < abortButtons.length; i++){
        abortButtons[i].addEventListener('click', abortPopup)
    }
    showArea();
   
}

function showArea(){

    popupPtag = document.querySelector('.popup__pTag');
    popupPtag.addEventListener
    ('click', showTextArea);

}

function removeClasLists(){
        saveButton = document.querySelector('.popup__saveButton')
        saveButton.classList.remove('popup__saveButton--todo');
        saveButton.classList.remove('popup__saveButton--working');
        saveButton.classList.remove('popup__saveButton--done');
}

function saveContentInPopup(){

    popupPtag.textContent = '';
    popupPtag.innerHTML = textFromTextArea;

    if(popupPtag.textContent.length <= 0){
        popupPtag.textContent = 'Lägg till beskrivning'
    };

    textArea.classList.add('displayNone');
    textArea.classList.remove('displayBlock');
    popupPtag.classList.add('displayBlock');
    popupPtag.classList.remove('displayNone');
    

}

function saveText(e){
    let eventTarget = e.target;
    textFromTextField = textField.value;
    textFromTextArea = textArea.value;
    textFromTextArea = textFromTextArea.replace(/\r?\n/g, '<br/>');
    
    
    if(eventTarget.classList[1] === 'popup__saveButton--todo'){
        
        saveContentInPopup();
        todoObj.addTodos(textFromTextField, textFromTextArea);
        console.log(todoObj.todos)
        elin.renderView();
    }
    if(eventTarget.classList[1] === 'popup__saveButton--working'){
        saveContentInPopup();
        workingObj.addWorkings(textFromTextField, textFromTextArea);
        console.log(workingObj.workings)
        elin.renderView();
        
    }
    if(eventTarget.classList[1] === 'popup__saveButton--done'){
        saveContentInPopup();
        doneObj.addDones(textFromTextField, textFromTextArea);
        console.log(doneObj.dones)
        elin.renderView();
        
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
    popupPtag.textContent = 'Lägg till en beskrivning';
    textArea.classList.add('displayNone');
    textArea.classList.remove('displayBlock');
    popupPtag.classList.add('displayBlock');
    popupPtag.classList.remove('displayNone');
    
}


let exportObject = {

    saveTextEvent: saveTextEvent,
    abortText: abortText,
    removeClasLists: removeClasLists,
    todoObj: todoObj,
    workingObj: workingObj,
    doneObj: doneObj,
    saveContentInPopup: saveContentInPopup,
};

export default exportObject;



