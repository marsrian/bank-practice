// btn-deposit
document.getElementById("btn-deposit").addEventListener("click", function(){
    const depositField = document.getElementById("deposit-field");
    const newtDepositAmountString = depositField.value;
    const newtDepositAmount = parseFloat(newtDepositAmountString);

    // clear deposit input value:
    depositField.value = '';

    // validation:
    if(isNaN(newtDepositAmount)){
        alert("Please provide valid number");
        return;
    }

    // Previous Deposit:
    const depositTotalElement = document.getElementById("deposit-total");
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // Total Deposit:
    const totalDeposit = newtDepositAmount + previousDepositTotal;
    // set total Deposit
    depositTotalElement.innerText = totalDeposit;

    // balance previous total
    const balanceTotalElement = document.getElementById("balance-total");
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // Total balance:
    const totalBalance = previousBalanceTotal + newtDepositAmount;
    // set total balance
    balanceTotalElement.innerText = totalBalance;
})