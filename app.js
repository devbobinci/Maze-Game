const nextBtn = document.querySelector(".next-button");
//svg mazes
const levelOne = document.querySelector(".level-one");
const levelTwo = document.querySelector(".level-two");
//Ui messages
const uiLevel = document.querySelector(".ui-level");
const uiMessage = document.querySelector(".ui-message");
//End Game
const spookyPicture = document.querySelector(".spooky-picture");
const screamSound = document.querySelector(".scream-sound");

const collisionCheck = (value) => {
  if (value === "maze-border") alert("You lost... Try again");
  if (value === "finish") {
    nextBtn.style.opacity = 1;
    nextBtn.style.pointerEvents = "all";
    levelOne.style.pointerEvents = "none";
  }
  if (value === "end-game") {
    screamSound.play();
    spookyPicture.style.display = "block";
    document.body.style.backgroundColor = "black";
  }
};

window.addEventListener("mousemove", (e) => {
  let check = e.target.classList.value;
  collisionCheck(check);
});

nextBtn.addEventListener("click", () => {
  levelOne.style.display = "none";
  levelTwo.style.display = "block";
  nextBtn.style.opacity = 0;
  nextBtn.style.pointerEvents = "none";
  uiLevel.textContent = "Level 2";
  uiMessage.textContent = "One more to go";
});
