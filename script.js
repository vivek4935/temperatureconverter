document.getElementById("convert-btn").addEventListener("click", function () {
  const temperature = parseFloat(document.getElementById("temperature").value);
  const unit = document.getElementById("unit").value;
  let convertedTemperature;
  let resultUnit;

  if (isNaN(temperature)) {
    alert("Please enter a valid number!");
    return;
  }

  switch (unit) {
    case "Celsius":
      convertedTemperature = (temperature * 9) / 5 + 32;
      resultUnit = "Fahrenheit";
      break;
    case "Fahrenheit":
      convertedTemperature = ((temperature - 32) * 5) / 9;
      resultUnit = "Celsius";
      break;
    case "Kelvin":
      convertedTemperature = temperature - 273.15;
      resultUnit = "Celsius";
      break;
  }

  document.getElementById(
    "result"
  ).textContent = `${convertedTemperature.toFixed(2)} °${resultUnit}`;
});
