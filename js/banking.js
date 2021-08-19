function getInputValue() {
    const depositInput = document.getElementById("deposit-amount");
    const depositInputText = depositInput.value;
    const depositInputAmount = parseFloat(depositInputText);
    depositInput.value = "";
    return depositInputAmount;
}
// Deposit Money
document.getElementById("deposit-btn").addEventListener("click",function(){
    const depositInputAmount = getInputValue()
    // Total Deposit
    const depositTotal = document.getElementById("deposit-total");
    const depositTotalText = depositTotal.innerText;
    const depositTotalAmount = parseFloat(depositTotalText);
    // Add after addition
    const newDepositAmount = depositTotalAmount + depositInputAmount;
    depositTotal.innerText = newDepositAmount;
    // Add deposit amount in Account balance
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    const newBalanceAfterDeposit = balanceTotalAmount + depositInputAmount;
    balanceTotal.innerText = newBalanceAfterDeposit;
})
// Withdraw Money
document.getElementById("withdraw-btn").addEventListener("click",function(){
    const withdrawInput = document.getElementById("withdraw-amount");
    const withdrawInputText = withdrawInput.value;
    const withdrawInputAmount = parseFloat(withdrawInputText);
    // Total Withdraw
    const withdrawTotal = document.getElementById("withdraw-total");
    const withdrawTotalText = withdrawTotal.innerText;
    const withdrawTotalAmount = parseFloat(withdrawTotalText);
    // Update withdraw balance
    const newWithdrawAmount = withdrawTotalAmount + withdrawInputAmount;
    withdrawTotal.innerText = newWithdrawAmount;
    // Update Account balance after withdraw
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    const newBalanceAfterDeposit = balanceTotalAmount - withdrawInputAmount;
    balanceTotal.innerText = newBalanceAfterDeposit;
    withdrawInput.value = "";
})