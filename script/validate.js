const formElements = document.querySelector(".popup__container");
function enableValidation() {
  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    setEventListener(form);
  });
}
function setEventListener(formElements) {
  const inputElement = Array.from(
    formElements.querySelectorAll(".popup__info")
  );
  const submitButton = formElements.querySelector("[type=submit]");
  toggleSubmitButton(inputElement, submitButton);
  inputElement.forEach((inputsElements) => {
    inputsElements.addEventListener("input", (event) => {
      if (!inputsElements.validity.valid) {
        inputsElements.classList.add("form__input_type_error");
        showErrorMessage(formElements, inputsElements);
      } else {
        inputsElements.classList.remove("form__input_type_error");
        hideErrorMessage(formElements, inputsElements);
      }
      toggleSubmitButton(inputElement, submitButton);
    });
  });
}
function showErrorMessage(formElements, inputsElements) {
  const errorNode = formElements.querySelector(
    `.popup__error_${inputsElements.name}`
  );

  errorNode.textContent = inputsElements.validationMessage;
}
function hideErrorMessage(formElements, inputsElements) {
  const errorNode = formElements.querySelector(
    `.popup__error_${inputsElements.name}`
  );
  errorNode.textContent = "";
}
function toggleSubmitButton(inputElement, submitButton) {
  const state = isFormValid(inputElement);
  if (!state) {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
}
function isFormValid(inputElement) {
  return inputElement.every((item) => {
    return item.validity.valid;
  });
}
enableValidation();
