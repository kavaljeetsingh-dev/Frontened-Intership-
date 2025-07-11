function calculateTip() {
  const bill = parseFloat(document.getElementById("billAmount").value);
  const tip = parseFloat(document.getElementById("tipPercentage").value);

  if (isNaN(bill) || isNaN(tip)) {
    alert("Please enter valid numbers!");
    return;
  }

  const tipAmount = (bill * tip) / 100;
  const total = bill + tipAmount;

  document.getElementById("totalAmount").textContent = `$${total.toFixed(2)}`;
}
