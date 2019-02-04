// Fixa så att man klickar på rätt sak när man trycker på krysset.
import elin from './elin.js';
import fredrik from './fredrik.js'

let textField = document.querySelector('.popup__textField')
let textArea = document.querySelector('.popup__textarea');
let popupWindow = document.querySelector('.popup-container');
let popupPtag = document.querySelector('.popup__pTag');
let abortButtons = document.querySelectorAll('.popup__close');
let saveButton = document.querySelector('.popup__saveButton');
let saveButtonAll = document.querySelectorAll('.popup__saveButton');


let textFromTextField = textField.value;
let textFromTextArea = textArea.value;
let idTodo = '';
let idWorkings;
let idDone;
let todoCounter = 1;
let workingsCounter = 1;
let doneCounter = 1;
let tempIdTodo = '';
let tempIdWorking = '';
let tempIdDone = '';


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



function del(){
    
    let deleteX = document.querySelectorAll('.card__headerDiv__deleteButton');

        for(let i = 0; i < deleteX.length; i++){
            deleteX[i].addEventListener('click', deleteCard);
        }

}

function edit(){
    let selHeaderDiv = document.querySelectorAll('.card');

    for(let i = 0; i < selHeaderDiv.length; i++){
        selHeaderDiv[i].addEventListener('click', editCard);
    };
}

function editCard(e){
    
    textField.value = '';
    textArea.value = '';
    //popupPtag.textContent = '';
    let eventTarget = e.target;
    let selCardDiv = eventTarget.querySelector('.card__headerDiv__deleteButton');
    console.log(selCardDiv)

    for(let key in todoObj.todos){
        console.log(e.target)
        
        tempIdTodo = selCardDiv.getAttribute('id');
        saveButton.setAttribute('id', tempIdTodo)
        selCardDiv.setAttribute('id', tempIdTodo);
        console.log(selCardDiv.id);

        for(let i = 0; i < saveButtonAll.length; i++){
            console.log(saveButtonAll)
            if(saveButtonAll[i].id.includes('Todo')){
                removeClasLists();
                saveButtonAll[i].classList.add('popup__saveButton--todo')
            }
        }
        
       if(selCardDiv.id === todoObj.todos[key].identifier){
            textField.value = todoObj.todos[key].titles;
            textArea.value = todoObj.todos[key].descs;
            popupPtag.textContent = todoObj.todos[key].descs;

            if(popupPtag.textContent === ''){
                popupPtag.textContent = 'Lägg till beskrivning'
            }
            else{
                popupPtag.textContent = todoObj.todos[key].descs;
            }
            
            
        }
        
    }
    for(let key in workingObj.workings){
        tempIdWorking = selCardDiv.getAttribute('id');
        saveButton.setAttribute('id', tempIdWorking)
        selCardDiv.setAttribute('id', tempIdWorking);
        
        console.log(selCardDiv.id);

        for(let i = 0; i < saveButtonAll.length; i++){
            console.log(saveButtonAll)
            if(saveButtonAll[i].id.includes('Work')){
                removeClasLists();
                saveButtonAll[i].classList.add('popup__saveButton--working')
            }
        }
        
       if(selCardDiv.id === workingObj.workings[key].identifier){
            textField.value = workingObj.workings[key].titles;
            textArea.value = workingObj.workings[key].descs;
            popupPtag.textContent = workingObj.workings[key].descs;

            if(popupPtag.textContent === ''){
                popupPtag.textContent = 'Lägg till beskrivning'
            }
            else{
                popupPtag.textContent = workingObj.workings[key].descs;
            }
            
            
        }
        
    }
    for(let key in doneObj.dones){
        tempIdDone = selCardDiv.getAttribute('id');
        
        saveButton.setAttribute('id', tempIdDone)
        selCardDiv.setAttribute('id', tempIdDone);
        console.log(selCardDiv.id);

        for(let i = 0; i < saveButtonAll.length; i++){
            console.log(saveButtonAll)
            if(saveButtonAll[i].id.includes('Done')){
                removeClasLists();
                saveButtonAll[i].classList.add('popup__saveButton--done')
            }
        }
        
       if(selCardDiv.id === doneObj.dones[key].identifier){
            textField.value = doneObj.dones[key].titles;
            textArea.value = doneObj.dones[key].descs;
            popupPtag.textContent = doneObj.dones[key].descs;

            if(popupPtag.textContent === ''){
                popupPtag.textContent = 'Lägg till beskrivning'
            }
            else{
                popupPtag.textContent = doneObj.dones[key].descs;
            }
            
            
        }
        
    }
    


  
    popupWindow.classList.add('displayBlock');
    popupWindow.classList.remove('displayNone');
    
}
    

