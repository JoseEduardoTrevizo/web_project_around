import { cardGenerator } from "./script.js";
const modal = document.getElementById("ventana_modal");
const boton = document.getElementById("btn_open_modal"); //boton que abre el modal
const cerrar = document.getElementById("btn_close_modal"); //boton que cierra el modal
const save = document.getElementById("btn_save");
const modalImage = document.querySelector(".modalImage");
const modalContent = document.querySelector(".modalImage__content");
const modalAdd = document.querySelector("#ventana_modal-add");
const btnAdd = document.querySelector(".profile__button-add");
const btnClose = document.querySelector("#btn_close_modal-add");
const profileName = document.querySelector(".profile-info__avatar_name");
const profileAbout = document.querySelector(".profile-info__avatar_ocupation");
const inputName = document.querySelector("#input_name");
const inputAbout = document.querySelector("#input_about");
const formProfile = document.querySelector(".popup__container");
const formCards = document.querySelector("#popup_addCard");
const cardArea = document.querySelector(".elements");
const nameInput = document.querySelector("#input_name");
const linkInput = document.querySelector(".popup__info_link");
const btnCreate = document.querySelector("#btn_save-add");

export function openImagePopup(name, link) {
  const Image = document.querySelector(".modalImage");
  const closeImage = document.querySelector(".modalImage__close");
  const openImage = document.querySelector(".modalImage__open");
  const titleImage = document.querySelector(".modalImage__description");
  Image.style.display = "block";
  openImage.src = link;
  titleImage.textContent = name;
  closeImage.addEventListener("click", function (evt) {
    Image.style.display = "none";
  });
}

//Funcion para cerrar modal con tecla ESC
window.addEventListener(
  "keyup",
  function (evt) {
    const esc = evt.keyCode || evt.which;
    if (esc == 27) {
      modal.style.display = "none";
      modalAdd.style.display = "none";
      modalImage.style.display = "none";
    }
  },
  false
);
// Seccion popup profile
boton.addEventListener("click", function (evt) {
  modal.style.display = "block";
});

const closeWindow = function () {
  cerrar.addEventListener("click", function () {
    modal.style.display = "none";
  });
};
cerrar.addEventListener("click", function () {
  modal.style.display = "none";
});
//Funcion para cerrar el modal en superposicion
window.addEventListener("click", function (e) {
  console.log(window);
  console.log(e);
  if (e.target == modal) {
    modal.style.display = "none";
    console.log(e);
  } else if (e.target == modalAdd) {
    modalAdd.style.display = "none";
  } else if (e.target == modalImage || e.target == modalContent) {
    modalImage.style.display = "none";
    console.log(e);
  } else {
    false;
  }
});

save.addEventListener("click", function () {
  modal.style.display = "none";
});
//Seccion popup add card
btnAdd.addEventListener("click", function (evt) {
  modalAdd.style.display = "block";
});
btnClose.addEventListener("click", function () {
  modalAdd.style.display = "none";
});
btnCreate.addEventListener("click", function () {
  modalAdd.style.display = "none";
});
formProfile.addEventListener("submit", function (evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
});
formCards.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const cardToAdd = cardGenerator(nameInput.value, linkInput.value);
  cardArea.prepend(cardToAdd);
});
