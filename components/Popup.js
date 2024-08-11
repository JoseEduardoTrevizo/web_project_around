export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscCloseAux = this._handleEscClose.bind(this);
    this.setEventListeners();
  }
  open() {
    this._popupElement.style.display = "block";
  }
  close() {
    this._popupElement.style.display = "none";
  }
  _handleEscClose() {
    //Funcion para cerrar modal con tecla ESC
    window.addEventListener(
      "keyup",
      function (evt) {
        const esc = evt.keyCode || evt.which;
        if (esc == 27) {
          this._popupElement.style.display = "none";
        }
      },
      false
    );
  }
  setEventListeners() {
    //Funcion para cerrar el modal en superposicion
    window.addEventListener("click", function (e) {
      console.log(window);
      console.log(e);
      if (e.target == this._popupElement) {
        this._popupElement.style.display = "none";
        console.log(e);
      } else {
        false;
      }
    });
  }
}
