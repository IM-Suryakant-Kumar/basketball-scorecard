let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

homeScore.textContent = 12; 
guestScore.textContent = 5; 

// Home score implementation
function home1() {
    homeScore.textContent = Number(homeScore.textContent) + 1; 
}
function home2() {
    homeScore.textContent = Number(homeScore.textContent) + 2; 
}
function home3() {
    homeScore.textContent = Number(homeScore.textContent) + 3; 
}

// Guest Score implementation
function guest1() {
    guestScore.textContent = Number(guestScore.textContent) + 1; 
}
function guest2() {
    guestScore.textContent = Number(guestScore.textContent) + 2; 
}
function guest3() {
    guestScore.textContent = Number(guestScore.textContent) + 3; 
}

// New game implementation
function newGame() {
    homeScore.textContent = 0; 
    guestScore.textContent = 0;
} 