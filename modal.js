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
const cv = document.getElementById("cv-icon");
const myModalcv =document.getElementById("myModal-cv");

cv.addEventListener("click", ()=>{
  myModalcv.style.display = "block";
})

const closebtnCV = document.getElementById("right-iconCV");

closebtnCV.addEventListener("click", ()=> {
  myModalcv.style.display = "none";
})


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
  