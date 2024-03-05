/* Scripting for the USD Currency Counter: */


/* Grab element references: */

/* Form element reference: */
const USDCurrencyCounter = document.querySelector("#USDCurrencyCounter");

/* Coins quantity input references: */
const OneCentQuantityInput = document.querySelector("#OneCentQuantityInput");
const FiveCentsQuantityInput = document.querySelector("#FiveCentsQuantityInput");
const TenCentsQuantityInput = document.querySelector("#TenCentsQuantityInput");
const TwentyFiveCentsQuantityInput = document.querySelector("#TwentyFiveCentsQuantityInput");
const FiftyCentsQuantityInput = document.querySelector("#FiftyCentsQuantityInput");
const OneHundredCentsQuantityInput = document.querySelector("#OneHundredCentsQuantityInput");

/* Coins total value output references: */
const OneCentTotalValueOutput = document.querySelector("#OneCentTotalValueOutput");
const FiveCentsTotalValueOutput = document.querySelector("#FiveCentsTotalValueOutput");
const TenCentsTotalValueOutput = document.querySelector("#TenCentsTotalValueOutput");
const TwentyFiveCentsTotalValueOutput = document.querySelector("#TwentyFiveCentsTotalValueOutput");
const FiftyCentsTotalValueOutput = document.querySelector("#FiftyCentsTotalValueOutput");
const OneHundredCentsTotalValueOutput = document.querySelector("#OneHundredCentsTotalValueOutput");

/* All coins total quantity output reference: */
const CoinsTotalQuantityOutput = document.querySelector("#CoinsTotalQuantityOutput");

/* All coins total value output reference: */
const CoinsTotalValueOutput = document.querySelector("#CoinsTotalValueOutput");

/* Banknotes quantity input references: */
const OneDollarQuantityInput = document.querySelector("#OneDollarQuantityInput");
const TwoDollarsQuantityInput = document.querySelector("#TwoDollarsQuantityInput");
const FiveDollarsQuantityInput = document.querySelector("#FiveDollarsQuantityInput");
const TenDollarsQuantityInput = document.querySelector("#TenDollarsQuantityInput");
const TwentyDollarsQuantityInput = document.querySelector("#TwentyDollarsQuantityInput");
const FiftyDollarsQuantityInput = document.querySelector("#FiftyDollarsQuantityInput");
const OneHundredDollarsQuantityInput = document.querySelector("#OneHundredDollarsQuantityInput");

/* Banknotes total value output references: */
const OneDollarTotalValueOutput = document.querySelector("#OneDollarTotalValueOutput");
const TwoDollarsTotalValueOutput = document.querySelector("#TwoDollarsTotalValueOutput");
const FiveDollarsTotalValueOutput = document.querySelector("#FiveDollarsTotalValueOutput");
const TenDollarsTotalValueOutput = document.querySelector("#TenDollarsTotalValueOutput");
const TwentyDollarsTotalValueOutput = document.querySelector("#TwentyDollarsTotalValueOutput");
const FiftyDollarsTotalValueOutput = document.querySelector("#FiftyDollarsTotalValueOutput");
const OneHundredDollarsTotalValueOutput = document.querySelector("#OneHundredDollarsTotalValueOutput");

/* All banknotes total quantity output reference: */
const BanknotesTotalQuantityOutput = document.querySelector("#BanknotesTotalQuantityOutput");

/* All banknotes total value output reference: */
const BanknotesTotalValueOutput = document.querySelector("#BanknotesTotalValueOutput");

/* All coins and banknotes total quantity output reference: */
const CoinsAndBanknotesTotalQuantityOutput = document.querySelector("#CoinsAndBanknotesTotalQuantityOutput")

/* All coins and banknotes total value output reference: */
const CoinsAndBanknotesTotalValueOutput = document.querySelector("#CoinsAndBanknotesTotalValueOutput");

/* Calculate button reference: */
const Calculate = document.querySelector("#Calculate");

/* Reset button reference: */
const Reset = document.querySelector("#Reset");


/* Custom functions: */

/* Calucate total value of a denomination: */
function DenominationTotalValue(value, quantity) {
    quantity = Number(quantity);
    let TotalValue = value * quantity;
    TotalValue = TotalValue.toFixed(2);
    TotalValue = Number(TotalValue);
    return TotalValue;
}

/* Convert quantity to US format: */
function USFormat(quantity) {
    quantity = quantity.toLocaleString('en-US');
    return quantity;
}

