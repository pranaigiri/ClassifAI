//---GLOBAL VARIABLES



/*  MENU FUNCTIONAL CODE  */

/*  Menu Active / Inactive Toggle  */

/* Section Selectors */
const sectionHome = document.querySelector("#container");
const sectionSave = document.querySelector("#savedSection");
const sectionModels = document.querySelector("#modelsSection");
const sectionEapps = document.querySelector("#eappsSection");
const sectionCamera = document.querySelector("#cameraSection");


/* Menu Button Selectors */
const homeBtn = document.querySelector("#home");
const saveBtn = document.querySelector("#saved");
const modelsBtn = document.querySelector("#models");
const eappsBtn = document.querySelector("#eapps");

/*Home Button Click*/
homeBtn.addEventListener('click',()=>{
    document.querySelector(".mlist").querySelector("li.active").classList.remove("active");
    menu.classList.toggle("open");
    homeBtn.classList.add("active");
    closeBG();
    sectionHome.style.display = "none";
    sectionHome.classList.remove("stopped");
    sectionHome.classList.add("running");
    burger.classList.toggle("active");
    burger.classList.toggle("rotateB"); 
    setTimeout(() => {
        sectionHome.style.opacity = "0";
        sectionHome.style.display = "";
        sectionHome.classList.add("sectionEntry");
        setTimeout(() => {
            sectionHome.style.opacity = "1";
            sectionHome.classList.remove("sectionEntry");
        }, 500);
    }, 500);
});
document.querySelector(".homeTab").addEventListener('click',()=>{
    document.querySelector(".mlist").querySelector("li.active").classList.remove("active");
    document.querySelector(".tabs").style.pointerEvents = "none";
    document.querySelector(".tabactive").classList.remove("tabactive");
    document.querySelector(".homeTab").classList.add("tabactive");

    homeBtn.classList.add("active");
    closeBG();
    sectionHome.style.display = "none";
    sectionHome.classList.remove("stopped");
    sectionHome.classList.add("running");
    burger.classList.toggle("active");
    burger.classList.toggle("rotateB"); 
    setTimeout(() => {
        sectionHome.style.opacity = "0";
        sectionHome.style.display = "";
        sectionHome.classList.add("sectionEntry");
        setTimeout(() => {
            sectionHome.style.opacity = "1";
            sectionHome.classList.remove("sectionEntry");
            document.querySelector(".tabs").style.pointerEvents = "visible";
        }, 500);
    }, 500);

});


/*Save Button Click*/
saveBtn.addEventListener('click',()=>{
    document.querySelector(".mlist").querySelector("li.active").classList.remove("active");
    menu.classList.toggle("open");
    saveBtn.classList.add("active");
    closeBG();   
    sectionSave.style.display = "none";
    sectionSave.classList.remove("stopped");
    sectionSave.classList.add("running");
    burger.classList.toggle("active");
    burger.classList.toggle("rotateB"); 
    setTimeout(() => {
        sectionSave.style.opacity = "0";
        sectionSave.style.display = "";
        sectionSave.classList.add("sectionEntry");
        setTimeout(() => {
            sectionSave.style.opacity = "1";
            sectionSave.classList.remove("sectionEntry");
        }, 500);
    }, 500);
});
document.querySelector(".savedTab").addEventListener('click',()=>{
    document.querySelector(".mlist").querySelector("li.active").classList.remove("active");
    document.querySelector(".tabs").style.pointerEvents = "none";
    document.querySelector(".tabactive").classList.remove("tabactive");
    document.querySelector(".savedTab").classList.add("tabactive");
    saveBtn.classList.add("active");
    closeBG();   
    sectionSave.style.display = "none";
    sectionSave.classList.remove("stopped");
    sectionSave.classList.add("running");
    burger.classList.toggle("active");
    burger.classList.toggle("rotateB"); 
    setTimeout(() => {
        sectionSave.style.opacity = "0";
        sectionSave.style.display = "";
        sectionSave.classList.add("sectionEntry");
        setTimeout(() => {
            sectionSave.style.opacity = "1";
            sectionSave.classList.remove("sectionEntry");
            document.querySelector(".tabs").style.pointerEvents = "visible";
        }, 500);
    }, 500);
});
/*Models Button Click*/
modelsBtn.addEventListener('click',()=>{
    document.querySelector(".mlist").querySelector("li.active").classList.remove("active");
    menu.classList.toggle("open");
    modelsBtn.classList.add("active");
    closeBG();   
    sectionModels.style.display = "none";
    sectionModels.classList.remove("stopped");
    sectionModels.classList.add("running");
    burger.classList.toggle("active");
    burger.classList.toggle("rotateB"); 
    setTimeout(() => {
        sectionModels.style.opacity = "0";
        sectionModels.style.display = "";
        sectionModels.classList.add("sectionEntry");
        setTimeout(() => {
            sectionModels.style.opacity = "1";
            sectionModels.classList.remove("sectionEntry");
        }, 500);
    }, 500);
});
document.querySelector(".modelTab").addEventListener('click',()=>{
    document.querySelector(".mlist").querySelector("li.active").classList.remove("active");
    document.querySelector(".tabs").style.pointerEvents = "none";
    document.querySelector(".tabactive").classList.remove("tabactive");
    document.querySelector(".modelTab").classList.add("tabactive");
    modelsBtn.classList.add("active");
    closeBG();   
    sectionModels.style.display = "none";
    sectionModels.classList.remove("stopped");
    sectionModels.classList.add("running");
    burger.classList.toggle("active");
    burger.classList.toggle("rotateB"); 
    setTimeout(() => {
        sectionModels.style.opacity = "0";
        sectionModels.style.display = "";
        sectionModels.classList.add("sectionEntry");
        setTimeout(() => {
            sectionModels.style.opacity = "1";
            sectionModels.classList.remove("sectionEntry");
            document.querySelector(".tabs").style.pointerEvents = "visible";
        }, 500);
    }, 500);
});

