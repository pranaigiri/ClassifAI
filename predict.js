// the link to your model provided by Teachable Machine export panel
let URL;

if(localStorage.getItem("model")){
    URL = "./my_model/"+localStorage.getItem("model")+"_Model/";
}else{
    console.log("Loading default model Plants");
    URL = "./my_model/Herbal_Plants_Model/";
}

function refreshModel(newModel){
    showLoader(true);
    URL = "./my_model/"+newModel+"_Model/";
    init();
    //console.log("Model Refreshed!");
}

let model, webcam, labelContainer, maxPredictions;
// Load the image model and setup the webcam
async function init() {
    let modelURL = URL + "model.json";
    let metadataURL = URL + "metadata.json";

    // load the model and metadata
    // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
    // or files from your local hard drive
    // Note: the pose library adds "tmImage" object to your window (window.tmImage)
    try {
        model = await tmImage.load(modelURL, metadataURL);
        maxPredictions = model.getTotalClasses();
        //console.log(maxPredictions);
    } catch (error) {
        URL = "./";
        console.log("Model not found!"+error);
    }

    setTimeout(() => {
       showLoader(false);
    }, 1000);


}init();

let cameraRunning = false;
async function capturePredict(){
    cameraRunning = true;
    document.querySelector(".captureAnalysing").style.transform = "translate(-50%,-50%) scale(0)";
    let predictions = await model.predictTopK(document.querySelector("#myCanvas"));
    //console.log(predictions);
    
    if(predictions[0].probability > 0.9){
        document.querySelector(".predictedPhoto").src = document.querySelector("#myCanvas").toDataURL("image/jpeg");
        setTimeout(() => {
            document.querySelector("#cameraSection").style.pointerEvents = "visible";
            document.querySelector("#cameraSection").style.filter = "";
            document.querySelector(".captureAnalysing").style.display = "none";
        }, 100);
        showPreResult(predictions);
        //showResult(predictions);
        document.querySelector('#player').style.opacity = "0";
        setTimeout(() => {
            document.querySelector('#player').srcObject.getTracks()[0].stop();
        }, 1000);


    }else{
        document.querySelector(".predictedPhoto").src = document.querySelector("#myCanvas").toDataURL("image/jpeg");
        document.querySelector("#cameraSection").style.pointerEvents = "visible";
        document.querySelector("#cameraSection").style.filter = "";
        document.querySelector(".captureAnalysing").style.display = "none";
        showError("Image not found!","Please try another image.");
    }


}


var imgInp = document.querySelector("#fileID");
var imgElem = document.querySelector("#imgID");

imgInp.onchange = evt => {
    const [file] = imgInp.files
    if (file) {
      imgElem.src = window.URL.createObjectURL(file);
      document.querySelector(".predictedPhoto").src = imgElem.src;
      document.querySelector(".goBtn.ic").click();
      document.querySelector("#captureIcon svg").style.fill = "#70b164";
      document.querySelector("#analyzeIcon svg").classList.add("analyzing");
      document.querySelector(".category.i").style.pointerEvents = "none";
      setTimeout(() => {
          uploadPredict();
      }, 2000);
    }
}

function triggerInput() {
    imgInp.click();
}

async function uploadPredict(){
    const prediction = await model.predictTopK(imgElem);

    if(prediction[0].probability > 0.9){
        setTimeout(() => {
            document.querySelector("#captureIcon svg").style.fill = "";
            document.querySelector("#analyzeIcon svg").classList.remove("analyzing");
            document.querySelector(".category.i").style.pointerEvents = "visible";
        }, 100);
        showPreResult(prediction);
        //showResult(prediction);
    }else{
        document.querySelector("#analyzeIcon svg").style.fill = "#dd6830";
        document.querySelector("#captureIcon svg").style.fill = "";
        document.querySelector("#analyzeIcon svg").classList.remove("analyzing");
        document.querySelector(".category.i").style.pointerEvents = "visible";
        setTimeout(() => {
            showError("Image not found!","Please try another image.");
            document.querySelector("#analyzeIcon svg").style.fill = "";
        }, 500);
        
    }
}


