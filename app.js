

const URL ="https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=KhjE42rF9Y9gIE1JW1mcBX7RACCuQrwHPxczOnuj";
      document.addEventListener("DOMContentLoaded", () => {
        //set up the IntersectionObserver to load more images if the footer is visible.
        let options = {
          root: null,
          rootMargins: "0px",
          threshold: 0.5
        };
        const observer = new IntersectionObserver(handleIntersect, options);
        observer.observe(document.querySelector("footer"));
        //an initial load of some data
        getData();
      });
      function handleIntersect(entries) {
        if (entries[0].isIntersecting) {
          console.warn("something is intersecting with the viewport");
          getData();
        }
      }


      function getData() {
        let main = document.querySelector("main");
        console.log("fetch some JSON data");
        fetch(URL)
          .then(response => response.json())
          .then(function(response){
                  console.log(response);
                  const slike = response.photos;
                  console.log(slike);
                slike.forEach(slika=>{  
                  let img = document.createElement("img");
                  img.src=slika.img_src;
                  main.appendChild(img)
            })
       
      })}















  