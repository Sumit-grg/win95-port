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

//project folder - client/personal switch tab////

const clientTab = document.getElementById('client-tab');
const personalTab = document.getElementById('personal-tab');
         ///display
const personalProj = document.getElementById("personal-pro");
const clientProj = document.getElementById("client-pro");
       ///modal-main
const modalMain = document.getElementById("modal-main");


clientTab.addEventListener("click", ()=> {
  personalProj.style.display = "none";
  clientProj.style.display = "block";
  clientTab.style.cssText = `  border-top: 2px solid black;
  border-right: 2px solid rgb(226, 223, 223);
  border-bottom: 2px solid rgb(226, 223, 223);;
  border-left: 2px solid black;background-color:rgb(228, 224, 224);`
  personalTab.style.cssText = `background-color: rgb(184, 181, 181);
  border: 2px solid rgb(79, 79, 79);`;
  modalMain.style.cssText = `border-left:2px solid black; border-bottom:2px solid black; border-right: 2px solid black`;
})

personalTab.addEventListener("click", ()=>{
  personalProj.style.display = "block";
  clientProj.style.display = "none";
  personalTab.style.cssText = `  border-top: 2px solid black;
  border-right: 2px solid rgb(226, 223, 223);
  border-bottom: 2px solid rgb(226, 223, 223);
  border-left: 2px solid black;rgb(228, 224, 224);`;
  clientTab.style.cssText = `background-color: rgb(184, 181, 181);
  border: 2px solid rgb(79, 79, 79);`;
  modalMain.style.cssText = `border-left:2px solid black; border-bottom:2px solid black; border-right: 2px solid black`;
})