function showPreResult(prediction){
    const preResultElem = document.querySelector(".preResult");
    let categoryName = localStorage.getItem("model") || "Herbal_Plants";
    let possibleOneImg = "./images/"+categoryName+"/"+prediction[0].className+".jpg" || "./images/bI.jpg";
    let possibleTwoImg = "./images/"+categoryName+"/"+prediction[1].className+".jpg" || "./images/bI.jpg";
    let possibleThreeImg = "./images/"+categoryName+"/"+prediction[2].className+".jpg" || "./images/bI.jpg";

    let firstImg = document.querySelector(".possible.one");
    firstImg.src = possibleOneImg;
    document.querySelector(".oneDiv p").innerHTML = prediction[0].className;
    document.querySelector(".oneScore").innerHTML = parseInt(prediction[0].probability*100)+"%";
    let firstPR = document.querySelector(".oneDiv");
    firstPR.addEventListener("click",()=>{
        document.querySelector(".predictedPhoto").src = possibleOneImg;
        showResult(prediction, prediction[0]);
    });


    let secondImg = document.querySelector(".possible.two");
    secondImg.src = possibleTwoImg;
    document.querySelector(".twoDiv p").innerHTML = prediction[1].className;
    document.querySelector(".twoScore").innerHTML = parseInt(prediction[1].probability*100)+"%";
    let secondPR = document.querySelector(".twoDiv");
    secondPR.addEventListener("click",()=>{
        document.querySelector(".predictedPhoto").src = possibleTwoImg;
        showResult(prediction, prediction[1]);
    });

    let thirdImg = document.querySelector(".possible.three");
    thirdImg.src = possibleThreeImg;
    document.querySelector(".threeDiv p").innerHTML = prediction[2].className;
    document.querySelector(".threeScore").innerHTML = parseInt(prediction[2].probability*100)+"%";
    let thirdPR = document.querySelector(".threeDiv");
    thirdPR.addEventListener("click",()=>{
        document.querySelector(".predictedPhoto").src = possibleThreeImg;
        showResult(prediction, prediction[2]);
    });

    
    preResultElem.style.display = "grid";
    setTimeout(() => {
        preResultElem.classList.add("show");
    }, 500);
}
function hidePreResult(){
    if(cameraRunning == true){

        navigator.mediaDevices.getUserMedia({
            video: {
                facingMode: "environment",
                width: { min: 1024, ideal: 1280, max: 1920 },
                height: { min: 576, ideal: 720, max: 1080 }
            },
            audio: false
        })
        .then(stream => {
            window.localStream = stream;
            document.querySelector('#player').srcObject = stream;
            setTimeout(() => {
                document.querySelector('#player').style.opacity = "1";
            }, 1000);
        })
        .catch((err) => {
            console.log(err);
        });
        cameraRunning = false;

    }
    const preResultElem = document.querySelector(".preResult");
    preResultElem.classList.remove("show");
    setTimeout(() => {
        preResultElem.style.display = "none";
    }, 1000);
}


function showResult(prediction, preResultName){

    if(localStorage.getItem("savedItems")){
        document.querySelector(".pSaveBtn").innerHTML = "Save";
        document.querySelector(".saveBtn .save").classList.remove("disabled");
        let savedItems = JSON.parse("["+localStorage.getItem("savedItems")+"]");
        for(i = 0 ; i < savedItems.length ; i++){
            if(preResultName.className == savedItems[i].name){
                document.querySelector(".pSaveBtn").innerHTML = "Saved";
                document.querySelector(".saveBtn .save").classList.add("disabled");
                //continue;
            }
        }
    }

    if(localStorage.getItem("model") == "Herbal_Plants"){
        document.querySelector(".forPlants").style.display = "block";
    }else{
        document.querySelector(".forPlants").style.display = "none";
    }
    if(localStorage.getItem("model") == "Fruits_Nutrition"){
        document.querySelector(".forFruits").style.display = "block";
        document.querySelector(".photoOptions.fn").style.gridTemplateColumns = ".5fr 1fr .5fr";
    }else{
        document.querySelector(".forFruits").style.display = "none";
        document.querySelector(".photoOptions.fn").style.gridTemplateColumns = "33% 33% 33%";
    }
    let pTitle = document.querySelector(".titleContainer");
    let pSubtitle = document.querySelector(".subtitleContainer");
    let similaritems = document.querySelector(".similarItems");
    fetchPredictionInfo(pTitle);
    similaritems.innerHTML = "";
    for(i = 1 ; i < prediction.length ; i++){
        similaritems.innerHTML += "<div class='similarItem'>"+prediction[i].className+" - "+parseInt(prediction[i].probability*100)+"%</div>";
    }

    pTitle.innerHTML = preResultName.className;
    pSubtitle.innerHTML = "Confidence Score: "+parseInt(preResultName.probability*100)+"%.";


    //console.log(prediction);
    document.querySelector(".predictionWrapper").style.display = "block";
    document.querySelector(".preResult").style.pointerEvents = "none";
    setTimeout(() => {
        document.querySelector(".predictionWrapper").classList.remove("hidden");
    }, 10);

}
const resultCloseBtn = document.querySelector(".resultCloseBtn img");
resultCloseBtn.addEventListener("click", ()=>{
    document.querySelector(".predictionWrapper").classList.add("hidden");
    setTimeout(() => {
        document.querySelector(".predictionWrapper").style.display = "none";
        document.querySelector(".preResult").style.pointerEvents = "visible";
    }, 500);
});


