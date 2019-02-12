// Fixa så att man klickar på rätt sak när man trycker på krysset.
import elin from './elin.js';

let textField = document.querySelector('.popup__textField')
let textArea = document.querySelector('.popup__textarea');
let popupWindow = document.querySelector('.popup-container');
let popupPtag = document.querySelector('.popup__pTag');
let abortButtons = document.querySelectorAll('.popup__close');
let saveButton = document.querySelector('.popup__saveButton');
let saveButtonAll = document.querySelectorAll('.popup__saveButton');
let selMoveButtonTodo = document.querySelector('.popup__move__todo');
let selMoveButtonworking = document.querySelector('.popup__move__working');
let selMoveButtonDone = document.querySelector('.popup__move__done');



let textFromTextField = textField.value;
let textFromTextArea = textArea.value;
let idTodo;
let idWorkings;
let idDone;
let todoCounter = 1;
let workingsCounter = 1;
let doneCounter = 1;
let todoNewTodoCounter = 5000;
let todoNewWorkingCounter = 5000;
let todoNewDoneCounter = 5000;


let tempIdTodo = '';
let tempIdWorking = '';
let tempIdDone = '';
let todoNewIdTodo;
let todoNewIdWorking;
let todoNewIdDone;



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
function removeClassListsMoveButton(){
        let selMoveButtonAll = document.querySelector('.popup__saveButton')
        selMoveButtonAll.classList.remove('popup__saveButton--todo');
        selMoveButtonAll.classList.remove('popup__saveButton--working');
        selMoveButtonAll.classList.remove('popup__saveButton--done');

}

