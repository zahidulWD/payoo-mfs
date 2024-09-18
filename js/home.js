// Add money to the account
// console.log("added home")


// step-1: add an event handler to the add money button inside the from

document.getElementById('btn-add-money')
    .addEventListener('click', function(event){
        event.preventDefault();
        
        // step-2: get money to be added to the account
        const addMoneyInput = document.getElementById("input-add-money").value;
        console.log(addMoneyInput);

        // step-3: get the pin number provided
        const pinNumberInput = document.getElementById("input-pin-number").value;
        console.log(pinNumberInput);
    })