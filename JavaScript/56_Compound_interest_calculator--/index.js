            //Compound interest calculator

function calculate(){

    const amountId = document.getElementById("amountId");
    const rateId = document.getElementById("rateId");
    const yearsId = document.getElementById("yearsId");
    const spanTotal = document.getElementById("spanTotal");

    let principal = Number(amountId.value);
    let rate = Number(rateId.value / 100);
    let year = Number(yearsId.value);

    if(principal < 0 || isNaN(principal)){
        principal = 0;
        amountId.value = 0;
    }

    if(rate < 0 || isNaN(rate)){
        rate = 0;
        rateId.value = 0;
    }

    if(year < 0 || isNaN(year)){
        year = 0;
        yearsId.value = 0;
    }


    result = principal + (principal * (Math.pow((1 + rate), year) - 1));

    //spanTotal.textContent = `$` + result.toFixed(2)
    spanTotal.textContent = result.toLocaleString(undefined, 
                                                {style: "currency",
                                                 currency: "HUF" });

}