// All slides

const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


// Arrows
const prevButton = document.querySelector(".arrow_left");
const nextButton = document.querySelector(".arrow_right");

prevButton.addEventListener("click", () => {
	console.log("clic sur le bouton gauche")
});

nextButton.addEventListener("click", () => {
	console.log("clic sur le bouton droit")
});

// Bullet points

// 1. Sélectionner l'élément conteneur des bullets
const dots = document.querySelector(".dots");

// 2. Définir le nombre de slides
const numberOfSlides = slides.length;


// 3. Créer les bullets points
for (let i = 0; i < numberOfSlides; i++) {
  // Créer un élément bullet (span ou button)
 let dot = document.createElement("div");
 // Ajouter une classe pour styliser chaque bullet
 dot.classList.add('dot');
 // Ajoute les dots au conteneur
 dots.appendChild(dot);

// 4. Le premier dot est actif par défaut
  if (i === 0) {
    dot.classList.add('dot_selected');
  }
}

let currentSlide = 0;

function moveSlide(index) {
	const slideImage = document.querySelector(".banner-img");
}