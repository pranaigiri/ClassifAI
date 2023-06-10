

// Attach the video stream to the video element and autoplay.
let cameraRunning =  false, torchRunning = false;
let tracks, stream;
let fmode = -1;

const player = document.getElementById('player');
const bottomControls = document.getElementById("bottom-controls-id");

//CameraButton Click
cameraBtn = document.getElementById("cameraBtn");
cameraBtn.addEventListener('click',()=>{
    toggleLoaderIcon();
    closeBG();   
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
            
            (() => {
                const videoElm = player;
                const btnSwitch = document.querySelector('#switch');
      
                const supports = navigator.mediaDevices.getSupportedConstraints();
                if (!supports['facingMode']) {
                  alert('Browser Not supported!');
                  return;
                }
                
                    const capture = async facingMode => {
                        const options = {
                        audio: false,
                        video: {
                            facingMode,
                        },
                    };

                          try {
                            if (stream) {
                                tracks = stream.getTracks();
                                tracks.forEach(track => track.stop());
                            }
                                stream = await navigator.mediaDevices.getUserMedia(options);
                          }catch (e) {
                                alert(e);
                                return;
                          }

                                videoElm.srcObject = null;
                                videoElm.srcObject = stream;
                                videoElm.play();
                                


 //Torch Code
    const track = stream.getVideoTracks()[0];
    const imageCapture = new ImageCapture(track);
    const photoCapabilities = imageCapture.getPhotoCapabilities().then(() => {

    //todo: check if camera has a torch

    //let there be light!
    const flashbtn = document.querySelector('.flash-btn');
    flashbtn.addEventListener('click', function(){
        
        if(torchRunning == false){
        track.applyConstraints({
            advanced: [{torch: true}]
        });
        torchRunning = true;
        document.getElementById("flash-id").src = "./icons/flash-off.png";
        console.log("Torch ON");
        }else{
        track.applyConstraints({
            advanced: [{torch: false}]
        });
        torchRunning = false;
        document.getElementById("flash-id").src = "./icons/flash-on.png";
        console.log("Torch OFF");
        }
        
    });
});

}

capture('environment');
fmode = 1;


btnSwitch.addEventListener('click', () => {


if(cameraRunning == true){
    try{
        tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
        player.srcObject.getTracks()[0].stop();
        photoCapabilities = null;   
        
    }catch(err){
        console.log("Cannot Close Camera");
    }
    

    if(fmode == 0){
        try{
            capture('environment');
            console.log("ENVIRONMENT: ");
            fmode = 1;

        }catch(err){
            console.log("Error Switching!"+err);
        }

    }
    else if(fmode == 1){
        try{
            capture('user');
            console.log("USER: ");
            fmode = 0;

        }catch(err){
            console.log("Error Switching!"+err);
        }
    }else{
        console.log("not selected");
    }
}



                    
                    
                });
      
      })();


            if(cameraRunning == false){
                player.style.display = "block";
                document.getElementById("headerID").style.transform = "translateY(-100%)";
                setTimeout(() => {
                    document.getElementById("headerID").style.display = "none";
                }, 1000);
                setTimeout(() => {
                    player.style.opacity = "1";
                    document.getElementsByClassName("feedback")[0].style.opacity = 1;
                    document.getElementsByClassName("back-btn")[0].style.opacity = 1;
                    document.getElementsByClassName("feedback")[0].style.display = "grid";
                    cameraRunning = true;
                    toggleLoaderIcon();
                    bottomControls.style.display = "block";
                    document.getElementById("back-btn-id").style.display="block";
                }, 4000);
            }else{
                console.log("ClassifAI Test!");
            }

        }, 1000);
    }, 1000);
});




/* FUNCTIONS */
 function closeBG() {
    let runningS = document.querySelector(".running");
    runningS.classList.add("sectionExit");
    setTimeout(() => {
        runningS.classList.remove("running");
        runningS.classList.add("stopped");
        runningS.classList.remove("sectionExit");
        if(cameraRunning == true){
            player.style.opacity = "0";
            document.getElementsByClassName("feedback")[0].style.opacity = 0;
            document.getElementsByClassName("back-btn")[0].style.opacity = 0;
            setTimeout(() => {
                player.style.display ="none";
            }, 100);

            player.srcObject.getTracks()[0].stop();
            player.srcObject = null;
            stream = null;
            tracks = null;
            track = null;
            cameraRunning = false;
            torchRunning = false;
            fmode = -1;
        }
    }, 1000);
 }

