const conversionRates = {
    liters: 1,
    milliliters: 0.001,
    gallons: 3.78541,
    cubicMeters: 1000
};

document.getElementById('convertBtn').addEventListener('click', function() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;

    if (isNaN(inputValue)) {
        alert("Please enter a valid number.");
        return;
    }

    // Convert input value to liters
    const valueInLiters = inputValue / conversionRates[inputUnit];

    // Convert liters to the desired output unit
    const outputValue = valueInLiters * conversionRates[outputUnit];

    document.getElementById('outputValue').value = outputValue.toFixed(4); // Display result with 4 decimal places
});