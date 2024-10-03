// Carousel images
const slides = [
	{
	  image: "./assets/images/slideshow/slide1.jpg",
	  tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
	},
	{
	  image: "./assets/images/slideshow/slide2.jpg",
	  tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	},
	{
	  image: "./assets/images/slideshow/slide3.jpg",
	  tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
	},
	{
	  image: "./assets/images/slideshow/slide4.png",
	  tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
	},
  ];
  
  // Variables
  const prevButton = document.querySelector(".arrow_left");
  const nextButton = document.querySelector(".arrow_right");
  const slideImage = document.querySelector(".banner-img");
  const tagLine = document.querySelector("#banner p");
  const dots = document.querySelector(".dots");
  const numberOfSlides = slides.length;
  let index = 0;
  
  // Create bullet points
  const createDots = () => {
	for (let i = 0; i < numberOfSlides; i++) {
	  const dot = document.createElement("div");
	  dot.classList.add("dot");
	  dots.appendChild(dot);
	  if (i === 0) {
		dot.classList.add("dot_selected");
	  }
	}
  };
  createDots();
  
  // Update the slide
  const changeSlide = () => {
	const activeDots = document.querySelectorAll(".dots .dot");
	activeDots.forEach(dot => dot.classList.remove("dot_selected"));
	
	slideImage.src = slides[index].image;
	tagLine.innerHTML = slides[index].tagLine;
	activeDots[index].classList.add("dot_selected");
  };
  
  // Change slide index
  const changeIndex = (direction) => {
	index = (index + direction + numberOfSlides) % numberOfSlides;
	changeSlide();
  };
  
  // Event listeners
  prevButton.addEventListener("click", () => changeIndex(-1));
  nextButton.addEventListener("click", () => changeIndex(1));