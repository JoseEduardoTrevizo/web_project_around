const modal = document.getElementById("ventana_modal");
const boton = document.getElementById("btn_open_modal"); //boton que abre el modal
const cerrar = document.getElementById("btn_close_modal"); //boton que cierra el modal
const save = document.getElementById("btn_save");
const modalAdd = document.querySelector("#ventana_modal-add");
const btnAdd = document.querySelector(".profile__button-add");
const btnClose = document.querySelector("#btn_close_modal-add");
const formCreate = document.querySelector(".popup-add__container");
const popupProfile = document.querySelector("#popup_profile");
const profileName = document.querySelector(".profile-info__avatar_name");
const profileAbout = document.querySelector(".profile-info__avatar_ocupation");
const inputName = document.querySelector("#input_name");
const inputAbout = document.querySelector("#input_about");
const formProfile = document.querySelector(".popup__container");
const formCards = document.querySelector("#popup_addCard");
const template = document.querySelector(".template-card");
const cardArea = document.querySelector(".elements");
const nameInput = document.querySelector(".popup-add__create_name");
const linkInput = document.querySelector(".popup-add__create_link");
const placeImage = document.querySelector(".elements-card__element_image");
const placeTitle = document.querySelector(".elements-name__place");
const btnCreate = document.querySelector("#btn_save-add");

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
  const Image = document.querySelector(".modalImage");
  const closeImage = document.querySelector(".modalImage__close");
  const openImage = document.querySelector(".modalImage__open");
  const titleImage = document.querySelector(".modalImage__description");

  //Funcion para crear el efecto de like
  btnLike.addEventListener("click", function () {
    btnLike.classList.toggle("elements-name__place_like_active");
  });
  //Funcion para remover la card
  btnDelate.addEventListener("click", function () {
    card.remove();
  });
  cardImage.addEventListener("click", function (evt) {
    Image.style.display = "block";
    openImage.src = link;
    titleImage.textContent = name;
  });
  closeImage.addEventListener("click", function (evt) {
    Image.style.display = "none";
  });

  cardImage.src = link;
  cardTitle.textContent = name;
  cardImage.alt = name;

  return card;
}
initialCards.forEach(function (element) {
  //bucle que se itera la cantidad de veces por los elementos que contenga el array
  const newCard = cardGenerator(element.name, element.link);
  cardArea.append(newCard);
});
// Seccion popup profile
boton.addEventListener("click", function (evt) {
  modal.style.display = "block";
});
cerrar.addEventListener("click", function () {
  modal.style.display = "none";
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

btnCreate.addEventListener("click", function () {
  card.add();
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
