document.getElementById('pay-bills').addEventListener('click', function(event){
    event.preventDefault();
const amountInput = document.getElementById('amount-input').value;
const transferMoney = parseFloat(amountInput);
const pin2 = document.getElementById('pay-pin').value;
console.log(transferMoney, pin2)
if(pin2 === '1234'){
    const balance = document.getElementById('account-balance').innerText;
    const addNumber = parseFloat(balance);
 const newBalance =  addNumber -  transferMoney;
  document.getElementById('account-balance').innerText = newBalance;
}
else{
    alert('Failed to add money,please try again')
}
});