/*Explore Apps Button Click*/
eappsBtn.addEventListener('click',()=>{
    document.querySelector(".mlist").querySelector("li.active").classList.remove("active");
    menu.classList.toggle("open");
    eappsBtn.classList.add("active");
    closeBG();   
    sectionEapps.style.display = "none";
    sectionEapps.classList.remove("stopped");
    sectionEapps.classList.add("running");
    burger.classList.toggle("active");
    burger.classList.toggle("rotateB"); 
    setTimeout(() => {
        sectionEapps.style.opacity = "0";
        sectionEapps.style.display = "";
        sectionEapps.classList.add("sectionEntry");
        setTimeout(() => {
            sectionEapps.style.opacity = "1";
            sectionEapps.classList.remove("sectionEntry");
        }, 500);
    }, 500);
});
document.querySelector(".exploreTab").addEventListener('click',()=>{
    document.querySelector(".mlist").querySelector("li.active").classList.remove("active");
    document.querySelector(".tabs").style.pointerEvents = "none";
    document.querySelector(".tabactive").classList.remove("tabactive");
    document.querySelector(".exploreTab").classList.add("tabactive");
    eappsBtn.classList.add("active");
    closeBG();   
    sectionEapps.style.display = "none";
    sectionEapps.classList.remove("stopped");
    sectionEapps.classList.add("running");
    burger.classList.toggle("active");
    burger.classList.toggle("rotateB"); 
    setTimeout(() => {
        sectionEapps.style.opacity = "0";
        sectionEapps.style.display = "";
        sectionEapps.classList.add("sectionEntry");
        setTimeout(() => {
            sectionEapps.style.opacity = "1";
            sectionEapps.classList.remove("sectionEntry");
            document.querySelector(".tabs").style.pointerEvents = "visible";
        }, 500);
    }, 500);
});

function closeBG(){


    let runningS = document.querySelector(".running");

    if(runningS){
        runningS.classList.add("sectionExit");
        setTimeout(() => {
            runningS.classList.remove("running");
            runningS.classList.add("stopped");
            runningS.classList.remove("sectionExit");
        }, 500);
    }else{
        console.log("Error");
    }



    const stream = document.querySelector('#player').srcObject;
    //console.log("Stream : "+stream);

    if(stream){

        document.querySelector(".screen").style.opacity = "0";
        document.querySelector(".screen").style.transform = "translateX(-50%) scale(0)";
        setTimeout(() => {
            document.querySelector(".screen").style.display = "none";
            document.querySelector(".selected-model-viewer").style.display = "none";
            const tracks = stream.getTracks();
            tracks.forEach(function(track) {
              track.stop();
            });
            delete(tracks);
            delete(stream);
            document.querySelector('#player').srcObject = null;
        }, 1000);
    }

}


