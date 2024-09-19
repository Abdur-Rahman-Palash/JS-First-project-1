document.getElementById('withdraw').addEventListener('click', function(event){
    event.preventDefault();
const amount1 = document.getElementById('amount1').value;
const cashOutMoney = parseFloat(amount1);
const pin1 = document.getElementById('pin1').value;
if(pin1 === '1234'){
    const balance = document.getElementById('account-balance').innerText;
    const addNumber = parseFloat(balance);
 const newBalance =  addNumber -  cashOutMoney;
  document.getElementById('account-balance').innerText = newBalance;
}
else{
    alert('Failed to add money,please try again')
}
});


