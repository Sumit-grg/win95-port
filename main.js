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
  audioTimeInterval();
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

    ///start items//////
const startClient = document.getElementsByClassName("flex-item-right-clientproj")[0];
const startPersonal = document.getElementsByClassName("flex-item-right-personalproj")[0];
const startGame = document.getElementsByClassName("flex-item-right-game")[0];
const startInternet= document.getElementsByClassName("flex-item-right-internet")[0];
// const startCV = document.getElementsByClassName("flex-item-right-cv")[0];
const startAbout = document.getElementsByClassName("flex-item-right-about")[0];
const startMedia = document.getElementsByClassName("flex-item-right-media")[0];
const startLogout = document.getElementsByClassName("flex-item-right-logout")[0];

const secondStartClient = document.getElementById("right-clientproj");
const secondStartPersonal = document.getElementById("right-personalproj");
const secondStartGame = document.getElementById("right-game");


const mainScreen = document.getElementsByClassName("main-screen")[0];

const audioDial = document.getElementById("myAudio-dialup");


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

const startMenuOtherOff = () => {
  secondStartPersonal.style.display = "none"; 
  secondStartClient.style.display = "none";
  secondStartGame.style.display = "none"; 
}

startClient.addEventListener("mouseover", ()=>{
  secondStartClient.style.display = "block";
  secondStartPersonal.style.display = "none"; 
  secondStartGame.style.display = "none"; 
})

startPersonal.addEventListener("mouseover", ()=>{
  secondStartPersonal.style.display = "block"; 
  secondStartClient.style.display = "none";
  secondStartGame.style.display = "none";
})

startGame.addEventListener("mouseover", ()=>{
  secondStartPersonal.style.display = "none"; 
  secondStartClient.style.display = "none";
  secondStartGame.style.display = "block"; 
})

startInternet.addEventListener("mouseover", ()=>{
  startMenuOtherOff();
})

// startCV.addEventListener("mouseover", ()=>{
//   startMenuOtherOff();
// })

startAbout.addEventListener("mouseover", ()=>{
  startMenuOtherOff();
})

startMedia.addEventListener("mouseover", ()=>{
  startMenuOtherOff();
})

startLogout.addEventListener("mouseover", ()=>{
  startMenuOtherOff();
})

          ////main screen
mainScreen.addEventListener("click", ()=> {
  startContainer.style.display = "none";
})


///////start menu second game list ////////

const startGameG1 = document.getElementsByClassName("flex-item-rightg1")[0];
const startGameG2 = document.getElementsByClassName("flex-item-rightg2")[0];
const myModalsf =document.getElementById("myModal-sf");
const myModalai =document.getElementById("myModal-ai");


const startMenuOff = () => {
  startContainer.style.display = "none";
  secondStartPersonal.style.display = "none"; 
  secondStartClient.style.display = "none";
  secondStartGame.style.display = "none"; 
}

startGameG1.addEventListener("click", ()=>{
  myModalsf.style.display = "block";
  startMenuOff();
})
startGameG2.addEventListener("click", ()=>{
  myModalai.style.display = "block";
  startMenuOff();
})

///////////start menu client/////////
const startClient1 = document.getElementsByClassName("flex-item-rightc1")[0];
const startClient2 = document.getElementsByClassName("flex-item-rightc2")[0];
const startClient3 = document.getElementsByClassName("flex-item-rightc3")[0];
const startClient4 = document.getElementsByClassName("flex-item-rightc4")[0];
const myModal =document.getElementById("myModal-project");

const clientProjTab = () => {
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
}

startClient1.addEventListener("click", ()=>{
  myModal.style.display = "block";
  startMenuOff();
  clientProjTab();
})
startClient2.addEventListener("click", ()=>{
  myModal.style.display = "block";
  startMenuOff();
  clientProjTab();
})
startClient3.addEventListener("click", ()=>{
  myModal.style.display = "block";
  startMenuOff();
  clientProjTab();
})
startClient4.addEventListener("click", ()=>{
  myModal.style.display = "block";
  startMenuOff();
  clientProjTab();
})

///////////start menu personal proj/////////
const startPersonal1 = document.getElementsByClassName("flex-item-rightp1")[0];
const startPersonal2 = document.getElementsByClassName("flex-item-rightp2")[0];
const startPersonal3 = document.getElementsByClassName("flex-item-rightp3")[0];
const startPersonal4 = document.getElementsByClassName("flex-item-rightp4")[0];
const startPersonal5 = document.getElementsByClassName("flex-item-rightp5")[0];
const startPersonal6 = document.getElementsByClassName("flex-item-rightp6")[0];

