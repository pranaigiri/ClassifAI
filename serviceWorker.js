const staticAssets = [
    './',
    './main.css',
    './dmode.css',
    './animation.css',
    './script.js',
    './test.js',
    './predict.js',
    './tf.min.js',
    './teachablemachine-image.min.js',
    './manifest.json',
    './manifest_d.json',
    './infoDB',
    './infoDB/Fruits_NutritionDB.json',
    './infoDB/Herbal_PlantsDB.json',
    './infoDB/Plant_DiseasesDB.json',
    './infoDB/Skin_DiseasesDB.json',
    "./images",
    "./images/Fruits_Nutrition",
    "./images/Fruits_Nutrition/Apple.jpg",
    "./images/Fruits_Nutrition/Banana.jpg",
    "./images/Fruits_Nutrition/Mango.jpg",
    "./images/Fruits_Nutrition/Strawberry.jpg",
    "./images/Herbal_Plants",
    "./images/Herbal_Plants/Aloevera.jpg",
    "./images/Herbal_Plants/Banmara.jpg",
    "./images/Herbal_Plants/Brahmi.jpg",
    "./images/Herbal_Plants/Titepati.jpg",
    "./images/Herbal_Plants/Tulsi.jpg",
    './images/brokenImage.jpg',
    './my_model',
    './my_model/Fruits_Model/metadata.json',
    './my_model/Fruits_Model/model.json',
    './my_model/Fruits_Model/weights.bin',
    './my_model/Plants_Model/metadata.json',
    './my_model/Plants_Model/model.json',
    './my_model/Plants_Model/weights.bin',
    './my_model/Places_Model/metadata.json',
    './my_model/Places_Model/model.json',
    './my_model/Places_Model/weights.bin',
    './my_model/SkinDiseases_Model/metadata.json',
    './my_model/SkinDiseases_Model/model.json',
    './my_model/SkinDiseases_Model/weights.bin',
    './icons',
    './icons/burger.svg',
    './icons/dark.svg',
    './icons/light.svg',
    './icons/icon/icon72.png',
    './icons/icon/icon96.png',
    './icons/icon/icon128.png',
    './icons/icon/icon144.png',
    './icons/icon/icon192.png',
    './icons/icon/icon384.png',
    './icons/icon/icon512.png',
    './icons/flash-on.png',
    './icons/flash-off.png',
    './icons/flipCameraIcon.svg',
    './icons/switch-camera4.png',
    './icons/camera.png',
    './icons/cameraIcon.svg',
    './icons/back-btn.png',
    './icons/cameraTab.png',
    './icons/closeBtn.png',

]

self.addEventListener('install', async event=>{
    const cache = await caches.open('static-cache');
    cache.addAll(staticAssets);
})

self.addEventListener('fetch', event=>{
    const req = event.request;
    const url = new URL(req.url);

    if(url.origin === location.url){
        event.respondWith(cacheFirst(req));
    }else{
        event.respondWith(networkFirst(req));
    }
})

async function cacheFirst(req){
    const cacheResponse = caches.match(req);
    return cacheResponse || fetch(req);
}

async function networkFirst(req){
    const cache = await caches.open('dynamic-cache');

    try{
        const res = await fetch(req);
        cache.put(req,res.clone());
        return res;
    }catch(err){
        return await cache.match(req);
    }
}