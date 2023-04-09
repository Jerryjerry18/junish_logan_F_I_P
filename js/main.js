(function(){
	"use strict";
	console.log("fired");

	let button = document.querySelector("#button");
	let burgerCon = document.querySelector("#burger-con");

	function hamburgerMenu() {
		burgerCon.classList.toggle("slide-toggle");
		button.classList.toggle("expanded");
	};

	// let hamburgerMenu = () => {
	// 	burgerCon.classList.toggle("slide-toggle");
	// 	button.classList.toggle("expanded");
	// };

	button.addEventListener("click", hamburgerMenu, false);
})();


const img = document.querySelector(".imgimg");
const popup = document.querySelector(".popup");

img.addEventListener("mouseover", () => {
popup.style.visibility = "visible";
});

img.addEventListener("mouseout", () => {
popup.style.visibility = "hidden";
});




let junish = document.querySelectorAll('.butt-1-contact-us a'),
    lightBox_Contact_Us = document.querySelector('#lightbox-contact-us')
;


function loadMyData() {
    //debugger;

    lightBox_Contact_Us.querySelector('h3').textContent = junish[this.dataset.member].headline;
    lightBox_Contact_Us.querySelector('p').textContent = junish[this.dataset.member].bio;

}

junish.forEach(hero => hero.addEventListener('click',loadMyData));


let logan = document.querySelectorAll('.butt-1-contact-us a'),
    lightBox1 = document.querySelector('#lightbox1-contact-us')
;


function loadMyData() {
    //debugger;

    lightBox_Contact_Us.querySelector('h3').textContent = logan[this.dataset.member].headline;
    lightBox_Contact_Us.querySelector('p').textContent = logan[this.dataset.member].bio;

}

logan.forEach(hero => hero.addEventListener('click',loadMyData));




function toggleNutritionalFacts() {
	var nutritionalFacts = document.getElementById("nutritional-facts");
	if (nutritionalFacts.style.display === "none") {
	nutritionalFacts.style.display = "block";
	} else {
	nutritionalFacts.style.display = "none";
	}
}

function toggleNutritionalFacts() {
	var nutritionalFacts = document.getElementById("nutritional-facts2");
	if (nutritionalFacts.style.display === "none") {
	nutritionalFacts.style.display = "block";
	} else {
	nutritionalFacts.style.display = "none";
	}
}



let member = document.querySelectorAll('.reviews'),
    lightBox = document.querySelector('#lightbox');

function loadHeroData() {
    lightBox.querySelector('.name').textContent = reviews[this.dataset.member].name;
    lightBox.querySelector("h3").textContent = reviews[this.dataset.member].headline;
    lightBox.querySelector('p').textContent = reviews[this.dataset.member].bio;
}

member.forEach(hero => hero.addEventListener('click', loadHeroData));

let reviews = {
    Review_1 : {
        name: "Review_1",
        headline: "WE LOVE THIS PLACE",
        bio: "DROUGHTS ARE JUST PERFECT OVER HERE:",
        
        
    },

    Review_2 : {
        name: "Review_2",
        headline: " CAN YOU MAKE DR NUT AT HOME PLEASEEEEEEEEE",
        bio: "PLEASE MAKE YOUR BEER STORE MOVABLE THAT CAN GET IT WITHOUT GOING ANYWHERE :",
    },

    Review_3 : {
        name: "Review_3",
        headline: "THIS IS WHAT IS CALLED CLASSIC",
        bio: "BEST CLASSIC BEERS EVER:",
        
    },

    Review_4 : {
        name: "Review_4",
        headline: "GREEN BEER IS THE BEST",
        bio: "BEERS WHICH ARE OF MY KIND:",
        
    }
    
}