/* Convert value to USD format: */
function USDFormat(value) {
    value = value.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      });
    return value;
}

/* Calculate and display all values and quantites: */
function CalculateAll() {
    /* Verify validity: */
    if (USDCurrencyCounter.reportValidity()) {

        /* If the inputs are valid: */
        
        /* Grab the total value for each denomination: */

        /* Grab the total value for each coin denomination: */
        let OneCentTotalValue = DenominationTotalValue(0.01, OneCentQuantityInput.value);
        let FiveCentsTotalValue = DenominationTotalValue(0.05, FiveCentsQuantityInput.value);
        let TenCentsTotalValue = DenominationTotalValue(0.10, TenCentsQuantityInput.value);
        let TwentyFiveCentsTotalValue = DenominationTotalValue(0.25, TwentyFiveCentsQuantityInput.value);
        let FiftyCentsTotalValue = DenominationTotalValue(0.50, FiftyCentsQuantityInput.value);
        let OneHundredCentsTotalValue = DenominationTotalValue(1.00, OneHundredCentsQuantityInput.value);
    
        /* Grab the total value for each banknote denomination: */
        let OneDollarTotalValue = DenominationTotalValue(1.00, OneDollarQuantityInput.value);
        let TwoDollarsTotalValue = DenominationTotalValue(2.00, TwoDollarsQuantityInput.value);
        let FiveDollarsTotalValue = DenominationTotalValue(5.00, FiveDollarsQuantityInput.value);
        let TenDollarsTotalValue = DenominationTotalValue(10.00, TenDollarsQuantityInput.value);
        let TwentyDollarsTotalValue = DenominationTotalValue(20.00, TwentyDollarsQuantityInput.value);
        let FiftyDollarsTotalValue = DenominationTotalValue(50.00, FiftyDollarsQuantityInput.value);
        let OneHundredDollarsTotalValue = DenominationTotalValue(100.00, OneHundredDollarsQuantityInput.value);

        /* Calculate total quantity of all coins: */
        let CoinsTotalQuantity = Number(OneCentQuantityInput.value) + Number(FiveCentsQuantityInput.value) + Number(TenCentsQuantityInput.value) + Number(TwentyFiveCentsQuantityInput.value) + Number(FiftyCentsQuantityInput.value) + Number(OneHundredCentsQuantityInput.value);
        CoinsTotalQuantity = CoinsTotalQuantity.toFixed(0);
        CoinsTotalQuantity = Number(CoinsTotalQuantity);

        /* Calculate total value of all coins: */
        let CoinsTotalValue = OneCentTotalValue + FiveCentsTotalValue + TenCentsTotalValue + TwentyFiveCentsTotalValue + FiftyCentsTotalValue + OneHundredCentsTotalValue;
        CoinsTotalValue = CoinsTotalValue.toFixed(2);
        CoinsTotalValue = Number(CoinsTotalValue);

        /* Calculate total quantity of all banknotes: */
        let BanknotesTotalQuantity = Number(OneDollarQuantityInput.value) + Number(TwoDollarsQuantityInput.value) + Number(FiveDollarsQuantityInput.value) + Number(TenDollarsQuantityInput.value) + Number(TwentyDollarsQuantityInput.value) + Number(FiftyDollarsQuantityInput.value) + Number(OneHundredDollarsQuantityInput.value);
        BanknotesTotalQuantity = BanknotesTotalQuantity.toFixed(0);
        BanknotesTotalQuantity = Number(BanknotesTotalQuantity);

        /* Calculate total value of all banknotes: */
        let BanknotesTotalValue = OneDollarTotalValue + TwoDollarsTotalValue + FiveDollarsTotalValue + TenDollarsTotalValue + TwentyDollarsTotalValue + FiftyDollarsTotalValue + OneHundredDollarsTotalValue;
        BanknotesTotalValue = BanknotesTotalValue.toFixed(2);
        BanknotesTotalValue = Number(BanknotesTotalValue);

        /* Calculate total quantity of all coins and banknotes: */
        let CoinsAndBanknotesTotalQuantity = CoinsTotalQuantity + BanknotesTotalQuantity;
        CoinsAndBanknotesTotalQuantity = CoinsAndBanknotesTotalQuantity.toFixed(0);
        CoinsAndBanknotesTotalQuantity = Number(CoinsAndBanknotesTotalQuantity);
    
        /* Calculate total value of all coins and banknotes: */
        let CoinsAndBanknotesTotalValue = CoinsTotalValue + BanknotesTotalValue;
        CoinsAndBanknotesTotalValue = CoinsAndBanknotesTotalValue.toFixed(2);
        CoinsAndBanknotesTotalValue = Number(CoinsAndBanknotesTotalValue);


        /* Print outputs: */

        /* Print coin total value outputs: */
        OneCentTotalValueOutput.textContent = `${USDFormat(OneCentTotalValue)}`;
        FiveCentsTotalValueOutput.textContent = `${USDFormat(FiveCentsTotalValue)}`;
        TenCentsTotalValueOutput.textContent = `${USDFormat(TenCentsTotalValue)}`;
        TwentyFiveCentsTotalValueOutput.textContent = `${USDFormat(TwentyFiveCentsTotalValue)}`;
        FiftyCentsTotalValueOutput.textContent = `${USDFormat(FiftyCentsTotalValue)}`;
        OneHundredCentsTotalValueOutput.textContent = `${USDFormat(OneHundredCentsTotalValue)}`;
        
        /* Print total coins quantity output: */
        CoinsTotalQuantityOutput.textContent = `${USFormat(CoinsTotalQuantity)}`;

        /* Print total coins value output: */
        CoinsTotalValueOutput.textContent = `${USDFormat(CoinsTotalValue)}`;

        /* Print banknote total value outputs: */
        OneDollarTotalValueOutput.textContent = `${USDFormat(OneDollarTotalValue)}`;
        TwoDollarsTotalValueOutput.textContent = `${USDFormat(TwoDollarsTotalValue)}`;
        FiveDollarsTotalValueOutput.textContent = `${USDFormat(FiveDollarsTotalValue)}`;
        TenDollarsTotalValueOutput.textContent = `${USDFormat(TenDollarsTotalValue)}`;
        TwentyDollarsTotalValueOutput.textContent = `${USDFormat(TwentyDollarsTotalValue)}`;
        FiftyDollarsTotalValueOutput.textContent = `${USDFormat(FiftyDollarsTotalValue)}`;
        OneHundredDollarsTotalValueOutput.textContent = `${USDFormat(OneHundredDollarsTotalValue)}`;

        /* Print total banknotes quantity output: */
        BanknotesTotalQuantityOutput.textContent = `${USFormat(BanknotesTotalQuantity)}`;

        /* Print total banknotes value output: */
        BanknotesTotalValueOutput.textContent = `${USDFormat(BanknotesTotalValue)}`;
        
        /* Print total coins and banknotes quantity output: */
        CoinsAndBanknotesTotalQuantityOutput.textContent = `${USFormat(CoinsAndBanknotesTotalQuantity)}`;

        /* Print total coins and banknotes value output: */
        CoinsAndBanknotesTotalValueOutput.textContent = `${USDFormat(CoinsAndBanknotesTotalValue)}`;

    } else {
        /* Reset all outputs if input(s) are invalid: */
        ResetAll();
    }        
}