const personalProjTab = () => {
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
}

startPersonal1.addEventListener("click", ()=>{
  myModal.style.display = "block";
  startMenuOff();
  personalProjTab();
})
startPersonal2.addEventListener("click", ()=>{
  myModal.style.display = "block";
  startMenuOff();
  personalProjTab();
})
startPersonal3.addEventListener("click", ()=>{
  myModal.style.display = "block";
  startMenuOff();
  personalProjTab();
})
startPersonal4.addEventListener("click", ()=>{
  myModal.style.display = "block";
  startMenuOff();
  personalProjTab();
})
startPersonal5.addEventListener("click", ()=>{
  myModal.style.display = "block";
  startMenuOff();
  personalProjTab();
})
startPersonal6.addEventListener("click", ()=>{
  myModal.style.display = "block";
  startMenuOff();
  personalProjTab();
})



/////start internet explore/////
const startExplore = document.getElementsByClassName("flex-item-right-internet")[0];
const myModalExplore =document.getElementById("myModal-explore");

startExplore.addEventListener("click", ()=>{
  myModalExplore.style.display = "block";
  startMenuOff();
  audioDial.play();
})

///////////////start cv////
// const startMenuCV = document.getElementsByClassName("flex-item-right-cv")[0];
// const myModalcv =document.getElementById("myModal-cv");

// startMenuCV.addEventListener("click", ()=>{
//   myModalcv.style.display = "block";
//   startMenuOff();
// })

//////////start about//////////
const startMenuAbout = document.getElementsByClassName("flex-item-right-about")[0];
const myModalabout =document.getElementById("myModal-about");

startMenuAbout.addEventListener("click", ()=>{
  myModalabout.style.display = "block";
  startMenuOff();
})

///////////////start menu media///
const startMenuMedia = document.getElementsByClassName("flex-item-right-media")[0];
const myModalPlayer =document.getElementById("myModal-player");

startMenuMedia.addEventListener("click", ()=>{
  myModalPlayer.style.display = "block";
  neverGonna.play();
  startMenuOff();
  audioTimeInterval();
})

///////////////start menu logout///
const winShutAudio = new Audio("./Asset/vid/win95-shutdown.mp3");
const winStartAudio = new Audio("./Asset/vid/win95-start.mp3");
const startMenuLogout = document.getElementsByClassName("flex-item-right-logout")[0];
const blackoutScreen = document.getElementById("fixed-back");
const sfIcon = document.getElementById("sf-icon");
const bottomBar = document.getElementsByClassName("bottom-bar")[0];

startMenuLogout.addEventListener("click", ()=>{
  blackoutScreen.style.display = "flex";
  sfIcon.style.opacity = "0.1";
  bottomBar.style.display = "none";
  startMenuOff();
  winShutAudio.volume = 0.3;
  winShutAudio.play();
})

////log in after log out

const loginBtn = document.getElementById("loginbtn");

loginBtn.addEventListener("click", ()=>{
  blackoutScreen.style.display = "none";
  bottomBar.style.display = "flex";
  winStartAudio.volume = 0.6;
  winStartAudio.play();
  sfIcon.style.opacity = "1";
})


//////bootup windows///////

const boot1 = document.getElementById("boot1");
const boot2 = document.getElementById("boot2");
const boot3 = document.getElementById("boot3");
const boot4 = document.getElementById("boot4");
const boot5 = document.getElementById("boot5");

const bootContainer = document.getElementById("boot-container");
const bootmiddle = document.getElementById("bootmiddle");
const bootBtn = document.getElementById("bootbtn");
const winsBootLogo = document.getElementById("winsboot");
const mainContainer = document.getElementsByClassName("main-container")[0];

setInterval(()=>{
  boot1.style.display = "block";
}, 100);
setInterval(()=>{
  boot2.style.display = "block";
}, 500);
setInterval(()=>{
  boot3.style.display = "block";
}, 900);
setInterval(()=>{
  boot4.style.display = "block";
}, 1300);
setInterval(()=>{
  boot5.style.display = "block";
}, 1700);

setInterval(()=>{
  bootmiddle.style.display = "block";
}, 2100);

bootBtn.addEventListener('click', ()=>{
  bootContainer.style.display = "none";
  winsBootLogo.style.display = "block";
  setTimeout(()=>{
    winStartAudio.volume = 0.6;
    winStartAudio.play();
    winsBootLogo.style.display = "none";
    mainContainer.style.display = "block";
  },2300)
})


const date = new Date;
const fullDate = document.getElementById("date");
fullDate.innerHTML = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

