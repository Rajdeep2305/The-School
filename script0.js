const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
let condition = document.getElementById("condition");
let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

const header = document.getElementById("header");

setInterval(()=> {
    let currentTime = new Date();

    hrs.innerHTML = (currentTime.getHours()<10?"0":"")+currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes()<10?"0":"")+currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds()<10?"0":"")+currentTime.getSeconds();
},1000);

const today = new Date();

const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

date.innerHTML = (today.getDate() < 10 ? "0" : "") + today.getDate();
day.innerHTML = weekDays[today.getDay()];
month.innerHTML = months[today.getMonth()];
year.innerHTML = today.getFullYear();

let time = today.getHours();
let half = today.getMinutes();

    if(weekDays[today.getDay()] == "Sunday")
    {
        condition.innerHTML = "CLOSED";
    }
    else if(weekDays[today.getDay()] == "Saturday")
    {
        if(time >= 10 && time < 13)
        {
            condition.innerHTML = "OPEN";
        }
        else if(time == 13)
        {
            if(half <= 30)
            {
                condition.innerHTML = "OPEN";
            }
            else
            {
                condition.innerHTML = "CLOSED";
            }
        }
        else
        {
            condition.innerHTML = "CLOSED";
        }
    }
    else
    {
        if(time >= 10 && time <= 17)
        {
            condition.innerHTML = "OPEN";
        }
        else{
            condition.innerHTML = "CLOSED";
        }
    }

    if(condition.innerHTML == "OPEN")
    {
        condition.style.color = "#067d26";
    }
    else
    {
        condition.style.color = "#ff0000";
    }

setInterval(()=>{
    if(weekDays[today.getDay()] == "Sunday")
    {
        condition.innerHTML = "CLOSED";
    }
    else if(weekDays[today.getDay()] == "Saturday")
    {
        if(time >= 10 && time < 13)
        {
            condition.innerHTML = "OPEN";
        }
        else if(time == 13)
        {
            if(half <= 30)
            {
                condition.innerHTML = "OPEN";
            }
            else
            {
                condition.innerHTML = "CLOSED";
            }
        }
        else
        {
            condition.innerHTML = "CLOSED";
        }
    }
    else
    {
        if(time >= 10 && time <= 17)
        {
            condition.innerHTML = "OPEN";
        }
        else{
            condition.innerHTML = "CLOSED";
        }
    }

    if(condition.innerHTML == "OPEN")
    {
        condition.style.color = "#067d26";
    }
    else
    {
        condition.style.color = "#ff0000";
    }  
},1000*10);