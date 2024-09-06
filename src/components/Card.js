import { openImagePopup } from "../utils/utils.js";

export default class Card {
  constructor(
    name,
    link,
    template,
    user,
    cardData,
    { handleCardClick, handleDelateCard, handleAddLike, handleRemoveLike }
  ) {
    this._name = name;
    this._link = link;
    this._template = template;
    this._user = user;
    this._cardData = cardData;
    this._handleCardClick = handleCardClick;
    this._handleDelateCard = handleDelateCard;
    this._handleAddLike = handleAddLike;
    this._handleRemoveLike = handleRemoveLike;
  }
  _getTemplate() {
    const cardElement = document
      .querySelector(this._template)
      .content.querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }
  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector(".elements-card__element_image").src =
      this._link;
    this._element.querySelector(".elements-name__place").textContent =
      this._name;
    this._setEventListeners();

    const trashButton = this._element.querySelector(
      ".elements-card__element_trash"
    );
    const likeButton = this._element.querySelector(
      ".elements-name__place_like"
    );

    if (this._user._id !== this._cardData.owner._id) {
      trashButton.style.display = "none";
    }

    if (this._cardData.likes.some((like) => like._id === this._user._id)) {
      likeButton.classList.add(".elements-name__place_like_active");
    }

    const counter = this._element.querySelector(".element__counter");
    counter.textContent = this._cardData.likes.length;

    return this._element;
  }

  _handlerOpenPopup() {
    openImagePopup(this._name, this._link);
  }

  _handlerLike() {
    const counter = this._element.querySelector(".element__counter");
    if (this._cardData.likes.some((like) => like._id === this._user._id)) {
      this._handleRemoveLike(this._cardData._id).then((card) => {
        this._cardData = card;
        this._element
          .querySelector(".elements-name__place_like")
          .classList.remove("elements-name__place_like_active");
        counter.textContent = this._cardData.likes.length;
      });
    } else {
      this._handleAddLike(this._cardData._id).then((card) => {
        this._cardData = card;
        this._element
          .querySelector(".elements-name__place_like")
          .classList.add("elements-name__place_like_active");
        counter.textContent = this._cardData.likes.length;
      });
    }
  }
  _handleRemove() {
    this._handleDelateCard(this._cardData._id, () => {
      this.removeCard = this._element.remove();
    });
  }
  _setEventListeners() {
    this._element
      .querySelector(".elements-card__element_image")
      .addEventListener("click", () => {
        this._handleCardClick(this._name, this._link);
      });
    this._element
      .querySelector(".elements-card__element_trash")
      .addEventListener("click", () => {
        this._handleRemove();
      });
    this._element
      .querySelector(".elements-name__place_like")
      .addEventListener("click", () => {
        this._handlerLike();
      });
  }
}
