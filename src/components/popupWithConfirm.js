import Popup from "./Popup.js";

export default class popupWithConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }
  open(handleConfirm) {
    super.open();
    this._handleConfirm = handleConfirm;
  }
  setEventListeners() {
    super.setEventListeners();
    this._form = this._popupElement.querySelector("form");
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleConfirm();
      this.close();
    });
  }
}
