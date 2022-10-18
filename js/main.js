const d = document;

const $input = d.querySelectorAll("input");
const $inputEmail = d.querySelector(".email");
const $spanTop = d.querySelectorAll("#top");

let inputContact = Array.from($input);
let spanTop = Array.from($spanTop);


let placeHolder = [
  "Enter your email...",
  "Enter your phone...",
  "Enter your Name...",
  "Your address...",
  "Your city...",
  "Your postal code..."
]



function topInput(clase,input){
  console.log(clase);
  switch (clase) {
    case "email":
      input.placeholder = " "; 
      $spanTop[0].classList.add("active");
      console.log(input);
    break;
    case "phone":
      input.placeholder = " "; 
      $spanTop[1].classList.add("active"); 
    break;
  }
}

d.addEventListener("click", (e) =>{

  // if(e.target == $inputEmail){
  //   $inputEmail.placeholder = " ";
  //   $spanEmail.classList.add("active");
  // }else{
  //   $inputEmail.placeholder = "Enter your email...";
  //   $spanEmail.classList.remove("active");
  // }
  if(e.target.localName != "input" ){
    spanTop.forEach((span)=>{
      span.classList.remove("active");
    })
    inputContact.forEach((input,idx) =>{
      inputContact[idx].placeholder = placeHolder[idx];
    })
    
  }

  if(e.target.localName == "input"){
    inputContact.forEach((input) =>{
      if (e.target.className == input.className) {
        topInput(e.target.className,input); 
      }
    })
  
  }
})