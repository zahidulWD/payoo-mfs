document.getElementById("btn-cash-out")
   .addEventListener("click", function(event){
    event.preventDefault();
    console.log("clicked cash-out btn")

    const cashOut = document.getElementById("input-cash-out").value;
    const cashOutNumber = parseFloat(cashOut);
    const pinNumber = document.getElementById("input-cash-out-pin").value;
    console.log(cashOut,pinNumber);

    // wrong way to verify pin number
    if( pinNumber === "1234"){
        
        const balance = document.getElementById("account-balance").innerText;
         const balanceNumber = parseFloat(balance);

        //  reduce the balace
        const newBalance = balanceNumber - cashOutNumber;
        console.log(newBalance);

        // update the UI
        document.getElementById("account-balance").innerText = newBalance;
    }else{
        alert("failed to cash out.please try again later")
    }
   });