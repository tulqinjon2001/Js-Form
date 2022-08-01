/* <-- Second Homework --> */
var elForm = document.querySelector(".form-site");
var elFirstNmae = elForm.querySelector("firstname").trim();
var elMoney = elForm.querySelector(".input2-site").trim();
var TRAVEL_MONEY = 2000;

var elConvert = document.querySelector(".convert");

elForm.addEventListener("submit", function(evt) {
  evt.preventDefault();

  if (isNaN(elMoney.value)) {
    elConvert.textContent = "Son kiriting!";
  } else {
    if (elMoney.value >= TRAVEL_MONEY) {
      elConvert.textContent = "Yaxshi borib keling!";
    } else {
      elConvert.textContent = "Pulingiz yetmadi!";
    }
  }

})

/* <-- Second Homework --> */

var elFormIntro = document.querySelector(".form-intro");
var elPassagerName = elFormIntro.querySelector(".input1-intro").trim();
var elPassagerAge = elFormIntro.querySelector(".input2-intro").trim();

var elPassagertext = document.querySelector(".intro-text");

elFormIntro.addEventListener("submit", function(evt) {
  evt.preventDefault();

  if (isNaN(elPassagerAge.value)) {
    elPassagertext.textContent = "Please Enter your age";
  } else {
    if (elPassagerAge.value >= 60) {
      elPassagertext.textContent = "It's half price for you";
    } else {
      if (elPassagerAge.value >= 18) {
        elPassagertext.textContent = "At your cost";
      } else {
        if (elPassagerAge.value >= 7) {
          elPassagertext.textContent = "It's half price for you";
        } else {
          elPassagertext.textContent = "It's free for you!";
        }
      }
    }
  }
})