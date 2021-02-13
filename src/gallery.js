import gallery from './gallery-items.js';


const galleryListRef = document.querySelector("ul.js-gallery");
const modalImageRef = document.querySelector('img.lightbox__image');
const modalWindowRef = document.querySelector('div.js-lightbox');
const closeModalBtnRef = document.querySelector('button[data-action="close-lightbox"]');
const modalOverlayRef = document.querySelector('div.lightbox__overlay');
let dataIndex = 0;
const imagesItems = gallery
  .map((images) => `<li class="gallery__link">
  <a href=${images.original}>
  <img class="gallery__image"
   data-source=${images.original} 
   data-index=${dataIndex}
   src=${images.preview}
    alt="${images.description}">
    </li>`)
  .join("");

  galleryListRef.addEventListener("click", getImage);
galleryListRef.insertAdjacentHTML("beforeend", imagesItems);
closeModalBtnRef.addEventListener('click', closeModalWindow);
modalOverlayRef.addEventListener('click', closeModalWindow);



function getImage(event) {
  event.preventDefault();
  
  const target = event.target;
  if (target.nodeName !== "IMG") return;
  const originalImage = event.target.dataset.source;
  const altImage = event.target.alt;
  const dataIndex = event.target.dataset.index;
  openModalWindow(originalImage, altImage, dataIndex);
}
function openModalWindow(image, alt, index) {
  modalWindowRef.classList.add('is-open');
  modalImageRef.src = image;
  modalImageRef.alt = alt;
  modalImageRef.dataset.index = index;

}
function closeModalWindow () {
  modalWindowRef.classList.remove('is-open');
  modalImageRef.src = ' ';
  modalImageRef.alt = ' ';
  delete    modalImageRef.dataset.index;

}
