const billedAmountValue = document.querySelector(".billed-amount");
const tipPercentValue = document.querySelector(".tip-percent");

const tipAmountValue = document.querySelector(".tip-amount");
const finalAmountValue = document.querySelector(".final-amount");

const button = document.querySelector(".calc-btn");

button.addEventListener("click", (e) =>{
    e.preventDefault();
    const total = billedAmountValue.value * tipPercentValue.value / 100;
    tipAmountValue.value = total;
    finalAmountValue.value = Number(billedAmountValue.value) + total;
    
})