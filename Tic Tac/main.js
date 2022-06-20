var counter=0;
var score=[0,0,0];
var matrix = [-1,-1,-1,-1,-1,-1,-1,-1,-1];
var turn = ["X Turn","O Turn"];
var player = ["X","O"];
var box = document.querySelectorAll(".box");
var bord = document.querySelector(".board").innerHTML;
box.forEach( (box_i,i) => {
    box_i.addEventListener(`click`, function () {
        console.log(i);
        if(matrix[i] == -1){
            matrix[i] = counter;
            this.innerHTML = player[counter];
            counter =1 - counter;
            render_tictac();
        }
    } )
 })

// for(i=0;i<box.length;i++){
//     box[i].addEventListener(`click`, function () {
//         console.log("here");
//         console.log(i);
//         if(matrix[i] == -1){
//             matrix[i] = counter;
//             this.innerHTML = player[counter];
//             counter =1 - counter;
//             render_tictac();
//         }
//     } )
// }

// function my_function(x){
//     return function () {
//         console.log("there");
//         console.log(x);
//     }
// }

// for(i=0;i<box.length;i++){
//     box[i].addEventListener(`click`, my_function(i) );
// }


document.querySelector(".button").onclick = restart;
function restart(){
    counter=0;
    console.log("button");
    matrix = [-1,-1,-1,-1,-1,-1,-1,-1,-1];
    box.forEach( (box_i,i) => {
        box_i.innerHTML="";
    })
    document.querySelector(".ugrid").innerHTML = "";
    document.querySelector(".grid").style.opacity = 1;
    document.querySelector(".box").style.opacity = 1;
    render_tictac();
}


function check_state(){
    if(matrix[0]==matrix[1] && matrix[0]==matrix[2] ) {
        if(matrix[0]!=-1) return matrix[0];
    }
    if(matrix[3]==matrix[4] && matrix[3]==matrix[5] ) {
        if(matrix[3]!=-1) return matrix[3];
    }
    if(matrix[6]==matrix[7] && matrix[6]==matrix[8] ) {
        if(matrix[6]!=-1) return matrix[6];
    }
    if(matrix[0]==matrix[3] && matrix[3]==matrix[6] ) {
        if(matrix[0]!=-1) return matrix[0];
    }
    if(matrix[1]==matrix[4] && matrix[4]==matrix[7] ) {
        if(matrix[1]!=-1) return matrix[1];
    }
    if(matrix[2]==matrix[5] && matrix[5]==matrix[8] ) {
        if(matrix[2]!=-1) return matrix[2];
    }
    if(matrix[0]==matrix[4] && matrix[4]==matrix[8] ) {
        if(matrix[0]!=-1) return matrix[0];
    }
    if(matrix[2]==matrix[4] && matrix[4]==matrix[6] ) {
        if(matrix[2]!=-1) return matrix[2];
    }
    for(var i=0;i<9;i++){
        if(matrix[i]==-1) return -1;
    }
    return 2;
}

function state(x){
    if(x==-1) return;
    score[x] +=1;
    var str="";
    if(x==2) str ="DRAW"
    else str =player[x] + "  WIN";
    for(var i=0;i<9;i++) matrix[i]=x;
    document.querySelector(".text").innerHTML = str;
    document.querySelector(".ugrid").innerHTML = str;
    document.querySelector(".grid").style.opacity = 0;
    document.querySelector(".box").style.opacity = 0;
}


function render_tictac() {
    document.querySelector(".text").innerHTML = turn[counter];
    document.querySelector(".x_score").innerHTML = score[0].toString();
    document.querySelector(".o_score").innerHTML = score[1].toString();
    var k = check_state();
    console.log(matrix)
    console.log("state")
    console.log(k);
    state(k);
}
