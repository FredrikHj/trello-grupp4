import assert from 'assert';
import fredrik from '../data/fredrik.js';

describe('Testa om modellerna är tomma respektive fyllda', function() {

  it('TodoObj', function() {
    assert.equal(fredrik.andreas.todoObj['todos'],[]);
    //assert.equal(andreas.todoObj([]), 0);
  });




});
// let todoObj = {
//     todos: [],
//     addTodos: function(title, desc, identifier){
//
//         this.todos.push({
//             titles: title,
//             descs: desc,
//             identifier: identifier
//         });
//     }
//
// };
//
// let workingObj = {
//     workings: [],
//     addWorkings: function(title, desc, identifier){
//         this.workings.push({
//             titles: title,
//             descs: desc,
//             identifier: identifier
//         });
//     }
// };
//
// let doneObj = {
//     dones: [],
//     addDones: function(title, desc, identifier){
//         this.dones.push({
//             titles: title,
//             descs: desc,
//             identifier: identifier
//         });
//     }
// };
