function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const inputAmount = parseFloat(inputAmountText);
    inputField.value = "";
    return inputAmount;
}
function updateTotalField(inputId,amount) {
    const depositTotal = document.getElementById(inputId);
    const depositTotalText = depositTotal.innerText;
    const depositTotalAmount = parseFloat(depositTotalText);
    const newDepositAmount = depositTotalAmount + amount;
    depositTotal.innerText = newDepositAmount;
 }
 function getCurrentBalance() {
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    return balanceTotalAmount;
 }
 function updateAccountBalance(amount,isAdd) {
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalAmount = getCurrentBalance()
    if(isAdd == true) {
        balanceTotal.innerText = balanceTotalAmount + amount;
    }
    else {
        balanceTotal.innerText = balanceTotalAmount - amount;
    }
 }
// Deposit Money
document.getElementById("deposit-btn").addEventListener("click",function(){
    const depositInputAmount = getInputValue("deposit-amount")
    if (depositInputAmount > 0) {
        updateTotalField("deposit-total",depositInputAmount)
        updateAccountBalance(depositInputAmount,true)
    }
    else {
        alert("Please type a positive number.")
    }
})
// Withdraw Money
document.getElementById("withdraw-btn").addEventListener("click",function(){
    const withdrawInputAmount = getInputValue("withdraw-amount")
    const currentBalance = getCurrentBalance()
    if(withdrawInputAmount > 0 && withdrawInputAmount < currentBalance) {
        updateTotalField("withdraw-total",withdrawInputAmount)
        updateAccountBalance(withdrawInputAmount)
    }
    else {
        alert("Please type a positive number.")
    }
})