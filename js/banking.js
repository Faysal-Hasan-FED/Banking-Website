// handle deposit button event

// // get the deposit amount

// document.getElementById('deposit-button').addEventListener('click', function () {
//     const depositInput = document.getElementById("deposit-input");
//     const depositAmount = depositInput.value;

//     const depositTotal = document.getElementById("deposit-total");

//     const currentTotalDeposit = depositTotal.innerText;
//     const newTotalDeposit = parseFloat(currentTotalDeposit) + parseFloat(depositAmount);
//     depositTotal.innerText = newTotalDeposit;


//     // update account balance 

//     const balanceTotal = document.getElementById("balance-total");
//     const balanceTotalText = balanceTotal.innerText;
//     const balanceTotalAmount = parseFloat(balanceTotalText);

//     const newBalanceTotal = balanceTotalAmount + newTotalDeposit;
//     balanceTotal.innerText = newBalanceTotal;



//     //clearing
//     depositInput.value = '';




// })



// // shurute button a click event handler jog korbo 
// document.getElementById("deposit-button").addEventListener('click', function () {

//     // deposit amount er hisab 
//     const depositInput = document.getElementById("deposit-input");
//     const depositAmount = depositInput.value;


//     const depositTotal = document.getElementById("deposit-total");
//     const currentDeposit = depositTotal.innerText;
//     const newDeposit = parseFloat(currentDeposit) + parseFloat(depositAmount);
//     depositTotal.innerText = newDeposit;

//     // update the balance total

//     const totalBalance = document.getElementById("balance-total");
//     const totalBalanceText = totalBalance.innerText;
//     // const totalBalanceAmount = parseFloat(totalBalanceText);

//     const newBalaceTotal = parseFloat(totalBalanceText) + parseFloat(newDeposit);
//     totalBalance.innerText = newBalaceTotal;





//     //clearing the input field 
//     depositInput.value = '';

// })


// document.getElementById("deposit-button").addEventListener('click', function () {
//     const depositInput = document.getElementById("deposit-input");
//     const depositAmountText = depositInput.value;
//     const depositAmount = parseFloat(depositAmountText);

//     const depositTotal = document.getElementById("deposit-total");
//     const currentDepositAmount = depositTotal.innerText;
//     const totalDepositAmount = parseFloat(currentDepositAmount) + depositAmount;
//     depositTotal.innerText = totalDepositAmount;

//     // update total balance 

//     const totalBalance = document.getElementById("balance-total");
//     const totalBalanceText = totalBalance.innerText;

//     const newTotalBalance = parseFloat(totalBalanceText) + parseFloat(totalDepositAmount);
//     totalBalance.innerText = newTotalBalance;


//     // clearing input field 
//     depositInput.value = '';
// })

// again practise of deposit and balance 

document.getElementById("deposit-button").addEventListener('click', function () {
    const depositInput = document.getElementById("deposit-input");
    const depositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(depositAmountText);

    const depositTotal = document.getElementById("deposit-total");
    const currentTotalDeposit = depositTotal.innerText;
    const newTotalDeposit = parseFloat(currentTotalDeposit) + newDepositAmount;
    depositTotal.innerText = newTotalDeposit;

    // update balance total 

    const totalBalance = document.getElementById("balance-total");
    const totalBalaneText = totalBalance.innerText;

    const updatedTotalBalance = parseFloat(totalBalaneText) + parseFloat(newTotalDeposit);
    totalBalance.innerText = updatedTotalBalance;

    // clearing the input field 
    depositInput.value = '';

})