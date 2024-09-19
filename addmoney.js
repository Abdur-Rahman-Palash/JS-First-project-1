document.getElementById('add-to-money').addEventListener('click', function(event){
    event.preventDefault();
const amount = document.getElementById('amount').value;
const addMoney = parseFloat(amount);
const pin = document.getElementById('pin').value;
if(pin === '1234'){
    const balance = document.getElementById('account-balance').innerText;
    const addNumber = parseFloat(balance);
 const newBalance =  addNumber +  addMoney;
  document.getElementById('account-balance').innerText = newBalance;
}
else{
    alert('Failed to add money,please try again')
}
});

const money = getInputFieldValueById('amount');
console.log('add money clicked', money)



