//time -bottom right 
const timeNow = document.getElementById("timeNow");

setInterval(() => {
  let time = new Date;
  let hour = time.getHours();
  let minute = time.getMinutes();
  (hour < 10) ? hour = '0'+hour : hour = hour;
  (minute < 10) ? minute = '0'+minute : minute = minute;
  timeNow.innerHTML = `${hour} : ${minute}`;
}, 1000);