//------------LOADER ICON TOGGLE
let loaderRunning = false;
function toggleLoaderIcon(){

    if(loaderRunning == false){
        document.getElementById('load').style.visibility="visible";
        setTimeout(() => {
            document.getElementById('load').style.opacity="1";
            loaderRunning = true;
        }, 500);
    }else{
        document.getElementById('load').style.opacity="0";
        setTimeout(() => {
            document.getElementById('load').style.visibility="hidden";
            loaderRunning = false;
        }, 1000);
    }

 }

//------------LAUNCH CAMERA
const camBtn = document.querySelector(".capture-list");

camBtn.addEventListener("click",()=>{
    toggleLoaderIcon();
    closeBG();   
    hideNavToggle();
    document.querySelector(".tabs").style.bottom = "-10rem";
    sectionCamera.style.display = "none";
    sectionCamera.classList.remove("stopped");
    sectionCamera.classList.add("running");

    setTimeout(() => {
        sectionCamera.style.opacity = "0";
        sectionCamera.style.display = "";
        sectionCamera.classList.add("sectionEntry");
        setTimeout(() => {
            sectionCamera.style.opacity = "1";
            sectionCamera.classList.remove("sectionEntry");

            startCamera();
    
        }, 500);

    }, 500);    
    
});
document.querySelector(".cameraTab").addEventListener("click",()=>{
    toggleLoaderIcon();
    closeBG();   
    hideNavToggle();
    document.querySelector(".tabs").style.bottom = "-10rem";
    sectionCamera.style.display = "none";
    sectionCamera.classList.remove("stopped");
    sectionCamera.classList.add("running");

    setTimeout(() => {
        sectionCamera.style.opacity = "0";
        sectionCamera.style.display = "";
        sectionCamera.classList.add("sectionEntry");
        setTimeout(() => {
            sectionCamera.style.opacity = "1";
            sectionCamera.classList.remove("sectionEntry");

            startCamera();
    
        }, 500);

    }, 500);    
    
});

//------------ NAVBAR TOGGLE
let navShown = true;
function hideNavToggle(){
    const navbar = document.querySelector("#headerID");
    if(navShown == true){
        navbar.style.transform = "translateY(-100%)";
        setTimeout(() => {
            navbar.style.display = "none";
        }, 1000);
        navShown = false;
    }else{
        navbar.style.display = "grid";
        setTimeout(() => {
            navbar.style.transform = "translateY(0%)";
        }, 500);
        navShown = true;
    }
}

