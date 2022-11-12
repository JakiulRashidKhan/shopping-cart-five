function updateCasenumber(isIncrease){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString =caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);
    
    let newCaseNumber;
    if(isIncrease == true)
    {
         newCaseNumber =previousCaseNumber
        +1;
    }
    else{
         newCaseNumber =previousCaseNumber
    -1;
    }
    caseNumberField.value =newCaseNumber;
    return newCaseNumber;
}

function updateCaseTotal(newCaseNumber){
    const caseTotalPrice = newCaseNumber* 59;
   const caseTotal = document.getElementById('case-total');
   caseTotal.innerText = caseTotalPrice;
}


document.getElementById('btn-case-plus').addEventListener('click',function(){
   const newCaseNumber=updateCasenumber(true);
   updateCaseTotal(newCaseNumber);
   calculateSubTotal();
})

document.getElementById('btn-case-minus').addEventListener('click',function(){
    const newCaseNumber=updateCasenumber(false);
    updateCaseTotal(newCaseNumber);
    calculateSubTotal();
})