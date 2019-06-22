// set game size
var size = 3

// create rules
var rules = []
for(var c = 0; c < size; c++){
    rules[c] = []
    for(var r = 0; r < size; r++){
        rules[c][r] = createRule(c, r, size);
    }
}

// draw board
cells = []
for(var c = 0; c < size; c++){
    cells[c] = []
    for(var r = 0; r < size; r++){
        cells[c][r] = true;
        cell = `<div id='r${r}c${c}' class='cell' onClick='applyRule(${r},${c})'></div>`
        document.getElementById('flip').innerHTML += cell;
    }
}

for(var i = 0; i < 3; i++){
    var row = Math.floor(Math.random()*size);
    var col = Math.floor(Math.random()*size);
    applyRule(row, col);
    updateBoard();
}

// run game
function applyRule(row, col){
    for(var c = 0; c < size; c++){
        for(var r = 0; r < size; r++){
            if (rules[col][row][c][r] == 'F'){
                cells[c][r] = !cells[c][r];
            }
            // fun = rules[col][row][c][r]
            // if (fun == 'W'){
            //     cells[c][r] = true;
            // } else if(fun == 'B'){
            //     cells[c][r] = false;
            // } else if(fun == 'F'){
            //     cells[c][r] = !cells[c][r];
            // } else if(fun == 'N'){
            //     cells[c][r] = cells[c][r];
            // }
        }
    }
    updateBoard()
}

function updateBoard(){
    for(var c = 0; c < size; c++){
        for(var r = 0; r < size; r++){
            if (cells[c][r]){
                document.getElementById(`r${r}c${c}`).classList = 'cell';
            }else{
                document.getElementById(`r${r}c${c}`).classList = 'cell flip';
            }
        }
    }
}

// helper functions
function createRule(col, row, s){
    var rule = [];
    // funs = ['F', 'B', 'W', 'N'];
    funs = ['F', 'N', 'N'];
    for(var c = 0; c < s; c++){
        rule[c] = []
        for(var r = 0; r < s; r++){
            var index = Math.floor(Math.random()*funs.length);
            rule[c][r] = funs[index];
        }
    }
    rule[col][row] = 'F'
    return rule
}
