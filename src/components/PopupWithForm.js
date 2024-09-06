import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, callBack) {
    super(popupSelector);
    this._submitCallback = callBack;
  }
  _getInputValues() {
    const inputValues = {};
    const form = this._popupElement.querySelector("form");
    Array.from(form.querySelectorAll("input")).forEach((input) => {
      inputValues[input.name] = input.value;
    });

    return inputValues;
  }
  setEventListeners() {
    super.setEventListeners();
    const form = this._popupElement.querySelector("form");
    form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      form.querySelector(
        ".changeProfile__savePicture, .popupDelate__button, .popup__info_submit"
      ).textContent = "Guardando...";

      this._submitCallback(this._getInputValues()).then(() => {
        form.querySelector(
          ".changeProfile__savePicture, .popupDelate__button, .popup__info_submit"
        ).textContent = "Guardar";
        form.reset();
        this.close();
      });
    });
  }
  close() {
    const form = this._popupElement.querySelector("form");
    super.close();
    form.reset();
  }
}
