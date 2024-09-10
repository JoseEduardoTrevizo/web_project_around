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
  imageAvatar,
  avatarInput,
  popupEdit,
  openPopupEdit,
  changeProfile,
} from "./utils/utils.js";
import popupWithConfirm from "./components/popupWithConfirm.js";
import Section from "./components/Section.js";
import UserInfo from "./components/UserInfo.js";
import PopupWithForm from "./components/PopupWithForm.js";
import PopupWithImage from "./components/PopupWithImage.js";
import { cardGenerator } from "./utils/utils.js";
import api from "./components/API.JS";
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

const avatarNode = document.querySelector(".profile__avatar");
let currentUser = null;
let sectionCards = null;

const useInfo = new UserInfo(
  ".profile-info__avatar_name",
  ".profile-info__avatar_ocupation"
);

api.getUserInfo().then((user) => {
  currentUser = user;
  useInfo.setUserInfo({ username: user.name, job: user.about });
  avatarNode.src = user.avatar;
  api.getInitialCards().then((cards) => {
    sectionCards = new Section(
      {
        items: cards,
        renderer: (element) => {
          const newCard = cardGenerator(
            element.name,
            element.link,
            currentUser,
            element
          );

          sectionCards.addItem(newCard);
        },
      },
      ".elements"
    );

    sectionCards.renderer();
  });
});
//Instanciar para agregar imagenes con el handlerCardClick
const popupImageCard = new PopupWithImage("#popup_add");

const popupAddButton = new PopupWithForm(
  "#ventana_modal-add",
  (inputValues) => {
    return api
      .createCard(inputValues.link, inputValues.name)
      .then((cardData) => {
        const card = cardGenerator(
          cardData.name,
          cardData.link,
          currentUser,
          cardData
        );

        cardArea.prepend(card);
      });
  }
);

const popupProfile = new PopupWithForm("#ventana_modal", (inputValues) => {
  return api.updateProfile(inputValues.name, inputValues.about).then((user) => {
    console.log(useInfo);
    useInfo.setUserInfo({ username: user.name, job: user.about });
    popupProfile.close();
  });
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

const popupAvatar = new PopupWithForm(".changeProfile", (inputValues) => {
  return api.editAvatar(inputValues.avatar).then((users) => {
    imageAvatar.src = users.avatar;
    avatarInput.value = "";
    popupAvatar.close();
  });
});

popupEdit.addEventListener("click", () => {
  popupAvatar.open();
});

const formValidatorProfile = new FormValidator(formProfile);
formValidatorProfile.enableValidation();
const formValidatorAddCard = new FormValidator(formCards);
formValidatorAddCard.enableValidation();
