export const openPopup = function (modal) {
  modal.classList.add("popup_is-opened");
  document.addEventListener("keydown", handleCloseByEsc);
};

export const closePopup = function (modal) {
  modal.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", handleCloseByEsc);
};

export function closeOverlay(evt) {
  if (
    evt.currentTarget === evt.target ||
    evt.target.classList.contains("popup__close")
  )
    closePopup(evt.currentTarget);
}
export function handleCloseByEsc(evt) {
  if (evt.key === "Escape") {
    const popup = document.querySelector(".popup_is-opened");
    closePopup(popup);
  }
}
