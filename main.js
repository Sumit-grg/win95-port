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
///modal bottom obbject number
const objNum = document.getElementById("num-obj");


clientTab.addEventListener("click", ()=> {
  personalProj.style.display = "none";
  clientProj.style.display = "block";
  clientTab.style.cssText = `  border-top: 2px solid black;
  border-right: 2px solid rgb(226, 223, 223);
  border-bottom: 2px solid rgb(226, 223, 223);
  border-left: 2px solid black;background-color:rgb(228, 224, 224);font-weight: bolder;`;
  personalTab.style.cssText = `background-color: rgb(184, 181, 181);
  border: 2px solid rgb(79, 79, 79);`;
  modalMain.style.cssText = `border-left:2px solid black; border-bottom:2px solid black; border-right: 2px solid black`;
  objNum.innerHTML = '4 object(s)';
})

personalTab.addEventListener("click", ()=>{
  personalProj.style.display = "block";
  clientProj.style.display = "none";
  personalTab.style.cssText = `  border-top: 2px solid black;
  border-right: 2px solid rgb(226, 223, 223);
  border-bottom: 2px solid rgb(226, 223, 223);
  border-left: 2px solid black;background-color:rgb(228, 224, 224);font-weight: bolder;`;
  clientTab.style.cssText = `background-color: rgb(184, 181, 181);
  border: 2px solid rgb(79, 79, 79);font-weight: inherit`;
  modalMain.style.cssText = `border-left:2px solid black; border-bottom:2px solid black; border-right: 2px solid black`;
  objNum.innerHTML = '6 object(s)';

})

///////////media player//////////
const playBtn = document.getElementById("playbtn");
const pauseBtn = document.getElementById("pausebtn");
const stopBtn = document.getElementById("stopbtn");
const noVolBtn = document.getElementById("novolbtn");
const volBtn = document.getElementById("volbtn");

const audioTime = document.getElementById("timeAudio");

const mediaPlayer = document.getElementById("media-icon");

const neverGonna = document.getElementById("myAudio");

const audioSlider = document.getElementById("audioSlider");



const audioTimeLeft = () => {
  let x = Math.floor(neverGonna.currentTime);
  audioSlider.setAttribute("value", x);
  let y = audioSlider.value;
  (y < 10) ? y= `0${y}` : "";
  audioTime.innerHTML = `00:${y} / 01:00`;

}

const audioTimeInterval = () => {
  setInterval(()=>{
    audioTimeLeft();
  }, 1000)
}

mediaPlayer.addEventListener("click", ()=> {
  neverGonna.play();
})

playBtn.addEventListener("click", ()=>{
  audioTimeInterval();
  neverGonna.play();
})

pauseBtn.addEventListener("click", ()=>{
  neverGonna.pause();
  console.log('curr' + Math.floor(neverGonna.currentTime));
  console.log('dur' + neverGonna.duration)
})

stopBtn.addEventListener("click", ()=>{
  neverGonna.load();
  neverGonna.pause();
})

noVolBtn.addEventListener("click", ()=> {
  let x = neverGonna.volume;
  if (x > 0){
    const y = x - 0.1;
    x = y.toFixed(1);
    neverGonna.volume = x;
  }
});
volBtn.addEventListener("click", ()=> {
  let x = neverGonna.volume;
  if (x < 1){
    const z = parseFloat(x) + 0.1;
    x = z.toFixed(1);
    neverGonna.volume = x;
  }
})

const closebtnPlayer = document.getElementById("right-iconPlayer");
  
closebtnPlayer.addEventListener("click", ()=> {
  neverGonna.pause();
  neverGonna.load();
  neverGonna.pause();

})

///////////start menu list display on/of //////////

const startBtn = document.getElementById("startbtn");
const startContainer = document.getElementById("start-container");

const startClient = document.getElementsByClassName("flex-item-right-clientproj")[0];
const startPersonal = document.getElementsByClassName("flex-item-right-personalproj")[0];
const startGame = document.getElementsByClassName("flex-item-right-game")[0];

const secondStartClient = document.getElementById("right-clientproj");
const secondStartPersonal = document.getElementById("right-personalproj");
const secondStartGame = document.getElementById("right-game");


const mainScreen = document.getElementsByClassName("main-screen")[0];

startBtn.addEventListener("click", ()=>{
  startBtn.style.cssText = `  border-top: 2px solid black;
  border-right: 2px solid rgb(226, 223, 223);
  border-bottom: 2px solid rgb(226, 223, 223);
  border-left: 2px solid black;`

  startContainer.style.display = "flex";

  setTimeout(()=>{
    startBtn.style.cssText = `border-top: 2px solid white;
      border-left: 2px solid white;
      border-right: 2px solid rgb(128, 127, 127);
      border-bottom: 2px solid rgb(128, 127, 127);`},
      200)
})

startClient.addEventListener("mouseover", ()=>{
  secondStartClient.style.display = "block";
})
startClient.addEventListener("mouseout", ()=>{
  secondStartClient.style.display = "none";
})


startPersonal.addEventListener("mouseover", ()=>{
  secondStartPersonal.style.display = "block"; 
})
startPersonal.addEventListener("mouseout", ()=>{
  secondStartPersonal.style.display = "none";
})

startGame.addEventListener("mouseover", ()=>{
  secondStartGame.style.display = "block"; 
})
startGame.addEventListener("mouseout", ()=>{
  secondStartGame.style.display = "none";
})

mainScreen.addEventListener("click", ()=> {
  console.log("screen clicked main");
  startContainer.style.display = "none";
})