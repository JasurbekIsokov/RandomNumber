document.querySelector(".message").textContent = "Sinab ko'ring";

let randomNum = Math.trunc(Math.random() * 20) + 1;

let kiruvchiMalumot;

let ball = 20;

// document.querySelector(".number").textContent = randomNum;

document.querySelector(".check").addEventListener("click", function () {
  kiruvchiMalumot = Number(document.querySelector(".guess").value);
  // document.querySelector(".number").textContent = kiruvchiMalumot;
});

// if (kiruvchiMalumot > randomNum) {
//   document.querySelector(".message").textContent = "Katta son kiritidingiz";
// } else if (kiruvchiMalumot < randomNum) {
//   document.querySelector(".message").textContent = "kichik son kiritidingiz";
// } else {
//   document.querySelector(".message").textContent = "Siz to'g'ri topdingiz ";
// }
document.addEventListener("keydown", function (e) {
  if (e.key == "Enter" && ball > 0) {
    kiruvchiMalumot = Number(document.querySelector(".guess").value);
    // document.querySelector(".number").textContent = kiruvchiMalumot;

    if (kiruvchiMalumot > randomNum) {
      document.querySelector(".message").textContent = "Katta son kiritidingiz";
      ball--;
      document.querySelector(".score").textContent = ball;
    } else if (kiruvchiMalumot < randomNum) {
      document.querySelector(".message").textContent =
        "kichik son kiritidingiz";
      ball--;
      document.querySelector(".score").textContent = ball;
    } else {
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".message").textContent = "Siz to'g'ri topdingiz ";
      document.querySelector("h1").textContent = "Siz to'g'ri topdingiz ";
      document.querySelector(".number").textContent = kiruvchiMalumot = Number(
        document.querySelector(".guess").value
      );

      document.querySelector(".score").textContent = ball;
      document.querySelector(".check").addEventListener("click", function () {
        kiruvchiMalumot = Number(document.querySelector(".guess").value);
        // document.querySelector(".number").textContent = kiruvchiMalumot;
      });
    }
    if (ball === 0) {
      document.querySelector("h1").textContent = "O'yin tugadi ";
      document.querySelector("body").style.backgroundColor = "#991111";

      document.querySelector(".again").addEventListener("click", function () {
        document.querySelector(".score").textContent = 20;
        document.querySelector("body").style.backgroundColor = " #222";
        // kiruvchiMalumot = Number(document.querySelector(".guess").value);
        // document.querySelector(".number").textContent = kiruvchiMalumot;
        document.querySelector(".number").textContent = "?";
        document.querySelector("h1").textContent = "Men o'ylagan sonni top";
        document.querySelector(".guess").value = "";
      });
    }
  }
});