function saveContentInPopup(){

    popupPtag.innerHTML = '';
    popupPtag.innerHTML = textFromTextArea;

    if(popupPtag.innerHTML.length <= 0){
        popupPtag.innerHTML = 'Lägg till beskrivning'
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

    let selSelect = document.querySelector('.popup__select__container');
    selSelect.classList.add('displayBlock');
    selSelect.classList.remove('displayNone');


    textField.value = '';
    textArea.value = '';
    //popupPtag.textContent = '';
    let eventTarget = e.target;
    let selCardDiv = eventTarget.querySelector('.card__headerDiv__deleteButton');


    for(let key in todoObj.todos){


        tempIdTodo = selCardDiv.getAttribute('id');
        saveButton.setAttribute('id', tempIdTodo)
        selCardDiv.setAttribute('id', tempIdTodo);
        selMoveButtonTodo.setAttribute('id', tempIdTodo)
        console.log(selCardDiv.id);

        for(let i = 0; i < saveButtonAll.length; i++){

            if(saveButtonAll[i].id.includes('Todo')){
                removeClasLists();
                saveButtonAll[i].classList.add('popup__saveButton--todo');
                moveButtonsClassListAdd();
                selMoveButtonTodo.classList.add('displayBlock');


            }
        }


       if(selCardDiv.id === todoObj.todos[key].identifier){
            textField.value = todoObj.todos[key].titles;
            textArea.value = todoObj.todos[key].descs.replace(/<br\s*[\/]?>/gi, "\n");
            popupPtag.innerHTML = todoObj.todos[key].descs;

            if(popupPtag.innerHTML === ''){
                popupPtag.innerHTML = 'Lägg till beskrivning'
            }
            else{
                popupPtag.innerHTML = todoObj.todos[key].descs;
            }


        }

    }
    for(let key in workingObj.workings){
        tempIdWorking = selCardDiv.getAttribute('id');
        saveButton.setAttribute('id', tempIdWorking)
        selCardDiv.setAttribute('id', tempIdWorking);
        selMoveButtonworking.setAttribute('id', tempIdWorking);
        console.log(selCardDiv.id);

        for(let i = 0; i < saveButtonAll.length; i++){

            if(saveButtonAll[i].id.includes('Work')){
                removeClasLists();
                saveButtonAll[i].classList.add('popup__saveButton--working')
                moveButtonsClassListAdd();
                selMoveButtonworking.classList.add('displayBlock');

            }
        }

       if(selCardDiv.id === workingObj.workings[key].identifier){
            textField.value = workingObj.workings[key].titles;
            textArea.value = workingObj.workings[key].descs.replace(/<br\s*[\/]?>/gi, "\n");;
            popupPtag.innerHTML = workingObj.workings[key].descs;

            if(popupPtag.innerHTML === ''){
                popupPtag.innerHTML = 'Lägg till beskrivning'
            }
            else{
                popupPtag.innerHTML = workingObj.workings[key].descs;
            }


        }

    }
    for(let key in doneObj.dones){
        tempIdDone = selCardDiv.getAttribute('id');

        saveButton.setAttribute('id', tempIdDone)
        selCardDiv.setAttribute('id', tempIdDone);
        selMoveButtonDone.setAttribute('id', tempIdDone);
        console.log(selCardDiv.id);

        for(let i = 0; i < saveButtonAll.length; i++){

            if(saveButtonAll[i].id.includes('Done')){
                removeClasLists();
                saveButtonAll[i].classList.add('popup__saveButton--done')
                moveButtonsClassListAdd();
                selMoveButtonDone.classList.add('displayBlock');
            }
        }

       if(selCardDiv.id === doneObj.dones[key].identifier){
            textField.value = doneObj.dones[key].titles;
            textArea.value = doneObj.dones[key].descs.replace(/<br\s*[\/]?>/gi, "\n");
            popupPtag.innerHTML = doneObj.dones[key].descs;

            if(popupPtag.innerHTML === ''){
                popupPtag.innerHTML = 'Lägg till beskrivning'
            }
            else{
                popupPtag.innerHTML = doneObj.dones[key].descs;
            }


        }

    }

    // om identifier är tom kör render. om inte kör inte.

    // loopa objekten och kolla om selCarddiv.id === todoObj.todos[key].identifier.
    // om ja, todoObj.todos.splice(todoObj.todos.lastIndexOf(todoObj.todos[key]), 1,);


    popupWindow.classList.add('displayBlock');
    popupWindow.classList.remove('displayNone');

}


function deleteCard(e){



        for(let key in todoObj.todos){
            if(e.target.id === todoObj.todos[key].identifier){
            todoObj.todos.splice(todoObj.todos.lastIndexOf(todoObj.todos[key]), 1,);
            elin.renderView();
            e.stopPropagation();

        }

        }
        for(let key in workingObj.workings){
            if(e.target.id === workingObj.workings[key].identifier){
            workingObj.workings.splice(workingObj.workings.lastIndexOf(workingObj.workings[key]), 1,);
            elin.renderView();
            e.stopPropagation();
        }

        }
        for(let key in doneObj.dones){
            if(e.target.id === doneObj.dones[key].identifier){
            doneObj.dones.splice(doneObj.dones.lastIndexOf(doneObj.dones[key]), 1,);
            elin.renderView();
            e.stopPropagation();
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
            saveButton.idTodo = idTodo;
            }
            else{
                for(let key in todoObj.todos){

                    if(e.target.id === todoObj.todos[key].identifier){
                        todoObj.todos[key].titles = textField.value;
                        todoObj.todos[key].descs = textArea.value.replace(/\r?\n/g, '<br/>');
                        elin.renderView();
                    }



                }
                saveButton.id = tempIdTodo;

            }



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
                    workingObj.workings[key].descs = textArea.value.replace(/\r?\n/g, '<br/>');
                    elin.renderView();
                }



            }
            saveButton.id = tempIdWorking;

        }




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
                    doneObj.dones[key].descs = textArea.value.replace(/\r?\n/g, '<br/>');
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

function moveTodo(){

    selMoveButtonTodo.addEventListener('click', moveCardTodo)
}
function moveWorking(){

    selMoveButtonworking.addEventListener('click', moveCardWorking)
}
function moveDone(){

    selMoveButtonDone.addEventListener('click', moveCardDone)
}

