const images = [
	"img/wordpress-552922_1920.jpg",
	"img/wordpress-589121_1920.jpg",
	"img/wp1958122-php-wallpapers.jpg",
	"img/wp2465949-javascript-wallpapers.png",
	"img/wp5070716-nodejs-wallpapers.jpg",
];

let imageIndex = 0;

const img = document.getElementById("image-element");

setInterval(() => {
	if (imageIndex >= images.length) {
		imageIndex = 0;
	}

	const imgSrc = images[imageIndex];
	img.setAttribute("src", imgSrc);

	imageIndex++;
}, 1000);
