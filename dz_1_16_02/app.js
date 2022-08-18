const passportInput = document.querySelector(".passportInput");
const passportCheck = document.getElementsByClassName("passportCheck");
const passportResult = document.querySelector(".passportResult");

const passportValidate = /^0|1d{13}$/;

passportCheck[0].addEventListener("click", () => {
  if (passportValidate.test(passportInput.value)) {
    passportResult.innerText = "ok";
    passportResult.style.color = "green";
  } else {
    passportResult.innerText = "not  ok";
  }
});


const child = document.querySelector(".child");
let square = 0;
const motion = function (leftBlock) { 
  square++;
  child.style.left = `${square}px`;
    if (square < 50) {
      return motion();                    
    }else if (square > 350){
      square = 0;
   }else{
    square += 50;
   }
   leftBlock()
}
child.addEventListener('click', motion)