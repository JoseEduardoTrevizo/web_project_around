var modal = document.getElementById("ventana_modal");
var boton = document.getElementById("btn_open_modal"); //boton que abre el modal
var cerrar = document.getElementById("btn_close_modal"); //boton que cierra el modal
var save = document.getElementById("btn_save");
const popupProfile = document.querySelector("#popup_profile");
const profileName = document.querySelector(".profile-info__avatar_name");
const profileAbout = document.querySelector(".profile-info__avatar_ocupation");
const inputName = document.querySelector("#input_name");
const inputAbout = document.querySelector("#input_about");
const formProfile = document.querySelector(".popup__container");

boton.addEventListener("click", function (evt) {
  modal.style.display = "block";
});
cerrar.addEventListener("click", function () {
  modal.style.display = "none";
});
save.addEventListener("click", function () {
  modal.style.display = "none";
});

formProfile.addEventListener("submit", function (evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
});
