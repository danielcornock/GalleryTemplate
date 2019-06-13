let modalImage = function() {
    const images = document.querySelectorAll('.gallery__content>img');
    const modal = document.querySelector('.gallery__modal');
    const modalImage = modal.querySelector('.modal__image');
	
	const imgSourceArray = [];
	let index;

	images.forEach(image => {
		imgSourceArray.push(image.src);

		image.addEventListener("click", () =>{    
            modal.classList.add('gallery__modal--active');
			modalImage.src = "";
			modalImage.src = image.src;
            
			index = imgSourceArray.indexOf(image.src);
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
