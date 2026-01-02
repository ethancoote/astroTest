const lightbox = document.querySelector(".lightbox");
const portfolioItems = document.querySelectorAll(".portfolioItem");
const lightboxImg = document.querySelector("#lightboxImg");

const homepages = ["images/portfolio/trueautoFull.webp",
                    "images/portfolio/chalkieFull.webp", 
                    "images/portfolio/nycurlsFull.webp", 
                    "images/portfolio/bimFull.webp", 
                    "images/portfolio/kansasvcFull.webp", 
                    "images/portfolio/apexFull.webp",
                    "images/portfolio/greenwayFull.webp", 
                    "images/portfolio/elevateFull.webp", 
                    "images/portfolio/arloFull.webp"];

let open = false;

let i = 0;
portfolioItems.forEach((item) => { 
    let index = i;
    item.addEventListener("click", function() {
        lightbox.style.display = "flex";
        lightboxImg.src = homepages[index];
        console.log("hello");
        open = true;
    });
    i++;
});

lightbox.addEventListener("click", e => {
    if (e.target != lightboxImg) {
        lightbox.style.display = "none";
    }
})




