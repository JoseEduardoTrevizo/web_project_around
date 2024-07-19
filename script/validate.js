//Selecciono los elementos necesarios del formulario
/*
const formElements = document.querySelector(".popup__container");
const inputElement = Array.from(formElements.querySelectorAll(".popup__info"));
const submitButton = formElements.querySelector(".popup__info_submit");
const showInputError = (element) => {
  element.classList.add("form__input_type_error");
};
const hideInputError = (element) => {
  element.classList.remove("form__input_type_error");
};
inputElement.forEach((inputsElements) => {
  inputsElements.addEventListener("input", function () {
    const errorNode = formElements.querySelector(
      `.input__error_${inputsElements.name}`
    );
    if (!inputsElements.validity.valid) {
      showInputError(inputsElements);
      console.log(showInputError);
      if (errorNode) {
        errorNode.textContent = inputsElements.validationMessage;
      }
    } else {
      hideInputError(inputsElements);
      console.log(hideInputError);
      if (errorNode) {
        errorNode.textContent = "";
      }
    }
    const isInvalid = inputElement.some((item) => {
      return !item.validity.valid;
    });

    if (isInvalid) {
      submitButton.disabled = true;
    } else {
      submitButton.disabled = false;
    }
  });
});
*/
const formElements = document.querySelector(".popup__container");
function enableValidation() {
  const forms = document.querySelectorAll("form");
  console.log(forms);
  forms.forEach((form) => {
    setEventListener(form);
    console.log(form);
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
    console.log(inputElement);
    console.log(item);
    return item.validity.valid;
  });
}
enableValidation();
