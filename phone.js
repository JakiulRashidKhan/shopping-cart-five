function updatePhonenumber(isIncrease){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString =phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);
    
    let newPhoneNumber;
    if(isIncrease == true)
    {
         newPhoneNumber =previousPhoneNumber
        +1;
    }
    else{
         newPhoneNumber =previousPhoneNumber
    -1;
    }
    phoneNumberField.value =newPhoneNumber;
    return newPhoneNumber;
}

function updatePhoneTotal(newPhoneNumber){
    const phoneTotalPrice = newPhoneNumber* 1219;
       const phoneTotal = document.getElementById('phone-total');
       phoneTotal.innerText = phoneTotalPrice;    
    }
document.getElementById('btn-phone-plus').addEventListener('click',function(){
   const newPhoneNumber=updatePhonenumber(true);
   updatePhoneTotal(newPhoneNumber);
   calculateSubTotal();
})

document.getElementById('btn-phone-minus').addEventListener('click',function(){
    const newPhoneNumber=updatePhonenumber(false);
    updatePhoneTotal(newPhoneNumber);
    calculateSubTotal();
})