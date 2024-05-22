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
const template = document.querySelector(".template-card");
const cardArea = document.querySelector(".elements");
const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

function cardGenerator(name, link) {
  const card = template.cloneNode(true).content.querySelector(".element");
  const cardImage = card.querySelector(".elements-card__element_image");
  const cardTitle = card.querySelector(".elements-name__place");
  const btnDelate = card.querySelector(".elements-card__element_trash");
  const btnLike = card.querySelector(".elements-name__place_like");
  //Funcion para crear el efecto de like
  btnLike.addEventListener("click", function () {
    btnLike.classList.toggle("elements-name__place_like_active");
  });
  //Funcion para remover la card
  btnDelate.addEventListener("click", function () {
    card.remove();
  });
  cardImage.src = link;
  cardTitle.textContent = name;
  cardImage.alt = name;
  cardArea.append(card);
}
initialCards.forEach(function (element) {
  //bucle que se itera la cantidad de veces por los elementos que contenga el array
  cardGenerator(element.name, element.link);
});

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
