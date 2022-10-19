const d = document;

const $input = d.querySelectorAll("input");
const $inputEmail = d.querySelector(".email");
const $spanTop = d.querySelectorAll("#top");
const $inputInformationContact = d.querySelectorAll(".inputInformationContact");
const $inputCountry = d.querySelectorAll(".country");
const $buttonSubmit = d.querySelector("input[type=button]");


let inputContact = Array.from($input);
let spanTop = Array.from($spanTop);
let inputInformationContact = Array.from($inputInformationContact);
let inputCountry = Array.from($inputCountry);

let div = d.createElement("div");
let div2 = d.createElement("div");
let div3 = d.createElement("div");
let div4 = d.createElement("div");
let div5 = d.createElement("div");
let div6 = d.createElement("div");

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
      input.placeholder = ""; 
      $spanTop[0].classList.add("active");
    break;
    case "phone":
      input.placeholder = ""; 
      $spanTop[1].classList.add("active"); 
    break;
    case "name":
      input.placeholder = ""; 
      $spanTop[2].classList.add("active"); 
    break;
    case "address":
      input.placeholder = ""; 
      $spanTop[3].classList.add("active"); 
    break;
    case "city":
      input.placeholder = ""; 
      $spanTop[4].classList.add("active"); 
    break;
  }
}


function button(y){
  if(y){
    if($buttonSubmit.classList.contains("ok")){
      $buttonSubmit.classList.remove("ok");
    }
    $buttonSubmit.classList.add("error");
  }else{
    if($buttonSubmit.classList.contains("error")){
      $buttonSubmit.classList.remove("error");
    }
    $buttonSubmit.classList.add("ok");
  }

}

d.addEventListener("DOMContentLoaded", () =>{
  $buttonSubmit.classList.add("error");
})



d.addEventListener("click", (e) =>{
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

d.addEventListener( "keyup", (e) =>{
  let minlength = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  if (e.target.matches(".email")){
    if(!minlength.test(e.target.value)){
      div.classList.add("error");
      div.textContent = "Error. Al parecer este email no es valido. Vuelve a intentar";
      inputInformationContact[0].insertAdjacentElement("beforeend",div);
      button(true);
    }else{
      div.classList.remove("error");
      div.classList.add("ok");
      div.textContent = "Correcto";
      inputInformationContact[0].insertAdjacentElement("beforeend",div);
      button(false);
    } 
  }
  if (e.target.matches(".phone")){
    let number = /^\d{0,10}$/;
    if(!number.test(e.target.value) || e.target.value == ""){
      div2.classList.add("error");
      div2.textContent = "Número de télefono incorrecto (Solo # de télefono Colombiano)";
      inputInformationContact[1].insertAdjacentElement("beforeend",div2);
      button(true);
    }else{
      div2.classList.remove("error");
      div2.classList.add("ok");
      div2.textContent = "Correcto";
      inputInformationContact[1].insertAdjacentElement("beforeend",div2);
      button(false);
    } 
  }
  if (e.target.matches(".name")){
    let notLetter = /^([0-9])*$/;
    if(notLetter.test(e.target.value)){
      div3.classList.add("error");
      div3.textContent = "No se aceptan Números";
      inputInformationContact[2].insertAdjacentElement("beforeend",div3);
      button(true);
    }else{
      div3.classList.remove("error");
      div3.classList.add("ok");
      div3.textContent = "Correcto";
      inputInformationContact[2].insertAdjacentElement("beforeend",div3);
      button(false);
    } 
  }
  if (e.target.matches(".address")){
    if(e.target.value.length > 30){
      div4.classList.add("error");
      div4.textContent = "Direción muy larga, por favor ingrese una mas corta";
      inputInformationContact[3].insertAdjacentElement("beforeend",div4);
      button(true);
    }else{
      div4.classList.remove("error");
      div4.classList.add("ok");
      div4.textContent = "Correcto";
      inputInformationContact[3].insertAdjacentElement("beforeend",div4);
      button(false);
    } 
  }
  if (e.target.matches(".city")){
    let notLetter = /^([0-9])*$/;
    if(notLetter.test(e.target.value) || e.target.value.length < 4){
      div5.classList.add("error");
      div5.textContent = "No se aceptan Números";
      inputInformationContact[4].insertAdjacentElement("beforeend",div5);
      button(true);
    }else{
      div5.classList.remove("error");
      div5.classList.add("ok");
      div5.textContent = "Correcto";
      inputInformationContact[4].insertAdjacentElement("beforeend",div5);
      button(false);
    } 
  }
  if (e.target.matches(".codePostal")){
    let trueNumber = /^([0-9])*$/;
    if(!trueNumber.test(e.target.value) || e.target.value.length <= 6){
      div6.classList.add("error");
      div6.textContent = "Código Postal no valido";
      inputCountry[1].insertAdjacentElement("beforeend",div6);
      button(true);
    }else{
      div6.classList.remove("error");
      div6.classList.add("ok");
      div6.textContent = "Correcto";
      inputCountry[1].insertAdjacentElement("beforeend",div6);
      button(false);
    } 
  }
})