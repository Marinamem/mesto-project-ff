export function deleteCard(evt) {
  const deleteTarget = evt.target.closest(".card");
  deleteTarget.remove();
}

export function likeCard(evt) {
  evt.target.classList.toggle("card__like-button_is-active");
}

export function createCard(data, onLikeClick, onDeleteClick, onImageClick) {
  const templateElement = document
    .querySelector("#card-template")
    .content.querySelector(".card");
  const card = templateElement.cloneNode(true);
  const textElement = card.querySelector(".card__title");
  const imageElement = card.querySelector(".card__image");
  const buttonDelElement = card.querySelector(".card__delete-button");
  const buttonLikeElement = card.querySelector(".card__like-button");
  textElement.textContent = data.name;
  imageElement.src = data.link;
  imageElement.alt = data.name;
  buttonDelElement.addEventListener("click", onDeleteClick);

  buttonLikeElement.addEventListener("click", onLikeClick);

  imageElement.addEventListener("click", onImageClick);
  return card;
}
