const date = new Date();
//date.setFullYear(2016);
function run_calender() {

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];


    const month = date.getMonth();
    const year = date.getFullYear();
    const month_year = months[month] + "  " + year;
    const no_days = new Date(year, month + 1, 0).getDate();
    const start_day = new Date(year, month, 1);
    const first_date = new Date(year,0,1);
    const diff = start_day.getTime() - first_date.getTime();
    const day_diff = Math.ceil(diff/(3600*24*1000)) +first_date.getDay() ;
    console.log(start_day);
    console.log(" here date dif  ");
    console.log(day_diff);
    document.querySelector(".curr_date h1").innerHTML = month_year;

    var days = "";

    var days_size = 1;
    var curr_week = Math.floor(day_diff/7) +1 ;
    
    days += '<div class = "spec">' + curr_week.toString() + '</div>';

    for (var i = 0; i < start_day.getDay(); i++) {
        days += '<div class = "norm">' + '</div>';
        days_size+=1;
    }

    for (var i = 1; i <= no_days; i++) {
        if(days_size%8 == 0) {
            curr_week +=1;
            days += '<div class= "spec" >' + curr_week.toString() + '</div>';
            days_size +=1;
        }
        days += '<div class = "norm">' + i.toString() + '</div>';
        days_size+=1;
        
    }
    document.querySelector(".days").innerHTML = days;

}

run_calender();

var prev = document.querySelector(".prev")
prev.onclick = function () {
    date.setMonth(date.getMonth()-1);
    run_calender();
}

var next = document.querySelector(".next")
next.onclick = function () {
    date.setMonth(date.getMonth()+1);
    run_calender();
}