// --------My Project Folder----------//////
  //Modal open and close
  const projectFolder = document.getElementById("folder-icon");
  const myModal =document.getElementById("myModal-project");

  projectFolder.addEventListener("click", ()=>{
    myModal.style.display = "block";
  })

  const closebtn = document.getElementById("right-icon");

  closebtn.addEventListener("click", ()=> {
    myModal.style.display = "none";
  })


  //Make the DIV element draggagle:
  dragElementProj(document.getElementById("myModal-project"));

  function dragElementProj(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "Con")) {
      /* if present, the header is where you move the DIV from:*/
      document.getElementById(elmnt.id + "Con").onmousedown = dragMouseDown;
    } else {
      /* otherwise, move the DIV from anywhere inside the DIV:*/
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElementProj;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElementProj() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }


  ////////////modal recycle bin////////////

//Modal open and close
const recycleBin = document.getElementById("bin-icon");
const myModalrecycle =document.getElementById("myModal-recycle");

recycleBin.addEventListener("click", ()=>{
  myModalrecycle.style.display = "block";
})

const closebtnRec = document.getElementById("right-iconRec");

closebtnRec.addEventListener("click", ()=> {
  myModalrecycle.style.display = "none";
})


  //Make the DIV element draggagle:
  dragElementRec(document.getElementById("myModal-recycle"));
  
  function dragElementRec(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "Con")) {
      /* if present, the header is where you move the DIV from:*/
      document.getElementById(elmnt.id + "Con").onmousedown = dragMouseDown;
    } else {
      /* otherwise, move the DIV from anywhere inside the DIV:*/
      elmnt.onmousedown = dragMouseDown;
    }
    

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElementRec;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElementRec() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }


  ///////////////////modal CV//////////////
  //Modal open and close
// const cv = document.getElementById("cv-icon");
// const myModalcv =document.getElementById("myModal-cv");

// cv.addEventListener("click", ()=>{
//   myModalcv.style.display = "block";
// })

// const closebtnCV = document.getElementById("right-iconCV");

// closebtnCV.addEventListener("click", ()=> {
//   myModalcv.style.display = "none";
// })


  //Make the DIV element draggagle:
  dragElementCV(document.getElementById("myModal-cv"));

  function dragElementCV(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "Con")) {
      /* if present, the header is where you move the DIV from:*/
      document.getElementById(elmnt.id + "Con").onmousedown = dragMouseDown;
    } else {
      /* otherwise, move the DIV from anywhere inside the DIV:*/
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElementCV;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElementCV() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }

  //////////modal medai player///////////

    //Modal open and close
    const mediaPlayer = document.getElementById("media-icon");
    const myModalPlayer =document.getElementById("myModal-player");
  
    mediaPlayer.addEventListener("click", ()=>{
      myModalPlayer.style.display = "block";
    })
  
    const closebtnPlayer = document.getElementById("right-iconPlayer");
  
    closebtnPlayer.addEventListener("click", ()=> {
      myModalPlayer.style.display = "none";
    })
  
  
    //Make the DIV element draggagle:
    dragElementPlayer(document.getElementById("myModal-player"));
  
    function dragElementPlayer(elmnt) {
      var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      if (document.getElementById(elmnt.id + "Con")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(elmnt.id + "Con").onmousedown = dragMouseDown;
      } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
      }
  
      function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElementPlayer;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
      }
  
      function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
      }
  
      function closeDragElementPlayer() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
      }
    }
  

      //////////modal internet explore///////////

    //Modal open and close
    const explore = document.getElementById("explore-icon");
    const myModalExplore =document.getElementById("myModal-explore");
  

    const audioDial = document.getElementById("myAudio-dialup");

    explore.addEventListener("click", ()=>{
      myModalExplore.style.display = "block";
      audioDial.play();
    })
  
    const closebtnExplore = document.getElementById("right-iconExplore");
  
    closebtnExplore.addEventListener("click", ()=> {
      myModalExplore.style.display = "none";
      audioDial.load();
    })
  
  
    //Make the DIV element draggagle:
    dragElementExplore(document.getElementById("myModal-explore"));
  
    function dragElementExplore(elmnt) {
      var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      if (document.getElementById(elmnt.id + "Con")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(elmnt.id + "Con").onmousedown = dragMouseDown;
      } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
      }
  
      function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElementPlayer;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
      }
  
      function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
      }
  
      function closeDragElementPlayer() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
      }
    }
  
    ///////////////////my computer modal/////////////
  //Modal open and close