//------------CAMERA START
function startCamera(){
    // Older browsers might not implement mediaDevices at all, so we set an empty object first
if (navigator.mediaDevices === undefined) {
    navigator.mediaDevices = {};
  }
  
  // Some browsers partially implement mediaDevices. We can't just assign an object
  // with getUserMedia as it would overwrite existing properties.
  // Here, we will just add the getUserMedia property if it's missing.
  if (navigator.mediaDevices.getUserMedia === undefined) {
    navigator.mediaDevices.getUserMedia = function(constraints) {
  
      // First get ahold of the legacy getUserMedia, if present
      var getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
  
      // Some browsers just don't implement it - return a rejected promise with an error
      // to keep a consistent interface
      if (!getUserMedia) {
        return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
      }
  
      // Otherwise, wrap the call to the old navigator.getUserMedia with a Promise
      return new Promise(function(resolve, reject) {
        getUserMedia.call(navigator, constraints, resolve, reject);
      });
    }
  }
  

  navigator.mediaDevices.getUserMedia({ 
      audio: false, 
      video: {
          facingMode: "environment",
          width: { min: 1024, ideal: 1280, max: 1920 },
          height: { min: 576, ideal: 720, max: 1080 }
      }
    })
  .then(function(stream) {

    const video = document.querySelector('#player');

    // Older browsers may not have srcObject
    if ("srcObject" in video) {
      video.srcObject = stream;
      //console.log(stream.getVideoTracks()[0].getSettings()['facingMode']);

    } else {
      // Avoid using this in new browsers, as it is going away.
      video.src = window.URL.createObjectURL(stream);
    }


    if(stream.getVideoTracks()[0].getSettings()['facingMode'] == "environment"){
        document.querySelector("#player").style.transform = "translateX(-50%) rotateY(0deg)";
    }
    if(stream.getVideoTracks()[0].getSettings()['facingMode'] == "user"){
        document.querySelector("#player").style.transform = "translateX(-50%) rotateY(180deg)";
    }

    video.style.display = "block";
    setTimeout(() => {
        document.querySelector(".screen").style.opacity = "1";
        document.querySelector(".screen").style.transform = "translateX(-50%)";
        document.querySelector(".screen").style.display = "block";
        document.querySelector(".selected-model-viewer").style.display = "grid";
        showControls();
        toggleLoaderIcon();
        video.style.opacity = "1";
    }, 500);
    
    video.onloadedmetadata = function(e) {
      video.play();
    }

  });
}



        //------------ CAMERA FLIP CODE
        const flipBtn = document.querySelector("#switch");
        let fmode = "environment";
        flipBtn.addEventListener("click", ()=>{

            var video = document.querySelector("#player");
            var stream = video.srcObject;
            var tracks = stream.getVideoTracks()[0];




            async function switchCamera(facingMode){

                const options = {
                    audio: false,
                    video: {
                        facingMode,
                        width: { min: 1024, ideal: 1280, max: 1920 },
                        height: { min: 576, ideal: 720, max: 1080 }
                    },
                }

                try {
                    if(stream){
                        tracks.stop();
                    }
                    stream = await navigator.mediaDevices.getUserMedia(options);
                } catch (error) {
                    
                }
                
                video.srcObject = null;
                video.srcObject = stream;
                video.play();

                if(stream.getVideoTracks()[0].getSettings()['facingMode'] == "environment"){
                    document.querySelector("#player").style.transform = "translateX(-50%) rotateY(0deg)";
                }
                if(stream.getVideoTracks()[0].getSettings()['facingMode'] == "user"){
                    document.querySelector("#player").style.transform = "translateX(-50%) rotateY(180deg)";
                }

            }

            if(fmode == "environment"){
                switchCamera("user");
                fmode = "user";
            }else if(fmode == "user"){
                switchCamera("environment");
                fmode = "environment";
            }else{
                console.log("error here");
                return
            }

            
            
            //console.log(tracks.getConstraints());
            //console.log(tracks.getSettings());



        });
        //------------ END OF CAMERA FLIP CODE

//------------ CONTROLS SHOW
const backBtn = document.getElementsByClassName("back-btn")[0];
const feedbackCont = document.getElementsByClassName("feedback")[0];
const bottomControls = document.getElementById("bottom-controls-id");

function showControls(){
    bottomControls.style.display = "block";
    feedbackCont.style.display = "grid";
    feedbackCont.style.opacity = 1;
    backBtn.style.display="block";
    backBtn.style.opacity = 1;
}
//------------ CONTROLS hide
function hideControls(){
    bottomControls.style.display = "none";
    feedbackCont.style.display = "none";
    feedbackCont.style.opacity = 0;
    backBtn.style.display="none";
    backBtn.style.opacity = 0;
}


//------------ CAMERA BACK BUTTON
backBtn.addEventListener("click",()=>{
    if(confirm("Do you really want to exit?") == true){
        document.querySelector(".bottom-controls").style.transform = "translate(-50%, -50%) scale(0)";
        toggleLoaderIcon();
        closeBG();
        setTimeout(() => {
            location.reload("true");
        }, 500);
    }
    
    
    /*
    if(confirm("Do you really want to exit?") == true){
        closeBG();
        setTimeout(() => {
            stopCameraStream();
            document.getElementById("flash-id").src = "./icons/flash-on.png";
            torchRunning = false;
            document.querySelector('#player').style.opacity = "0";
            setTimeout(() => {
                document.querySelector('#player').style.display = "none";
                hideControls();
                //window.location.reload(true);
            }, 500);


        }, 1000);
        openHome();
        hideNavToggle();
    }
    */
});

//------------ STOP CAMERA STREAM
function stopCameraStream(){
    const stream = document.querySelector('#player').srcObject;


    if(stream){
        console.log(stream);
        const tracks = stream.getTracks();
      
        tracks.forEach(function(track) {
          track.stop();
        });
        delete(tracks);
        delete(stream);
        document.querySelector('#player').srcObject = null;
    }else{
        return;
    }


}