/* Reset all outputs, and if used on the Reset button, reset all inputs too: */
function ResetAll() {
    /* Reset all outputs back to default in addition to default behavior when attached to the Reset button: */
    OneCentTotalValueOutput.textContent = "";
    FiveCentsTotalValueOutput.textContent = "";
    TenCentsTotalValueOutput.textContent = "";
    TwentyFiveCentsTotalValueOutput.textContent = "";
    FiftyCentsTotalValueOutput.textContent = "";
    OneHundredCentsTotalValueOutput.textContent = "";

    CoinsTotalQuantityOutput.textContent = "";

    CoinsTotalValueOutput.textContent = "";

    OneDollarTotalValueOutput.textContent = "";
    TwoDollarsTotalValueOutput.textContent = "";
    FiveDollarsTotalValueOutput.textContent = "";
    TenDollarsTotalValueOutput.textContent = "";
    TwentyDollarsTotalValueOutput.textContent = "";
    FiftyDollarsTotalValueOutput.textContent = "";
    OneHundredDollarsTotalValueOutput.textContent = "";

    BanknotesTotalQuantityOutput.textContent = "";

    BanknotesTotalValueOutput.textContent = "";

    CoinsAndBanknotesTotalQuantityOutput.textContent = "";

    CoinsAndBanknotesTotalValueOutput.textContent = "";
}


/* Add the event listeners: */
Calculate.addEventListener("click", CalculateAll);
Reset.addEventListener("click", ResetAll);