const pc = document.getElementById("mypc-icon");
const myModalpc =document.getElementById("myModal-pc");

pc.addEventListener("click", ()=>{
  myModalpc.style.display = "block";
})

const closebtnPC = document.getElementById("right-iconPC");

closebtnPC.addEventListener("click", ()=> {
  myModalpc.style.display = "none";
})


  //Make the DIV element draggagle:
  dragElementPC(document.getElementById("myModal-pc"));

  function dragElementPC(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "Con")) {
      /* if present, the header is where you move the DIV from:*/
      document.getElementById(elmnt.id + "Con").onmousedown = dragMouseDown;
    } else {
      /* otherwise, move the DIV from anywhere inside the DIV:*/
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElementPC;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElementPC() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }



  //////////modal street fighter ////////////

  
    //Modal open and close
const sfIcon = document.getElementById("sf-icon");
const myModalsf = document.getElementById("myModal-sf");
const sfIframe = document.getElementById("myFrameSF");

sfIcon.addEventListener("click", ()=>{
  myModalsf.style.display = "block";
})

const closebtnSF = document.getElementById("right-iconSF");

closebtnSF.addEventListener("click", ()=> {
  myModalsf.style.display = "none";
  sfIframe.setAttribute("src", " ");
})


const startGameG1 = document.getElementsByClassName("flex-item-rightg1")[0];
startGameG1.addEventListener("click", ()=>{
  myModalsf.style.display = "block";
})

  //Make the DIV element draggagle:
  dragElementSF(document.getElementById("myModal-sf"));

  function dragElementSF(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "Con")) {
      /* if present, the header is where you move the DIV from:*/
      document.getElementById(elmnt.id + "Con").onmousedown = dragMouseDown;
    } else {
      /* otherwise, move the DIV from anywhere inside the DIV:*/
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElementSF;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElementSF() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }


  //////////Alien invasion modal.////////////

    
    //Modal open and close
const aiIcon = document.getElementById("alien-icon");
const myModalai =document.getElementById("myModal-ai");
const aiIframe = document.getElementById("myFrameAI");

aiIcon.addEventListener("click", ()=>{
  myModalai.style.display = "block";
})

const closebtnAI = document.getElementById("right-iconAI");

closebtnAI.addEventListener("click", ()=> {
  myModalai.style.display = "none";
  aiIframe.setAttribute("src", "");
})


const startGameG2 = document.getElementsByClassName("flex-item-rightg2")[0];
startGameG2.addEventListener("click", ()=>{
  myModalai.style.display = "block";
})

  //Make the DIV element draggagle:
  dragElementAI(document.getElementById("myModal-ai"));

  function dragElementAI(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "Con")) {
      /* if present, the header is where you move the DIV from:*/
      document.getElementById(elmnt.id + "Con").onmousedown = dragMouseDown;
    } else {
      /* otherwise, move the DIV from anywhere inside the DIV:*/
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElementAI;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElementAI() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }

      //////////modal about me///////////

    //Modal open and close
    const about = document.getElementById("about-icon");
    const myModalAbout = document.getElementById("myModal-about");
  

    about.addEventListener("click", ()=>{
      myModalAbout.style.display = "block";
    })
  
    const closebtnabout = document.getElementById("right-iconAbout");
  
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    
    email.addEventListener("click",()=>{
      email.innerHTML = "Sumit_grg7@yahoo.co.uk";
    })
    
    phone.addEventListener("click",()=>{
      phone.innerHTML = "07882773360";
    })
    
    closebtnabout.addEventListener("click", ()=> {
      myModalAbout.style.display = "none";
      email.innerHTML = `<i class="fas fa-envelope fa-1x"></i>Email`;
      phone.innerHTML = `<i class="fas fa-phone-square-alt fa-1x"></i>Phone`;
    })
    
    
    //Make the DIV element draggagle:
    dragElementabout(document.getElementById("myModal-about"));
    
    function dragElementabout(elmnt) {
      var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      if (document.getElementById(elmnt.id + "Con")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(elmnt.id + "Con").onmousedown = dragMouseDown;
      } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
      }
      
      function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElementPlayer;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
      }
      
      function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
      }
      
      function closeDragElementPlayer() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
      }
    }
    