


const galerija = document.getElementById('galerija');
// fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=KhjE42rF9Y9gIE1JW1mcBX7RACCuQrwHPxczOnuj')
//   .then(function(response) {
//     return response.json()
//   }).then(function(response){
//       console.log(response);
//       const slike = response.photos;
//     slike.forEach(slika=>{  
//         galerija.innerHTML +=`<div>
                
//         <img id='slika' src="${slika.img_src}">
//         <h3>camera name: ${slika.camera.name}</h3>
//         </div>
//         `
// })
// });

async function getImage(){
    const response = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=KhjE42rF9Y9gIE1JW1mcBX7RACCuQrwHPxczOnuj');
    const img_data = await response.json();
    
    const slike = img_data.photos;
  slike.forEach(slika=>{  
        galerija.innerHTML +=`<div>
                
        <img id='slika' src="${slika.img_src}">
        <h3>camera name: ${slika.camera.name}</h3>
        </div>
        `
})

}


getImage()












  