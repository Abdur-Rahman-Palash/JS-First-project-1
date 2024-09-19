document.getElementById('add-money').addEventListener('click', function(){
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('add-money-form').classList.remove('hidden');
})
document.getElementById('cash-out').addEventListener('click', function(){
    document.getElementById('cash-out-form').classList.remove('hidden');
    document.getElementById('add-money-form').classList.add('hidden');
})
document.getElementById('transfer').addEventListener('click', function(){
    document.getElementById('transfer-money').classList.remove('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('add-money-form').classList.add('hidden');
})
document.getElementById('bonus').addEventListener('click', function(){
    document.getElementById('bonus-form').classList.remove('hidden');
    document.getElementById('transfer-money').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('add-money-form').classList.add('hidden');
})
document.getElementById('bill').addEventListener('click', function(){
    document.getElementById('pay-bill').classList.remove('hidden');
    document.getElementById('bonus-form').classList.add('hidden');
    document.getElementById('transfer-money').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('add-money-form').classList.add('hidden');
})
document.getElementById('transaction').addEventListener('click', function(){
    document.getElementById('history').classList.remove('hidden');
    document.getElementById('pay-bill').classList.add('hidden');
    document.getElementById('bonus-form').classList.add('hidden');
    document.getElementById('transfer-money').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('add-money-form').classList.add('hidden');
})
