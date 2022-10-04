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
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

//let futureDate = new Date(2023,3,1,22,00,0);
const futureDate = new Date(tempYear+1,3,1,23,59,0)

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];

const date = futureDate.getDate();

let weekday = futureDate.getDay();
weekday = weekdays[weekday];


giveaway.textContent = `Your next birthday starts on ${weekday}, ${month} ${date}, ${year} ${hours}:${minutes}am`;

const futureTime = futureDate.getTime();

function getRemainingTime(){
    const today = new Date().getTime();
    const t = futureTime - today; //this gets the total gap in of time in milliseconds

    //1 second = 1000 milliseconds
    //1 minute = 60 seconds
    // 1 hour = 60 minutes
    // 1 day = 24 hours

    //values in ms
    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMinute = 60*1000;

    let days = Math.round(t/oneDay);
    let hours = Math.floor((t%oneDay)/oneHour);
    let min = Math.floor((t%oneHour)/oneMinute);
    let seconds = Math.floor((t%oneMinute)/1000);

    const values = [days, hours, min, seconds];

    function format(item){
        if(item < 10) {
            return (item = `0${item}`);
        }
        return item
    }

    items.forEach(function(item, index){
        item.innerHTML = format(values[index]);
    });

    if(t<0){
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expire"> Yayy you're birthday has passed already!`
    }

}

let countdown = setInterval(getRemainingTime, 1000);
//set initial values
getRemainingTime();