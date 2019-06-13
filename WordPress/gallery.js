let modalImage = function() {
	const images = document.querySelectorAll('.blocks-gallery-item>figure>img');
	
	const imgSourceArray = [];
	let index;

	images.forEach(image => {
		imgSourceArray.push(image.src);

		image.addEventListener("click", () =>{
			index = imgSourceArray.indexOf(image.src);

			let modal = document.querySelector('.gallery__modal');
			modal.classList.add('gallery__modal--active');

			let modalImage = modal.querySelector('.modal__image');
			modalImage.src = "";
			modalImage.src = image.src;

			changeGalleryPic(imgSourceArray, index, modalImage);

			modalImage.addEventListener("click", () =>{
				modal.classList.remove('gallery__modal--active');
			});
			document.querySelector('.gallery__close').addEventListener("click", () =>{
				modal.classList.remove('gallery__modal--active');
			})
		})
	})
}();

function changeGalleryPic (imgSourceArray, index, modalImage){
	const moveRight = document.querySelector('.gallery__button--right');
	const moveLeft = document.querySelector('.gallery__button--left');
	

	moveRight.addEventListener("click", () =>{
		if (index+1 >= imgSourceArray.length){
			return;
		}
		let nextImageSrc = imgSourceArray[++index];
		modalImage.src = "";
		modalImage.src = nextImageSrc;
	})

	moveLeft.addEventListener("click", () =>{
		if (index-1 < 0){
			return;
		}
		let nextImageSrc = imgSourceArray[--index];
		modalImage.src = "";
		modalImage.src = nextImageSrc;
	})
};
