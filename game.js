let cookies = 0;
let cookiesPerClick = 1;
let cursors = 0;
const cursorCost = 10;

const cookieElement = document.getElementById("cookie");
const cookieCountText = document.getElementById("cookie-count");
const cursorButton = document.getElementById("buy-cursor");
const cursorCountText = document.getElementById("cursor-count");
const resetButton = document.getElementById("reset-game");

cookieElement.addEventListener("click", () => {
  cookies += cookiesPerClick;
  updateDisplay();
});

cursorButton.addEventListener("click", () => {
  if (cookies >= cursorCost) {
    cookies -= cursorCost;
    cursors += 1;
    cookiesPerClick += 1;
    updateDisplay();
  } else {
    alert("Not enough cookies!");
  }
});

resetButton.addEventListener("click", () => {
  if (confirm("Are you sure you want to reset your progress?")) {
    cookies = 0;
    cookiesPerClick = 1;
    cursors = 0;
    updateDisplay();
  }
});

function updateDisplay() {
  cookieCountText.textContent = `Cookies: ${cookies}`;
  cursorCountText.textContent = `Cursors: ${cursors}`;
}