function deleteCard(e){

    
        
        for(let key in todoObj.todos){
            if(e.target.id === todoObj.todos[key].identifier){
            todoObj.todos.splice(todoObj.todos.lastIndexOf(todoObj.todos[key]), 1,);
            elin.renderView(); 
             


        }
        for(let key in workingObj.workings){
            if(e.target.id === workingObj.workings[key].identifier){
            workingObj.workings.splice(workingObj.workings.lastIndexOf(workingObj.workings[key]), 1,);
            elin.renderView();

        }

        }
        for(let key in doneObj.dones){
            if(e.target.id === doneObj.dones[key].identifier){
            doneObj.dones.splice(doneObj.dones.lastIndexOf(doneObj.dones[key]), 1,);
            elin.renderView();

        }

        }

        
}
}

function saveText(e){
   
    saveButton.removeEventListener('click', saveText);
    
    let eventTarget = e.target;
    textFromTextField = textField.value;
    textFromTextArea = textArea.value;
    textFromTextArea = textFromTextArea.replace(/\r?\n/g, '<br/>');


    
    if(eventTarget.classList[1] === 'popup__saveButton--todo'){
        
        // om den har id/klassen skriv in de nya värdena på nycklarna och stäng ner fönstret
            
           
            if(saveButton.id.length <= 0){

            idTodo = 'Todo: ' + todoCounter;
            todoCounter++;
            saveContentInPopup();
            todoObj.addTodos(textFromTextField, textFromTextArea, idTodo);
            elin.renderView();
            del();
            saveButton.id = idTodo;
            }
            else{
                for(let key in todoObj.todos){

                    if(e.target.id === todoObj.todos[key].identifier){
                        todoObj.todos[key].titles = textField.value;
                        todoObj.todos[key].descs = textArea.value;
                        elin.renderView();
                    }

                    
                    
                }
                saveButton.id = tempIdTodo;
               
            }
             console.log(todoObj.todos)
         
        

    }
    if(eventTarget.classList[1] === 'popup__saveButton--working'){
        if(saveButton.id.length <= 0){
            idWorkings = 'Workings: ' + workingsCounter;
            workingsCounter++;
            saveContentInPopup();
            workingObj.addWorkings(textFromTextField, textFromTextArea, idWorkings);
            elin.renderView();
            del();
            saveButton.idWorkings = idWorkings;
        }
        else{
            for(let key in workingObj.workings){

                if(e.target.id === workingObj.workings[key].identifier){
                    workingObj.workings[key].titles = textField.value;
                    workingObj.workings[key].descs = textArea.value;
                    elin.renderView();
                }

                
                
            }
            saveButton.id = tempIdWorking;
           
        }
        
        console.log(idWorkings);
        console.log(workingObj.workings)

        
        
    }
    if(eventTarget.classList[1] === 'popup__saveButton--done'){
        if(saveButton.id.length <= 0){
            idDone = 'Done: ' + doneCounter;
            doneCounter++;
            saveContentInPopup();
            doneObj.addDones(textFromTextField, textFromTextArea, idDone);
            elin.renderView();
            del();
            saveButton.idDone = idDone;
        }
        else{
            for(let key in doneObj.dones){

                if(e.target.id === doneObj.dones[key].identifier){
                    doneObj.dones[key].titles = textField.value;
                    doneObj.dones[key].descs = textArea.value;
                    elin.renderView();
                }

                
                
            }
            saveButton.id = tempIdDone;
           
        }
        

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

    saveButton.id = '';
    popupWindow = document.querySelector('.popup-container');
    popupWindow.classList.add('displayNone');
    popupWindow.classList.remove('displayBlock');
    textArea.value = '';
    popupPtag.textContent = 'Lägg till beskrivning';
    textArea.classList.add('displayNone');
    textArea.classList.remove('displayBlock');
    popupPtag.classList.add('displayBlock');
    popupPtag.classList.remove('displayNone');
    saveTextEvent();
}


let exportObject = {

    saveTextEvent: saveTextEvent,
    abortText: abortText,
    removeClasLists: removeClasLists,
    todoObj: todoObj,
    workingObj: workingObj,
    doneObj: doneObj,
    saveContentInPopup: saveContentInPopup,
    del: del,
    edit: edit,
    
    
};

export default exportObject;

