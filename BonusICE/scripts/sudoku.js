// board data
// -1 is a placeholder for representing empty & editable cells
let boardData = [
   -1,  1, -1, -1, -1, -1, -1,  9, -1,
   -1, -1,  4, -1, -1, -1,  2, -1, -1,
   -1, -1,  8, -1, -1,  5, -1, -1, -1,
   -1, -1, -1, -1, -1, -1, -1,  3, -1,
    2, -1, -1, -1,  4, -1,  1, -1, -1,
   -1, -1, -1, -1, -1, -1, -1, -1, -1,
   -1, -1,  1,  8, -1, -1,  6, -1, -1,
   -1,  3, -1, -1, -1, -1, -1,  8, -1,
   -1, -1,  6, -1, -1, -1, -1, -1, -1
];
let board;  // the game board element
let cols;
let valid = true; // valid state of the board
let boards = []; // array to hold player boards each move
let palette; // number selection palette
let selected; // selected number
let rows = [];


/**
 * checks to see if the value exists in the block
 * @param {*} x1 
 * @param {*} y1 
 * @param {*} x2 
 * @param {*} y2 
 * @returns boolean
 */
function sameBlock(x1, y1, x2, y2) {
   let firstRow = Math.floor(y1 / 3) * 3;
   let firstCol = Math.floor(x1 / 3) * 3;
   return (y2 >= firstRow && y2 <= (firstRow + 2) && x2 >= firstCol && x2 <= (firstCol + 2));
}

/**
 * checks to see if the value exists in the same row
 * @param {*} x1 
 * @param {*} y1 
 * @param {*} x2 
 * @param {*} y2 
 * @returns boolean
 */
function sameRow(x1, y1, x2, y2) {
   return y1 == y2;
}

/**
 * checks to see if the value exists in the same column
 * @param {*} x1 
 * @param {*} y1 
 * @param {*} x2 
 * @param {*} y2 
 * @returns boolean
 */
function sameColumn(x1, y1, x2, y2) {
   return x1 == x2;
}


function addToBoard(id) {
   // TODO save a copy of the entire board state in the boards array
   boards.push(boardData);
   //let td = $(id);
   let td = document.getElementById(id);
   //let id = td.attr('id'); // get the id from the cell

   let x = parseInt(id.split('_')[0]); // TODO: update to get the column number (x value) from the cell id.
   let y = parseInt(id.split('_')[1]); // TODO: update to get the row number (y value) from the cell id.

   console.log(x, y);

   if (selected + '' != 'NaN' && /*td.first('span').text()*/ td.children[0].innerHTML === '') {
      // if there is a number selection

      // create new span element
      //let span = document.createElement('span');
      console.log(selected);

      let span = $("<span></span>");
      td.children[0].append(selected);
      /*$(span).text(selected);
      $(td).className = 'disabled';
      
      $(id + 'span').text(selected);*/


      // TODO
      // validate x,y to see if it's in a valid position
         // if invalid set the class name to the 'error' class
      
      // set selected value in the span
      // insert the span to the cell 

      /*if (sameBlock(x, y, x2, y2)) {
         $('#noSelectionError').show();
      }*/

      $('#noSelectionError').hide();
   } else {
      // TODO show element with id noSelectionError 
      $('#noSelectionError').show();
   }
}

function boardPosition(x, y) {
   return y * 9 + x;
}

function undo() {
   selected = -1;

   // TODO: revert back to previous state
   // hint: set the board html to the last saved state 

   board.innerHTML = boards[boards.length]
   boards.pop();
}

$(document).ready(function() {
   // init globals
   board = $('#board'); // get the game board
   cols = $('#board tr td');  // get all game boad columns
   palette = $('#palette');   // get the number selection palette
   rows = $('#board tr');  // get all game board rows

   // generate game board
   for(let colNum = 0, td, tr, val; colNum < 9; colNum++){
      tr = document.createElement('tr');

      for (let rowNum = 0; rowNum < 9; rowNum++) {
         val = boardData[boardPosition(rowNum, colNum)];
         td = document.createElement('td');
         

         // assign id to cell with row/column number so it is easy to lookup
         console.log(rowNum, colNum);
         td.id = rowNum + '_' + colNum;
         //td.onclick = function () { addToBoard(td.id) };
         td.setAttribute("onclick", "addToBoard(this.id)");

         let span = document.createElement('span');
         if (val > 0) {
            span.append(val);
            td.className = 'disabled';
         }

         td.append(span);
         tr.append(td);
      }

      board.append(tr);
      palette.append('<li>' + (colNum + 1) + '</li>');
   }

   // generate number selection palatte 
   $( "<div id=\"noSelectionError\" class=\"error-text\" style=\"display: none\">\n" +
       "       Please select a number below to add to the board\n" +
       "   </div>" ).insertBefore( "#palette" );
   palette.append('<li id="undo" onclick="undo()"><img src="./images/undo.png" /></li>');

   // TODO initialize board cell click event to addToBoard

   // TODO initialize number selection palette to
   $('#palette li').click(function() {
      // Remove class of the previously selected number
      $('#palette li').removeClass('selected');
      // Store the selected number
      selected = parseInt($(this).text());
      // Update class of the selected number to 'selected'
      $(this).addClass('selected');
  });
   // - remove class of the previously selected number with class 'selected'
   // - store a number in the appropriate variable
   // - update class of the selected number to 'selected'

});
