
// step-1 set even handler
document.getElementById("button-login")
.addEventListener("click", function(event){
    // step-2 prevent default behavior (reloading browser)
    event.preventDefault();
    // console.log("click login button")

    // step-3 get the phone number  and pin number
  const phoneNumber = document.getElementById("phone-number").value;
  const pinNumber = document.getElementById("pin-number").value;
  console.log(phoneNumber,pinNumber)
  
   // step-4 validate phone ans pin
    // good system na.....just

   if (phoneNumber === '5' && pinNumber ==='1234'){
    console.log("You are logged in");
    window.location.href ='/home.html';
   }else{
    alert("wrong phone number or pin")
   } 
})