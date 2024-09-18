
// step-1 set even handler
document.getElementById("button-login")
.addEventListener("click", function(event){
    // step-2 prevent default behavior (reloading browser)
    event.preventDefault();
    console.log("click login button")

    // get the phone number
  
  const phoneNumber = document.getElementById("phone-number").value;
  console.log(phoneNumber)  
})