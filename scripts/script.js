const modalOpacity = document.querySelector(".modalOpacity");
const popUpCloseButton = document.querySelector(".popUp__close-button");
const profileButtonedit = document.querySelector(".profile__button-edit");
const popupSubmit = document.querySelector(".popUp__submit");
const popupMe = document.querySelector("#me");
const popupAboutMe = document.querySelector("#aboutme");
const profileName = document.querySelector(".profile__Name");
const profileAboutMe = document.querySelector(".profile__aboutMe");
const popup = document.querySelector(".popUp");

function popupToggle(e) {
  modalOpacity.classList.toggle("modalOpacityOpen");
  popupMe.value = profileName.textContent;
  popupAboutMe.value = profileAboutMe.textContent;
  popupSubmit.disabled = true;
}

function changeInput() {
  const isTrue = popupMe.value === "" || popupAboutMe.value === "";
  popupSubmit.disabled = isTrue;
}

function popupEditNameAndAboutMe(e) {
  e.preventDefault();
  profileName.textContent = popupMe.value;
  profileAboutMe.textContent = popupAboutMe.value;
  popupToggle();
}

profileButtonedit.addEventListener("click", popupToggle);
popUpCloseButton.addEventListener("click", popupToggle);

popupSubmit.addEventListener("click", popupEditNameAndAboutMe);
popup.addEventListener("input", changeInput);

// profileButtonedit.addEventListener("click", function () {
//   modalOpacity.style.display = "flex";
//   console.log("funciona");
// });

// popUpCloseButton.addEventListener("click", function () {
//   modalOpacity.style.display = "none";
// });