//------------ OPEN HOME CODE
function openHome(){
    document.querySelector(".mlist").querySelector("li.active").classList.remove("active");
    homeBtn.classList.add("active");
    sectionHome.style.display = "none";
    sectionHome.classList.remove("stopped");
    sectionHome.classList.add("running");

    setTimeout(() => {
        sectionHome.style.opacity = "0";
        sectionHome.style.display = "";
        sectionHome.classList.add("sectionEntry");
        setTimeout(() => {
            sectionHome.style.opacity = "1";
            sectionHome.classList.remove("sectionEntry");
        }, 500);
    }, 500);
}



//-------TORCH TOGGLE CODE
let torchRunning = false;
const torchBtn = document.querySelector("#flash-id");
torchBtn.addEventListener("click", ()=>{
    const stream = document.querySelector("#player").srcObject;
    const track = stream.getVideoTracks()[0];
    //console.log(track);

    const imageCapture = new ImageCapture(track)
    const photoCapabilities = imageCapture.getPhotoCapabilities().then(() => {
        
        if(torchRunning == false){
            track.applyConstraints({
            advanced: [{torch: true}]
            });
            document.getElementById("flash-id").src = "./icons/flash-off.png";
            torchRunning = true;
        }else{
            track.applyConstraints({
            advanced: [{torch: false}]
            });
            document.getElementById("flash-id").src = "./icons/flash-on.png";
            torchRunning = false;
        }


    
        
    });


});
//-------END OF TORCH TOGGLE CODE



//-------------- EXPOSURE CHECK ----------------

const canvas = document.querySelector("#myCanvas");
const ctx = canvas.getContext("2d");
let videofeed = document.getElementById("player");

videofeed.addEventListener("play", ()=>{
    function step() {
        ctx.drawImage(videofeed, 0, 0, canvas.width, canvas.height)
        requestAnimationFrame(step)
        checkFrame();
    }
        requestAnimationFrame(step);        

})



    function checkFrame(){

        //console.log("checking...");
        
        var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        var i , avg = 0;
        
        for (i = 0; i < imgData.data.length; i += 4) {
            avg += (imgData.data[i] + imgData.data[i+1] + imgData.data[i+2])/3;
        }

        
        if(avg <=0 || avg == Infinity){
            avg = 0;
        }else if(avg < imgData.data.length){
            avg = imgData.data.length/avg;
        }else{
            avg = avg/imgData.data.length;
        }

        //console.log(avg);


        const info = document.querySelector(".info");
        const dot = document.querySelector(".dot");
        

        document.querySelector(".avgCount").innerHTML = parseInt(avg);

        if(avg == 0){
            //-----EMPTY
            //console.log("No media is detected");
            dot.style.background = "#ff5200";
        }else if(avg >= 1 && avg <= 10){
            //-----UNDER EXPOSE
            document.getElementsByClassName("capture-btn")[0].classList.add("disable");
            document.querySelector("#capture-bg-border").style.border = "2px solid #f45833";
            dot.style.background = "#ff5200";

        }else if(avg >= 11 && avg <= 35){
            //-----NORMAL
            document.getElementsByClassName("capture-btn")[0].classList.remove("disable");
            document.querySelector("#capture-bg-border").style.border = "2px solid lightblue";
            dot.style.background = "#30ff30";

        }else{
            //-----OVER EXPOSE
            document.getElementsByClassName("capture-btn")[0].classList.add("disable");
            document.querySelector("#capture-bg-border").style.border = "2px solid #f45833";
            dot.style.background = "#ff5200";
        }

    }
//-------- EXPOSURE CHECK END--------




//-------------CAPTURE BUTTON CLICK
const captureBtn = document.querySelector(".capture-btn");
const svgCircle = document.querySelector("#svg-btn-id");
const picture = document.querySelector("#screenshotID");



captureBtn.addEventListener("mousedown",()=>{
    captureBtn.classList.add("mousedown");
    setTimeout(() => {
        document.querySelector("#cameraSection").style.pointerEvents = "none";
        document.querySelector("#cameraSection").style.filter = "blur(3px) grayscale(.5) brightness(.8)";
        document.querySelector(".captureAnalysing").style.display = "block";
        setTimeout(() => {
            document.querySelector(".captureAnalysing").style.transform = "translate(-50%,-50%)";
        }, 100);
    }, 100);
    setTimeout(() => {
        capturePredict();
    }, 2000);
});

