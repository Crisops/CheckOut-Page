const d = document;

const $input = d.querySelectorAll("input");
const $inputEmail = d.querySelector(".email");
const $spanTop = d.querySelectorAll("#top");
const $inputInformationContact = d.querySelectorAll(".inputInformationContact");
const $inputCountry = d.querySelectorAll(".country");
const $buttonSubmit = d.querySelector("input[type=button]");
const $total = d.getElementById("totalShoppingProduct");



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


let totalShopping = 0;
// console.log(totalShopping);

let placeHolder = [
  "Enter your email...",
  "Enter your phone...",
  "Enter your Name...",
  "Your address...",
  "Your city...",
  "Your postal code..."
]


function topInput(clase,input){
  // console.log(clase);
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




function button(e){

  let $input = d.querySelectorAll("input");
  let inputContact = Array.from($input);
  const $select = d.querySelector("select").value;
  
  let error = 0;

  if (inputContact[0].value == "") {
    error ++;
  }

  if (inputContact[1].value == "") {
    error ++;
  }

  if (inputContact[2].value == "") {
    error ++;
  }

  if (inputContact[3].value == "") {
    error ++;
  }

  if (inputContact[4].value == "") {
    error ++;
  }

  if (inputContact[5].value == "") {
    error ++;
  }

  if($select == "0"){
    error ++;
  }

  // console.log(error);

  if(error == 0){
    if($buttonSubmit.classList.contains("error")){
      $buttonSubmit.classList.remove("error");
    }
    $buttonSubmit.classList.add("ok");
    if(e == "Enter"){
      Swal.fire({
        icon: 'success',
        title: 'Datos Enviados',
        text: 'Su producto llegara en 3 días',
      })
    }
  }else{
    if($buttonSubmit.classList.contains("ok")){
      $buttonSubmit.classList.remove("ok");
    }
    $buttonSubmit.classList.add("error");
    if(e == "Enter"){
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor llene el formulario',
      })
    }
  }

}

d.addEventListener("DOMContentLoaded", () =>{
  $buttonSubmit.classList.add("error");
})

d.addEventListener("change", (e) =>{
  if (e.target.matches(".select")) {
    button();
  }
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

  if(e.target.matches("#minus")){
    let envio;
    let inputProductOne = d.getElementById("productOne");
    inputProductOne.value -= 1
    if (inputProductOne.value < 1) {
      envio = 0;
      if(inputProductOne.value == 0){
        totalShopping -=  54.99;
      }
      inputProductOne.value = 0
      if (totalShopping < 0) {
        totalShopping = 0;
      }
    }else{
      envio = 19;
      totalShopping -=  54.99;
    }
    $total.textContent = `$${Number((totalShopping + envio).toFixed(2))}`;
  }

  if(e.target.matches("#add")){
    let envio = 19;
    let inputProductOne = d.getElementById("productOne");
    inputProductOne.value =  Number(inputProductOne.value) + 1;
    totalShopping += 54.99;
    $total.textContent = `$${Number((totalShopping + envio).toFixed(2))}`;
  }

  if(e.target.matches("#minusTwo")){
    let envio = 0;
    let inputProductTwo = d.getElementById("productTwo");
    inputProductTwo.value -= 1
    if (inputProductTwo.value < 1) {
      envio = 0;
      if(inputProductTwo.value == 0){
        totalShopping -=  74.99;
      }
      inputProductTwo.value = 0
      if (totalShopping < 0) {
        totalShopping = 0;
      }
    }else{
      envio = 19;
      totalShopping -= 74.99;
    }
    $total.textContent = `$${Number((totalShopping + envio).toFixed(2))}`;
  }

  if(e.target.matches("#addTwo")){
    let envio = 19;
    let inputProductTwo = d.getElementById("productTwo");
    inputProductTwo.value =  Number(inputProductTwo.value) + 1;
    totalShopping += 74.99;
    $total.textContent = `$${Number((totalShopping + envio).toFixed(2))}`;
  }

  if(e.target.matches(".submit.error")){
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Por favor llene el formulario',
    })
  }

  if(e.target.matches(".submit.ok")){
    Swal.fire({
      icon: 'success',
      title: 'Datos Enviados',
      text: 'Su producto llegara en 3 días',
    })
  }

})

d.addEventListener( "keyup", (e) =>{

  if (e.key == "Enter") {
    button(e.key);
  }



  let minlength = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  if (e.target.matches(".email")){
    if(!minlength.test(e.target.value)){
      div.classList.add("error");
      div.textContent = "Error. Al parecer este email no es valido. Vuelve a intentar";
      inputInformationContact[0].insertAdjacentElement("beforeend",div);
      button();
    }else{
      div.classList.remove("error");
      div.classList.add("ok");
      div.textContent = "Correcto";
      inputInformationContact[0].insertAdjacentElement("beforeend",div);
      button();
    } 
  }
  if (e.target.matches(".phone")){
    let number = /^\d{0,10}$/;
    if(!number.test(e.target.value) || e.target.value == ""){
      div2.classList.add("error");
      div2.textContent = "Número de télefono incorrecto (Solo # de télefono Colombiano)";
      inputInformationContact[1].insertAdjacentElement("beforeend",div2);
      button();
    }else{
      div2.classList.remove("error");
      div2.classList.add("ok");
      div2.textContent = "Correcto";
      inputInformationContact[1].insertAdjacentElement("beforeend",div2);
      button();
    } 
  }
  if (e.target.matches(".name")){
    let notLetter = /^([0-9])*$/;
    if(notLetter.test(e.target.value)){
      div3.classList.add("error");
      div3.textContent = "No se aceptan Números";
      inputInformationContact[2].insertAdjacentElement("beforeend",div3);
      button();
    }else{
      div3.classList.remove("error");
      div3.classList.add("ok");
      div3.textContent = "Correcto";
      inputInformationContact[2].insertAdjacentElement("beforeend",div3);
      button();
    } 
  }
  if (e.target.matches(".address")){
    if(e.target.value.length > 30){
      div4.classList.add("error");
      div4.textContent = "Direción muy larga, por favor ingrese una mas corta";
      inputInformationContact[3].insertAdjacentElement("beforeend",div4);
      button();
    }else{
      div4.classList.remove("error");
      div4.classList.add("ok");
      div4.textContent = "Correcto";
      inputInformationContact[3].insertAdjacentElement("beforeend",div4);
      button();
    } 
  }
  if (e.target.matches(".city")){
    let notLetter = /^([0-9])*$/;
    if(notLetter.test(e.target.value) || e.target.value.length < 4){
      div5.classList.add("error");
      div5.textContent = "No se aceptan Números";
      inputInformationContact[4].insertAdjacentElement("beforeend",div5);
      button();
    }else{
      div5.classList.remove("error");
      div5.classList.add("ok");
      div5.textContent = "Correcto";
      inputInformationContact[4].insertAdjacentElement("beforeend",div5);
      button();
    } 
  }
  if (e.target.matches(".codePostal")){
    let trueNumber = /^([0-9])*$/;
    if(!trueNumber.test(e.target.value) || e.target.value.length <= 6){
      div6.classList.add("error");
      div6.textContent = "Código Postal no valido";
      inputCountry[1].insertAdjacentElement("beforeend",div6);
    }else{
      div6.classList.remove("error");
      div6.classList.add("ok");
      div6.textContent = "Correcto";
      inputCountry[1].insertAdjacentElement("beforeend",div6);
      button();
    } 
  }
})