var forSave;
/*FETCH MORE PREDICTION INFO*/
function fetchPredictionInfo(pTitle){

    if(!localStorage.getItem("savedItems") || localStorage.getItem("savedItems") == null || localStorage.getItem("savedItems") == ""){
        document.querySelector(".pSaveBtn").innerHTML = "Save";
        document.querySelector(".saveBtn .save").classList.remove("disabled");
        console.log("NOT found");
    }

    //console.log("writng");
    try {
        fetch("./infoDB/"+localStorage.getItem('model')+"DB.json")
        .then(res => res.json())
        .then(data => {


            if(localStorage.getItem('model') == "Herbal_Plants"){
                let infoElem = document.querySelector(".photoDescription.hp.photoInfo");
                let usesElem = document.querySelector(".photoDescription.hp.photoUses");
                let locationElem = document.querySelector(".photoDescription.hp.photoLocation");
                for(i = 0 ; i < data.length ; i++){
                    if(data[i].name == pTitle.innerHTML){
                        forSave = data[i];
                        infoElem.innerHTML = data[i].info;
                        usesElem.innerHTML = "";
                        for(j = 0 ; j < data[i].uses.length ; j++){
                            usesElem.innerHTML += "<div class='uses'>● "+data[i].uses[j].use+"</div>";
                        }
                        locationElem.innerHTML = data[i].location;
                    }
                }
            }
            if(localStorage.getItem('model') == "Fruits_Nutrition"){
                let infoElem = document.querySelector(".photoDescription.fn.photoInfo");
                let usesElem = document.querySelector(".photoDescription.fn.photoUses");
                let locationElem = document.querySelector(".photoDescription.fn.photoLocation");
                for(i = 0 ; i < data.length ; i++){
                    if(data[i].name == pTitle.innerHTML){
                        forSave = data[i];
                        infoElem.innerHTML = data[i].info;
                        usesElem.innerHTML = "";
                        for(j = 0 ; j < data[i].uses.length ; j++){
                            usesElem.innerHTML += "<div class='uses'>● "+data[i].uses[j].use+"</div>";
                        }
                        locationElem.innerHTML = data[i].location;
                    }
                }
            }


        })
    } catch (error) {
        console.log(error);
    }    
}


/*SAVE ITEM CODE */
function saveItem() {
    document.querySelector(".pSaveBtn").innerHTML = "Saved";
    document.querySelector(".saveBtn .save").classList.add("disabled");
    if(!localStorage.getItem("savedItems")){
        localStorage.setItem("savedItems",JSON.stringify(forSave));
    }else{
        let savedItems = JSON.parse("["+localStorage.getItem("savedItems")+"]");
        let newSavedItems;
        let found = false;

        for(i = 0; i < savedItems.length ; i++){
            if(savedItems[i].name == forSave.name){
                found = true;
            }
        }
        if(found == false)
        {
            newSavedItems = localStorage.getItem("savedItems")+","+JSON.stringify(forSave);
            localStorage.setItem("savedItems", newSavedItems);
        }
        //console.log(JSON.parse("["+localStorage.getItem("savedItems")+"]"));
    }
    bannerImage = document.querySelector(".predictedPhoto");
    //localStorage.setItem(forSave.name, JSON.stringify(bannerImage.src));

    var imgCanvas = document.createElement("canvas"),
    imgContext = imgCanvas.getContext("2d");

    // Make sure canvas is as big as the picture
    imgCanvas.width = bannerImage.width;
    imgCanvas.height = bannerImage.height;

    // Draw image into canvas element
    imgContext.drawImage(bannerImage, 0, 0, bannerImage.width, bannerImage.height);

    // Get canvas contents as a data URL
    var imgAsDataURL = imgCanvas.toDataURL("image/png");

    // Save image into localStorage
    try {
        localStorage.setItem(forSave.name, imgAsDataURL);
    }
    catch (e) {
        console.log("Storage failed: " + e);
    }


    refreshSavedNumber();
}



/*ERROR MODAL CODE*/
let errModal = document.querySelector(".errorModal");
let errTitleElem = document.querySelector(".errorTitle");
let errDescElem = document.querySelector(".errorDesc");

function showError(errTitle, errDesc){
    errTitleElem.innerHTML = errTitle;
    errDescElem.innerHTML = errDesc;
    errModal.classList.add("popIn");
}
const errCloseBtn = document.querySelector(".errorCloseBtn");
errCloseBtn.addEventListener("click",()=>{
    if(errModal.classList.contains("popIn")){
            errModal.classList.remove("popIn");
    }
});




/*SHOW LOADER CODE*/
function showLoader(x){
    let showLoaderElem = document.querySelector(".showLoader");
    if(x == false){
        showLoaderElem.classList.remove("showToggle")
        setTimeout(() => {
            document.querySelector(".model-container").style.pointerEvents = "visible";
        }, 500);
        
    }else{
        showLoaderElem.classList.add("showToggle");
        document.querySelector(".model-container").style.pointerEvents = "none";
    }
}

