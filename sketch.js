                                
                                
                                if(cameraRunning == true){
                                    
                                }
                                
                                //Torch Code
                                // Create stream and get video track
                                navigator.mediaDevices.getUserMedia({
                                    video: true
                                }).then(stream => {
                                    const track = stream.getVideoTracks()[0];
                                    let torchRunning = false;
                                    //Create image capture object and get camera capabilities
                                    const imageCapture = new ImageCapture(track)
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
                                });