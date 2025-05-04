const header = document.querySelector("#header");
const errorTxt = document.querySelector("#errorTxt");

//first player Name 
const playerOneName = document.querySelector("#playerOneName");
const firstPlayerName = document.querySelector("#firstPlayerName");
const firstPlayerBtn = document.querySelector("#firstPlayerBtn");
//first player number
const playerOneNumber = document.querySelector("#playerOneNumber");
const firstPlayerNumberInput = document.querySelector("#firstPlayerNumber");
const firstPlayerNumberBtn = document.querySelector("#firstPlayerNumberBtn");

//second Player Name
const playerTwoName = document.querySelector("#playerTwoName");
const secondPlayerName = document.querySelector("#secondPlayerName");
const secondPlayerBtn = document.querySelector("#secondPlayerBtn");
//Second player number
const secondNumber = document.querySelector("#secondNumber");
const secondPlayerNumberinput = document.querySelector("#secondPlayerNumber");
const secondPlayerNumberBtn = document.querySelector("#secondPlayerNumberBtn");

// win or fail
const Win = document.querySelector("#Win");
const Failed = document.querySelector("#Failed");
const faildTxt = document.querySelector("#faildTxt");

//reply
const replay = document.querySelector("#replay");



firstPlayerBtn.addEventListener("click", () => {
  if (firstPlayerName.value !== "") {
    playerOneName.style.display = "none";
    errorTxt.style.display = "none";
    header.innerHTML = "Input A Number ";
    playerOneNumber.style.display = "block";
  } else {
    errorTxt.style.display = "block";
  }
});

//First player number input
firstPlayerNumberBtn.addEventListener("click", () => {
  const firstPlayerNumber = Number(firstPlayerNumberInput.value);

  if (firstPlayerNumber > -1 && firstPlayerNumber < 10) {
    playerOneNumber.style.display = "none"
    playerTwoName.style.display = "block"
    header.innerHTML = "Second Player Name ";
    errorTxt.style.display = "none";
  } else {
    errorTxt.innerHTML = "Invalid Number";
    errorTxt.style.display = "block";
  }
});

//second Player name
secondPlayerBtn.addEventListener("click", () => {
  if (secondPlayerName.value !== "") {
    playerTwoName.style.display = "none";
    secondNumber.style.display = "block";
    errorTxt.style.display = "none";
    header.innerHTML = "Guess The Number  ";

  } else {
    errorTxt.innerHTML = "Name is Missing";
    errorTxt.style.display = "block";
  }
});


//second player number Guess
const chances = [];
secondPlayerNumberBtn.addEventListener("click", () => {
  const secondPlayerNumber = Number(secondPlayerNumberinput.value);

  if (firstPlayerNumber.value == secondPlayerNumber) {
    secondNumber.style.display = "none";
    Win.style.display = "block";
    header.innerHTML=  `${secondPlayerName.value}`;
  } else {
    chances.push(secondPlayerNumber)
    console.log(chances);

    if (chances.length == 5) {
      secondNumber.style.display = "none";
      Failed.style.display = "block";
      header.innerHTML= `${firstPlayerName.value} 🎉 Congratulations! For Winging`;
      faildTxt.innerHTML = `${secondPlayerName.value} 😢 Bad Luck! For You`
    }
  }
});

replay.addEventListener("click", ()=>{
  playerOneName.style.display="block";
  Failed.style.display = "none";
  Win.style.display = "none"
  header.style.display = "block";

})