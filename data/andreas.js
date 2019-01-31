
import elin from './elin.js';

let textField = document.querySelector('.popup__textField')
let textArea = document.querySelector('.popup__textarea');
let popupWindow = document.querySelector('.popup-container');
let popupPtag = document.querySelector('.popup__pTag');
let abortButtons = document.querySelectorAll('.popup__close');
let saveButton = document.querySelector('.popup__saveButton');

let textFromTextField = textField.value;
let textFromTextArea = textArea.value;
let idTodo;
let idWorkings;
let idDone;
let todoCounter = 1;
let workingsCounter = 1;
let doneCounter = 1;


    let todoObj = {
        todos: [],
        addTodos: function(title, desc, identifier){
            this.todos.push({
                titles: title,
                descs: desc,
                identifier: identifier
            });
        }
        
    };
    
    let workingObj = {
        workings: [],
        addWorkings: function(title, desc, identifier){
            this.workings.push({
                titles: title,
                descs: desc,
                identifier: identifier
            });
        }
    };
    
    let doneObj = {
        dones: [],
        addDones: function(title, desc, identifier){
            this.dones.push({
                titles: title,
                descs: desc,
                identifier: identifier
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
// edit under konstruktion
function editTodo(){
    let card = document.querySelectorAll('.card');
    for(let i = 0; i < card.length; i++){
        card[i].addEventListener('click', edit)
    }
    
}

function edit(e){
    console.log(e.target);
    popupWindow.classList.remove('displayNone');
    popupWindow.classList.add('displayBlock');
    
    
}

function del(){
    let deleteX = document.querySelector('.card__headerDiv__deleteButton');
    deleteX.addEventListener('click', deleteCard);
}

function deleteCard(e){
    if(e.target.classList === 'card__headerDiv__deleteButton');
    let deleteX = document.querySelector('.card__headerDiv__deleteButton');
   
    deleteX.parentNode.parentNode.parentNode.removeChild(deleteX.parentNode.parentNode);
    console.log(e.target)
}
   

function saveText(e){
    let eventTarget = e.target;
    textFromTextField = textField.value;
    textFromTextArea = textArea.value;
    textFromTextArea = textFromTextArea.replace(/\r?\n/g, '<br/>');
    
    
    
    
    if(eventTarget.classList[1] === 'popup__saveButton--todo'){
        idTodo = 'Todo: ' + todoCounter;
        todoCounter++;
        saveContentInPopup();
        todoObj.addTodos(textFromTextField, textFromTextArea, idTodo);
        console.log(idTodo)
        console.log(todoObj.todos)
        elin.renderView();
        editTodo();
        del();
    }
    if(eventTarget.classList[1] === 'popup__saveButton--working'){
        idWorkings = 'Workings: ' + workingsCounter;
        workingsCounter++;
        saveContentInPopup();
        workingObj.addWorkings(textFromTextField, textFromTextArea, idWorkings);
        console.log(idWorkings);
        console.log(workingObj.workings)
        elin.renderView();
        editTodo();
        
    }
    if(eventTarget.classList[1] === 'popup__saveButton--done'){
        idDone = 'Done: ' + doneCounter;
        doneCounter++;
        saveContentInPopup();
        doneObj.addDones(textFromTextField, textFromTextArea, idDone);
        console.log(idDone);
        console.log(doneObj.dones)
        elin.renderView();
        editTodo();
        
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
    editTodo: editTodo,
    
};


export default exportObject;



