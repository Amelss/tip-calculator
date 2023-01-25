document.getElementById("calculate").addEventListener("click", function () {
    let billInput = Number(document.getElementById("bill-amount").value) ;
    document.getElementById("tip-amount").textContent = `You need to tip: £${Math.floor(billInput <= 50 && billInput >= 300 ? billInput * 0.15 : billInput * 0.2)}` 
    document.getElementById("bill-amount").value = "";
});







