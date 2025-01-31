let box = document.getElementsByClassName("box");
let turn = 'X';

function changeTurn(){
    if(turn === 'X'){
        turn = 'O';
    }else{
        turn = 'X';
    }
}

function win(){
    boxText = document.getElementsByClassName("box");
    
    let wins = [
        [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
    ];

    for(let i = 0; i < wins.length; i++){
        if((boxText[wins[i][0]].innerHTML === boxText[wins[i][1]].innerHTML) && (boxText[wins[i][1]].innerHTML === boxText[wins[i][2]].innerHTML) && boxText[wins[i][0]].innerHTML != ""){
            document.getElementsByTagName("h1")[0].innerHTML = boxText[wins[i][0]].innerHTML + " won.";
        }

        
    }
}

for(let i = 0; i < box.length; i++){
    box[i].onclick = function(){
        // const boxValue = this;
        // boxValue.innerHTML = turn;

        if(this.innerHTML === ''){
            this.innerHTML = turn;
        }

        changeTurn();
        win();
    }
}

function reset(){
    
}