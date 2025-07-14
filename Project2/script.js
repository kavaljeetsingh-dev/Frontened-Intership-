function calculateBMI() {
  const height = parseFloat(document.getElementById('height').value) / 100;
  const weight = parseFloat(document.getElementById('weight').value);

  if (!height || !weight || height <= 0 || weight <= 0) {
    alert("Please enter valid height and weight.");
    return;
  }

  const bmi = weight / (height * height);
  const roundedBMI = bmi.toFixed(2);

  document.getElementById('bmi-result').value = roundedBMI;

  let condition = "";
  if (bmi < 18.5) {
    condition = "Underweight";
  } else if (bmi < 24.9) {
    condition = "Normal weight";
  } else if (bmi < 29.9) {
    condition = "Overweight";
  } else {
    condition = "Obese";
  }

  document.getElementById('condition').innerText = `Weight Condition: ${condition}`;
}
