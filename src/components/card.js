import {openPopup} from './utils.js';
export {addToContainer}

const placePopupElement = document.querySelector('#popup_image-open');
const placePopupImg = placePopupElement.querySelector('.popup__image');
const placePopupCaption = placePopupElement.querySelector('.popup__caption');

function createPlaceCard(placeName, placeImgSrc, config) {
  const placeTemplate = document.querySelector(config.templateSelector).content;
  const placeElement = placeTemplate.querySelector(config.cardElementSelector).cloneNode(true);
  const placeTitleElement = placeElement.querySelector(config.cardTitleSelector);
  const placeImgElement = placeElement.querySelector(config.cardImgSelector);
  const placeLikeBtn = placeElement.querySelector(config.cardLikeSelector);
  const placeDeleteBtn = placeElement.querySelector(config.cardDeleteSelector);

  placeTitleElement.textContent = placeName;
  placeImgElement.setAttribute('src', placeImgSrc);
  placeImgElement.setAttribute('alt', placeName);

  placeLikeBtn.addEventListener('click', function (evt) {
    evt.target.classList.toggle(config.likeActiveClass);
  });

  placeDeleteBtn.addEventListener('click', function () {
    placeElement.remove();
  });

  placeImgElement.addEventListener('click', function(){
    placePopupImg.setAttribute('src', placeImgSrc);
    placePopupImg.setAttribute('alt', placeName);
    placePopupCaption.textContent = placeName;
    openPopup(placePopupElement);
  });

  return placeElement;
}

function addToContainer(container, name, link, config) {
  const card = createPlaceCard(name, link, config);
  container.prepend(card);
}