captureBtn.addEventListener("mouseleave",()=>{
    captureBtn.classList.remove("mousedown");
});

captureBtn.addEventListener("mouseup",()=>{
    captureBtn.classList.remove("mousedown");
    svgCircle.classList.add("mouseup");
    setTimeout(() => {
        svgCircle.classList.remove("mouseup");
    }, 2000);
});

captureBtn.addEventListener("touchstart",()=>{
    captureBtn.classList.add("mousedown");
});

captureBtn.addEventListener("touchend",()=>{
    captureBtn.classList.remove("mousedown");
});


//------------- MODEL LIST SELECT TOGGLE
let toggleBtns = document.querySelectorAll(".switchBG");
let LSmodel;
activateModel();

function activateModel(){

    if(!localStorage.getItem("model")){
        localStorage.setItem("model", "Herbal_Plants");
    }

    LSmodel = localStorage.getItem("model");
    document.querySelector(".smv-title").innerHTML = LSmodel;
    document.querySelector(".modelInfo").innerHTML = LSmodel;
    updateToggleBtns();

}

function updateToggleBtns(){
    
    for(i = 0; i < toggleBtns.length; i++){
        toggleBtns[i].classList.remove("activated");
    }

    document.querySelector("#"+LSmodel).classList.add("activated");
    document.querySelector("#"+LSmodel+"Label").classList.add("selected");

    if(localStorage.getItem("model") == "Herbal_Plants"){
        document.querySelector(".modelInfo").style.background = "#70b164";
    }else if(localStorage.getItem("model") == "Fruits_Nutrition"){
        document.querySelector(".modelInfo").style.background = "#d35a75";
    }

}

toggleBtns.forEach(function(item) {
    item.addEventListener('click', function() {

        if(model){
            refreshModel(this.id);
        }
      
        //console.log(model.getClassLabels());

        localStorage.setItem("model", item.id);
        LSmodel = localStorage.getItem("model");
        updateToggleBtns();


        let selectedElems = document.querySelectorAll(".selected");
        for(i = 0 ; i < selectedElems.length; i++){
            selectedElems[i].classList.remove("selected");
        }

        document.querySelector(".smv-title").innerHTML = LSmodel;
        document.querySelector(".modelInfo").innerHTML = LSmodel;
        document.querySelector("#"+LSmodel+"Label").classList.add("selected");


    });
});


