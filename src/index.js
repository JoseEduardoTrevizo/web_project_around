import "./page/index.css";
import Card from "./components/Card.js";
import FormValidator from "./components/FormValidator.js";
import {
  boton,
  btnAdd,
  inputAbout,
  inputName,
  profileName,
  profileAbout,
} from "./utils/utils.js";
import Section from "./components/Section.js";
import UserInfo from "./components/UserInfo.js";
import PopupWithForm from "./components/PopupWithForm.js";
import { cardGenerator } from "./utils/utils.js";
const formProfile = document.querySelector(".popup__container");
const formCards = document.querySelector("#popup_addCard");
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
//Instanciar para agregar imagenes con el handlerCardClick

const popupAddButton = new PopupWithForm(
  "#ventana_modal-add",
  (inputValues) => {
    const card = new Card(
      inputValues.name,
      inputValues.link,
      ".template-card",
      {
        handleCardClick: () => {
          popupImage.open(inputValues.name, inputValues.link);
        },
      }
    );
    cardArea.prepend(card.generateCard());
  }
);
const useInfo = new UserInfo(
  ".profile-info__avatar_name",
  ".profile-info__avatar_ocupation"
);
const popupProfile = new PopupWithForm("#ventana_modal", (inputValues) => {
  profileName.textContent = inputValues.name;
  profileAbout.textContent = inputValues.about;
  popupProfile.close();
});
boton.addEventListener("click", () => {
  popupProfile.open();
  const userData = useInfo.getUserInfo();
  inputName.textContent = userData.username;
  inputAbout.textContents = userData.job;
});
btnAdd.addEventListener("click", () => {
  popupAddButton.open();
});

const formValidatorProfile = new FormValidator(formProfile);
formValidatorProfile.enableValidation();
const formValidatorAddCard = new FormValidator(formCards);
formValidatorAddCard.enableValidation();

const sectionCards = new Section(
  {
    items: initialCards,
    renderer: (element) => {
      const newCard = cardGenerator(element.name, element.link);
      sectionCards.addItem(newCard);
    },
  },
  ".elements"
);

sectionCards.renderer();
