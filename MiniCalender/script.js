
let month = document.querySelector(".month");
let day = document.querySelector(".day");
let date = document.querySelector(".date");
let year = document.querySelector(".year");

let currDate = new Date();
month.append(currDate.toLocaleString('default',{
    month: "long"
}));
date.append(currDate.getDate());
day.append(currDate.toLocaleString('default',{
    weekday: "long"
}));
year.append(currDate.getFullYear());
