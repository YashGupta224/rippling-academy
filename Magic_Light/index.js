
// for(var i=0;i<anchors.length;i++){
//     var anc = anchors[i];
// anc.onmouseover = function () {
//     this.style.opacity = 0;
//    // m_over(this);
// }
// anc.onmouseout = function () {
//     this.style.opacity = 1;
//     //anchors[i].style.opacity = 1;
//     //m_out(this);
// }
// }


// function m_over(x) {
//     console.log("over");
//     x.style.opacity = 0;
// }
// function m_out(x) {
//     console.log("outt");
//     x.style.opacity = 1;
// }

/*
for(var i=0;i<9;i++){
    anchors[i].onmouseover = opac_0;
    anchors[i].onmouseout = opac_1;
}

function opac_0(){
    this.style.opacity = 0;
}
function opac_1(){
    this.style.opacity = 1;
}
*/

var anchors = document.getElementsByClassName('circle');
var bkk = document.querySelector('.backgroud')
var curr_color = 0;
var color_arr = ["red","green","black","blue","yellow"];
bkk.onclick = function () {
    curr_color += 1;
    curr_color %= color_arr.length;
    console.log(curr_color);
    for (var i = 0; i < anchors.length; i++) {
        anchors[i].style.background = color_arr[curr_color];
    }
}