function moveCardTodo(e){
    // Fixa de andra movecard. Börja på höga nummer där med men inte samma;

    todoNewIdTodo = 'Todo: ' + todoNewTodoCounter;
    todoNewIdWorking = 'Workings: ' + todoNewWorkingCounter;
    todoNewIdDone = 'Done: ' + todoNewDoneCounter;



    for(let key in todoObj.todos){

        if(e.target.id === todoObj.todos[key].identifier){

            let saveTextField = textField.value
            let saveTextArea = textArea.value.replace(/\r?\n/g, '<br/>');
            let saveId = e.target.id;

            let selSelect = document.querySelector('select');
            let saveSelect = selSelect.value;


            if(saveSelect === 'Todo'){

                todoNewTodoCounter++;
                todoObj.addTodos(saveTextField, saveTextArea, todoNewIdTodo);
                todoObj.todos.splice(todoObj.todos.lastIndexOf(todoObj.todos[key]), 1,);

            }

            else if(saveSelect === 'Working'){

                todoNewWorkingCounter++;
                workingObj.addWorkings(saveTextField, saveTextArea, todoNewIdWorking);
                todoObj.todos.splice(todoObj.todos.lastIndexOf(todoObj.todos[key]), 1,);

            }
            else if(saveSelect === 'Done'){

                todoNewDoneCounter++;
                doneObj.addDones(saveTextField, saveTextArea, todoNewIdDone);
                todoObj.todos.splice(todoObj.todos.lastIndexOf(todoObj.todos[key]), 1,);

            }

            elin.renderView();

        }



    }


}
function moveCardWorking(e){

    todoNewIdTodo = 'Todo: ' + todoNewTodoCounter;
    todoNewIdWorking = 'Workings: ' + todoNewWorkingCounter;
    todoNewIdDone = 'Done: ' + todoNewDoneCounter;



    for(let key in workingObj.workings){

        if(e.target.id === workingObj.workings[key].identifier){

            let saveTextField = textField.value
            let saveTextArea = textArea.value.replace(/\r?\n/g, '<br/>');
            let saveId = e.target.id;

            let selSelect = document.querySelector('select');
            let saveSelect = selSelect.value;


            if(saveSelect === 'Todo'){

                todoNewTodoCounter++;
                todoObj.addTodos(saveTextField, saveTextArea, todoNewIdTodo);
                workingObj.workings.splice(workingObj.workings.lastIndexOf(workingObj.workings[key]), 1,);

            }

            else if(saveSelect === 'Working'){

                todoNewWorkingCounter++;
                workingObj.addWorkings(saveTextField, saveTextArea, todoNewIdWorking);
                workingObj.workings.splice(workingObj.workings.lastIndexOf(workingObj.workings[key]), 1,);

            }
            else if(saveSelect === 'Done'){

                todoNewDoneCounter++;
                doneObj.addDones(saveTextField, saveTextArea, todoNewIdDone);
                workingObj.workings.splice(workingObj.workings.lastIndexOf(workingObj.workings[key]), 1,);

            }

            elin.renderView();

        }



    }


}
function moveCardDone(e){
    todoNewIdTodo = 'Todo: ' + todoNewTodoCounter;
    todoNewIdWorking = 'Workings: ' + todoNewWorkingCounter;
    todoNewIdDone = 'Done: ' + todoNewDoneCounter;



    for(let key in doneObj.dones){

        if(e.target.id === doneObj.dones[key].identifier){

            let saveTextField = textField.value
            let saveTextArea = textArea.value.replace(/\r?\n/g, '<br/>');
            let saveId = e.target.id;

            let selSelect = document.querySelector('select');
            let saveSelect = selSelect.value;


            if(saveSelect === 'Todo'){

                todoNewTodoCounter++;
                todoObj.addTodos(saveTextField, saveTextArea, todoNewIdTodo);
                doneObj.dones.splice(doneObj.dones.lastIndexOf(doneObj.dones[key]), 1,);

            }

            else if(saveSelect === 'Working'){

                todoNewWorkingCounter++;
                workingObj.addWorkings(saveTextField, saveTextArea, todoNewIdWorking);
                doneObj.dones.splice(doneObj.dones.lastIndexOf(doneObj.dones[key]), 1,);

            }
            else if(saveSelect === 'Done'){

                todoNewDoneCounter++;
                doneObj.addDones(saveTextField, saveTextArea, todoNewIdDone);
                doneObj.dones.splice(doneObj.dones.lastIndexOf(doneObj.dones[key]), 1,);

            }

            elin.renderView();

        }



    }


}

function moveButtonsClassListAdd(){
    let selMoveButtonTodo = document.querySelector('.popup__move__todo');
    let selMoveButtonworking = document.querySelector('.popup__move__working');
    let selMoveButtonDone = document.querySelector('.popup__move__done');
    selMoveButtonTodo.classList.remove('displayBlock');
    selMoveButtonworking.classList.remove('displayBlock');
    selMoveButtonDone.classList.remove('displayBlock');
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
    moveTodo: moveTodo,
    moveWorking: moveWorking,
    moveDone: moveDone,
    removeClassListsMoveButton: removeClassListsMoveButton,

};


export default exportObject;
