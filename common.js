
    

    function getTotalValue(valueTotal){
        const valueTotalElement = document.getElementById(valueTotal);
        const currentValueTotalString = valueTotalElement.innerText;
        const currentValueTotal = parseInt(currentValueTotalString);
        return currentValueTotal;
    }

    function calculateValueTotal(elementId,value){
        const valueTotal =document.getElementById(elementId);
        valueTotal.innerText =value;
    }

    function calculateSubTotal(){
        const currentPhoneTotal =getTotalValue('phone-total');
        const currentCaseTotal = getTotalValue('case-total');
     
        const currentsubTotal = currentPhoneTotal+currentCaseTotal;
        calculateValueTotal('sub-total',currentsubTotal);
        

        const taxAmountString = (currentsubTotal *0.1).toFixed(2);
        const taxAmount =parseFloat(taxAmountString)
        calculateValueTotal('tax',taxAmount);


        const total = currentsubTotal+taxAmount;
        calculateValueTotal('total',total);
        
    }

    