//------------- IN CAMERA MODEL CHANGER
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function showOptions() {
    document.getElementsByClassName("smv-model-lists")[0].classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.smv-options-img')) {
      var dropdowns = document.getElementsByClassName("smv-model-lists");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  // Activate model on click
  function updateModel(elem){
    


    refreshModel(elem.innerHTML);

    if(document.getElementsByClassName("selected")){
        for(i = 0; i < document.getElementsByClassName("selected").length; i++){
            document.getElementsByClassName("selected")[i].classList.remove("selected");
        }
    }

    elem.classList.add("selected");
    document.querySelector(".smv-title").innerHTML = elem.innerHTML;
    document.querySelector(".modelInfo").innerHTML = LSmodel;
    localStorage.setItem("model", elem.innerHTML);
  }


/*PLANT PREDICTION RESULT BUTTON CLICKS*/
var detailBtnshp = document.querySelectorAll(".detailBtn.hp");
var detailContshp = document.querySelectorAll(".photoDescription.hp");

detailBtnshp.forEach(function(itemA) {
    itemA.addEventListener('click', function() {
        for(i=0;i<detailBtnshp.length;i++){
            detailBtnshp[i].classList.remove("active");
        }
        this.classList.add("active");        
    });
});

detailBtnshp[0].addEventListener("click",()=>{

    for(i=0;i<detailContshp.length;i++){
        detailContshp[i].classList.remove("active");
    }

    detailContshp[0].classList.add("active");
});
detailBtnshp[1].addEventListener("click",()=>{

    for(i=0;i<detailContshp.length;i++){
        detailContshp[i].classList.remove("active");
    }
    detailContshp[1].classList.add("active");
});
detailBtnshp[2].addEventListener("click",()=>{

    for(i=0;i<detailContshp.length;i++){
        detailContshp[i].classList.remove("active");
    }
    detailContshp[2].classList.add("active");
});

/*FRUITS PREDICTION RESULT BUTTON CLICKS*/
var detailBtnsfn = document.querySelectorAll(".detailBtn.fn");
var detailContsfn = document.querySelectorAll(".photoDescription.fn");

detailBtnsfn.forEach(function(itemA) {
    itemA.addEventListener('click', function() {
        for(i=0;i<detailBtnsfn.length;i++){
            detailBtnsfn[i].classList.remove("active");
        }
        this.classList.add("active");        
    });
});

detailBtnsfn[0].addEventListener("click",()=>{

    for(i=0;i<detailContsfn.length;i++){
        detailContsfn[i].classList.remove("active");
    }

    detailContsfn[0].classList.add("active");
});
detailBtnsfn[1].addEventListener("click",()=>{

    for(i=0;i<detailContsfn.length;i++){
        detailContsfn[i].classList.remove("active");
    }
    detailContsfn[1].classList.add("active");
});
detailBtnsfn[2].addEventListener("click",()=>{

    for(i=0;i<detailContsfn.length;i++){
        detailContsfn[i].classList.remove("active");
    }
    detailContsfn[2].classList.add("active");
});


/*FRUITS PREDICTION RESULT BUTTON CLICKS*/
var detailBtnsps = document.querySelectorAll(".detailBtn.ps");
var detailContsps = document.querySelectorAll(".photoDescription.ps");

detailBtnsps.forEach(function(itemA) {
    itemA.addEventListener('click', function() {
        for(i=0;i<detailBtnsps.length;i++){
            detailBtnsps[i].classList.remove("active");
        }
        this.classList.add("active");        
    });
});

detailBtnsps[0].addEventListener("click",()=>{

    for(i=0;i<detailContsps.length;i++){
        detailContsps[i].classList.remove("active");
    }

    detailContsps[0].classList.add("active");
});
detailBtnsps[1].addEventListener("click",()=>{

    for(i=0;i<detailContsps.length;i++){
        detailContsps[i].classList.remove("active");
    }
    detailContsps[1].classList.add("active");
});
detailBtnsps[2].addEventListener("click",()=>{

    for(i=0;i<detailContsps.length;i++){
        detailContsps[i].classList.remove("active");
    }
    detailContsps[2].classList.add("active");
});



/* SAVED SECTION */
const savedNumberElem = document.querySelector(".savedNumber");
function refreshSavedNumber(){
    if(!localStorage.getItem("savedItems")){
        savedNumberElem.innerHTML = "0";
        let savedContents = document.querySelector(".savedContents");
        savedContents.innerHTML = "";
    }else{
        savedNumberElem.innerHTML = JSON.parse("["+localStorage.getItem("savedItems")+"]").length;
        updateSavedItems();
    }
}refreshSavedNumber();


function updateSavedItems(){
    let savedItems = JSON.parse("["+localStorage.getItem("savedItems")+"]");
    let savedContents = document.querySelector(".savedContents");
    savedContents.innerHTML = "";
    for(i = 0 ; i < savedItems.length ; i++){
        //console.log(savedItems[i]);
        var dataImage = localStorage.getItem(savedItems[i].name);
        if(dataImage == null || dataImage == undefined || !dataImage){
            dataImage = './images/bI.jpg' || './bI.jpg' || './images/bI.JPG' || './bI.JPG' || 'https://winaero.com/blog/wp-content/uploads/2019/11/Photos-new-icon.png';
        }
        savedContents.innerHTML += "<div class='saved'><div class='savedImg' id='img"+savedItems[i].name+"' onclick='viewSaved(this.id.substring(3))'><img src="+dataImage+"></div> <div class='savedInfo' id='info"+savedItems[i].name+"' onclick='viewSaved(this.id.substring(4))'><div class='savedInfo title'>"+savedItems[i].name+"</div><div class='savedInfo desc'>"+savedItems[i].info+"</div></div><div class='deleteSaved' id='ID"+savedItems[i].name+"' onclick='deleteSaved(this.id)'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z'/></svg></div></div>";
    }
}


/* D E L E T E  S A V E D  I T E M S */
let deleteVar;
function deleteSaved(deleteID){
    document.querySelector(".savedContents").style.pointerEvents = "none";
    document.querySelector(".deleteConfirmModal").style.display = "grid";
    document.querySelector(".deleteItemName").innerHTML = deleteID.substring(2);
    setTimeout(() => {
        document.querySelector(".deleteConfirmModal").classList.add("open");
    }, 10);

    document.querySelectorAll(".deleteConfirm").forEach(function(item) {
        item.addEventListener('click', function() {
            document.querySelector(".deleteConfirmModal").classList.remove("open");
            setTimeout(() => {
                document.querySelector(".deleteConfirmModal").style.display = "none";
            }, 300);   
            document.querySelector(".savedContents").style.pointerEvents = "visible";
        });
    });

    deleteVar = deleteID;

} 

document.querySelector(".deleteConfirm.yes").addEventListener("click",()=>{

    document.querySelector("#"+deleteVar).parentElement.classList.add("shrink");
    deleteItem = deleteVar.substring(2);
    let savedJSON = JSON.parse("["+localStorage.getItem("savedItems")+"]");
    let tempJSON = "";

    //console.log(savedJSON);

    for(i = 0 ; i < savedJSON.length ; i++){
        //if(i > 0) tempJSON += ",";
        if(savedJSON[i].name != deleteItem){
            tempJSON += ","+JSON.stringify(savedJSON[i]);
        }
    }

    localStorage.setItem("savedItems",tempJSON.substring(1));
    localStorage.removeItem(deleteItem);


    setTimeout(() => {
        updateSavedItems();
        refreshSavedNumber();
    }, 350);


});


function viewSaved(vsdName){
    let savedItems = JSON.parse("["+localStorage.getItem("savedItems")+"]");
    let fullJSON;
    for(i = 0; i < savedItems.length; i++){
        if(savedItems[i].name == vsdName){
            fullJSON = savedItems[i];
            console.log(fullJSON);
        }
    }

    let spTitle = document.querySelector(".savedPreviewTitle");
    let spImg = document.querySelector(".savedPreviewImg img");
    let spInfo = document.querySelector(".forSavedPreview .photoInfo");
    let spUses = document.querySelector(".forSavedPreview .photoUses");
    let spLocation =document.querySelector(".forSavedPreview .photoLocation");
    spTitle.innerHTML = fullJSON.name;
    spInfo.innerHTML = fullJSON.info;
    spLocation.innerHTML = fullJSON.location;
    
    try {
        spImg.src = localStorage.getItem(fullJSON.name) || "./images/bI.jpg";
    } catch (error) {
        spImg.src = "./images/bI.jpg";
    }
    
    spUses.innerHTML = "";
    for(i = 0 ; i < fullJSON.uses.length; i++){
        spUses.innerHTML += "<div class='uses'>● "+fullJSON.uses[i].use+"</div>";
    }
    document.querySelector("#headerID").style.pointerEvents = "none";
    document.querySelector("#savedSection").style.pointerEvents = "none";
    document.querySelector(".tabs").style.pointerEvents = "none";
    document.querySelector(".savedPreviewContB").style.display = "block";
    document.querySelector(".savedPreview").style.display = "grid";
    setTimeout(() => {
        document.querySelector(".savedPreviewContB").classList.add("open");
        document.querySelector(".savedPreview").classList.add("open");
    }, 10);

}

document.querySelector(".closePreview").addEventListener("click", ()=>{
    document.querySelector(".savedPreview").classList.remove("open");
    document.querySelector(".savedPreviewContB").classList.remove("open");
    setTimeout(() => {
        document.querySelector(".savedPreview").style.display = "none";
        document.querySelector(".savedPreviewContB").style.display = "none";
    }, 300);
    document.querySelector("#headerID").style.pointerEvents = "visible";
    document.querySelector("#savedSection").style.pointerEvents = "visible";
    document.querySelector(".tabs").style.pointerEvents = "visible";
});


if(localStorage.getItem("model") == "Herbal_Plants"){
    document.querySelector(".modelInfo").style.background = "#70b164";
}else if(localStorage.getItem("model") == "Fruits_Nutrition"){
    document.querySelector(".modelInfo").style.background = "#d35a75";
}