let loaderRunning = false;

function toggleLoaderIcon(){

    if(loaderRunning == false){
        document.getElementById('load').style.opacity="1";
        setTimeout(() => {
            document.getElementById('load').style.visibility="visible";
            loaderRunning = true;
        }, 1000);
    }else{
        document.getElementById('load').style.opacity="0";
        setTimeout(() => {
            document.getElementById('load').style.visibility="hidden";
            loaderRunning = false;
        }, 1000);
    }

 }


 /*------------------------------------------------------------------------------------------*/


 //Bottom Controls for FLASH, CAPTURE & SWITCH CAMERA
 var captureBtn = document.getElementById("svg-btn-id");

 captureBtn.addEventListener("mousedown",()=>{
     captureBtn.classList.add("mousedown");
 });

 captureBtn.addEventListener("mouseleave",()=>{
    captureBtn.classList.remove("mousedown");
});

captureBtn.addEventListener("mouseup",()=>{
    captureBtn.classList.remove("mousedown");
    captureBtn.classList.add("mouseup");
    setTimeout(() => {
        captureBtn.classList.remove("mouseup");
    }, 3500);
});


//Back button click
var backBtn = document.getElementById("back-btn-id");

backBtn.addEventListener("click", function(){
    let text = "Do you really want to exit";
    if(confirm(text)==true){
        player.style.opacity = "0";


        setTimeout(() => {
            player.style.display = "none";
            document.getElementsByClassName("feedback")[0].style.display = "none";
            bottomControls.style.display = "none";
            document.getElementById("back-btn-id").style.display="none";
        }, 1000);
        closeBG();
        stopCamera();
        document.getElementById("headerID").style.display = "grid";
        homeBtn.classList.add("active");
        sectionHome.style.display = "none";
        sectionHome.classList.remove("stopped");
        sectionHome.classList.add("running");
        setTimeout(() => {
            document.getElementById("headerID").style.transform = "translateY(0px)";
            sectionHome.style.opacity = "0";
            sectionHome.style.display = "";
            sectionHome.classList.add("sectionEntry");
            setTimeout(() => {
                sectionHome.style.opacity = "1";
                sectionHome.classList.remove("sectionEntry");
            }, 1000);
        }, 1000);

    }else{
        
    }


    function stopCamera(){

            try{
                tracks = stream.getTracks();
                tracks.forEach(track => track.stop());
                cameraRunning = false;
                torchRunning = false;
                fmode = -1;
            }catch(err){
                console.log("Cannot Close Camera");
            }


    }




});





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


let firstTimeN = false, firstTimeU = false, firstTimeO = false;

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
        


        if(avg == 0){
            //-----EMPTY
            //console.log("No media is detected");
            //info.innerHTML = "";
            dot.style.background = "#ff5200";
        }else if(avg < 10){
            //-----UNDER EXPOSE
            if(firstTimeU ==  false){

                info.classList.remove("in");
                setTimeout(() => {
                    info.innerHTML = "Low Light Detected!";
                    info.classList.add("in");
                }, 200);



                firstTimeU = true;
                firstTimeN = false;
                firstTimeO = false;
            }
            dot.style.background = "#ff5200";

        }else if(avg < 35){
            //-----NORMAL
            if(firstTimeN == false){

                info.classList.remove("in");
                setTimeout(() => {
                    info.innerHTML = "Ready to Capture";
                    info.classList.add("in");
                }, 200);

                firstTimeN = true;
                firstTimeU = false;
                firstTimeO = false;
            }

            dot.style.background = "#30ff30";


        }else{
            //-----OVER EXPOSE
            if(firstTimeO == false){

                info.classList.remove("in");
                setTimeout(() => {
                    info.classList.add("in");
                }, 200);
                info.innerHTML = "High Exposure Detected!";

                firstTimeO = true;
                firstTimeU = false;
                firstTimeN = false;
            }

            //console.log("Over Exposed");
            dot.style.background = "#ff5200";
        }

    }

    



//-------- EXPOSURE CHECK END--------



function stopCamera(){

    try{
        tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
        cameraRunning = false;
        torchRunning = false;
        fmode = -1;
    }catch(err){
        console.log("Cannot Close Camera");
    }


}
