import { createCard, deleteCard, likeCard } from "./components/card.js";
import { openPopup, closePopup, closeOverlay } from "./components/modal.js";
import { initialCards } from "./components/cards.js";
import "./pages/index.css";
//добавление карточек из массива

const cardsList = document.querySelector(".places__list");

const fullImage = document.querySelector(".popup__image");
const fullText = document.querySelector(".popup__caption");
const popupImage = document.querySelector(".popup_type_image");

function openImageCard(evt) {
  openPopup(popupImage);
  fullImage.src = evt.target.src;
  fullImage.alt = fullText.textContent = evt.target.alt;
}
function renderCard(data, container) {
  container.prepend(createCard(data, likeCard, deleteCard, openImageCard));
}

initialCards.forEach(function (item) {
  renderCard(item, cardsList);
});

// открытие и закрытие попапов

popupImage.addEventListener("click", closeOverlay);
// редактирование информации о себе
// Находим форму в DOM
const formElementEdit = document.querySelector(".popup__form-edit");
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_description");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__description");
const popupEdit = document.querySelector(".popup_type_edit");
const editButton = document.querySelector(".profile__edit-button");

popupEdit.addEventListener("click", closeOverlay);

editButton.addEventListener("click", function () {
  openPopup(popupEdit);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFromEditSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEdit);
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElementEdit.addEventListener("submit", handleFromEditSubmit);

// Добавление карточек
const formElementAdd = document.querySelector(".popup__form-add");
const popupAdd = document.querySelector(".popup_type_new-card");
const placeNameInput = document.querySelector(".popup__input_type_card-name");
const placeLinkInput = document.querySelector(".popup__input_type_url");
const addButton = document.querySelector(".profile__add-button");

addButton.addEventListener("click", function () {
  openPopup(popupAdd);
});
popupAdd.addEventListener("click", closeOverlay);

formElementAdd.addEventListener("submit", function (e) {
  e.preventDefault();
  const nameValue = placeNameInput.value;
  const imageValue = placeLinkInput.value;
  renderCard({ name: nameValue, link: imageValue }, cardsList, "prepend");
  formElementAdd.reset();
  closePopup(popupAdd);
});
