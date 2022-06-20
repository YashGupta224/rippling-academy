
var str = "";
var Ans = "Ans";
var hist = [];
var curr_str = "";
var row_prev = document.querySelector(".row").innerHTML;
var button = document.querySelectorAll(".button");
for (var i = 0; i < button.length; i++) {
    button[i].onclick = button_fun;
}

document.querySelector(".calculator").onmousedown = function () {
    document.querySelector(".display").style.border = "thick solid #000000";
}

document.querySelector(".calculator").onmouseup = function () {
    document.querySelector(".display").style.border = "1px solid #000000";
}

document.querySelector(".history").onclick = function () {
    document.querySelector(".history").innerHTML = "<div>" + hist.join("</div><div>") + "</div>";
    document.querySelector(".display").style.height = "96%";
    document.querySelector(".row").innerHTML = "";
    document.querySelector(".row").style.height = "0%";
}

document.querySelector(".text").onclick = function () {
    document.querySelector(".history").innerHTML = Ans;
    document.querySelector(".display").style.height = "20%";
    document.querySelector(".row").innerHTML = row_prev;
    var button = document.querySelectorAll(".button");
    for (var i = 0; i < button.length; i++) {
        button[i].onclick = button_fun;
    }
    document.querySelector(".row").style.height = "75%";
}

function button_fun() {
    console.log("hello");
    let curr_char = this.innerHTML;
    change_text(curr_char);
}

function change_text(curr_char) {
    if (curr_char == "=") {
        curr_str = str + "=";
        document.querySelector(".history").innerHTML = curr_str;
        console.log(str);
        console.log(curr_str);
        str = eval(str);
        str = str.toString();
        console.log(str);
        curr_str += str;
        hist.push(curr_str);
        if (hist.length > 5) hist.shift();
        Ans = "Ans =" + str;
        if(document.querySelector(".row").innerHTML != "")
        document.getElementsByClassName("button")[3].innerHTML = "AC";
        //document.querySelector(".AC/CE").innerHTML = "AC";
    }
    else if (curr_char == "CE") {
        str = str.slice(0,-1);
        document.querySelector(".history").innerHTML = Ans;
    }
    else if (curr_char == "AC"){
        str = "";
        document.querySelector(".history").innerHTML = Ans;
        document.getElementsByClassName("button")[3].innerHTML = "CE";
    }
    else {
        str += curr_char;
        document.querySelector(".history").innerHTML = Ans;
        if(document.querySelector(".row").innerHTML != "")
        document.getElementsByClassName("button")[3].innerHTML = "CE";
    }
    document.querySelector(".text").innerHTML = str;
}



document.addEventListener(`keypress`, key_fun);
function key_fun(event) {
    console.log(" keyboard ");
    console.log(event.key);
    change_text(event.key);
}