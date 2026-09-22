"use strict";

// Get the HTML elements
let converterForm = document.getElementById("converter-form");
let inputField = document.getElementById("input-value");
let conversionType = document.getElementById("conversion-type");
let result = document.getElementById("conversion-result");

// Listen for the form submission
converterForm.addEventListener("submit", function(event) {

```
// Prevent the form from submitting
event.preventDefault();

// Convert the input value to a number
let inputValue = parseFloat(inputField.value);

// Get the selected option
let options = document.getElementsByTagName("option");
let selectedIndex = conversionType.selectedIndex;
let selectedOption = options[selectedIndex];

// Get the conversion type
let conversion = selectedOption.value;

let convertedValue;
let resultText;

// Inch to centimeter
if (conversion === "inch-to-centimeter") {
    convertedValue = inputValue * 2.54;
    resultText = inputValue + " inches is " +
        convertedValue.toFixed(2) + " centimeters";
}

// Foot to centimeter
else if (conversion === "foot-to-centimeter") {
    convertedValue = inputValue * 30.48;
    resultText = inputValue + " feet is " +
        convertedValue.toFixed(2) + " centimeters";
}

// Yard to meter
else if (conversion === "yard-to-meter") {
    convertedValue = inputValue * 0.91;
    resultText = inputValue + " yards is " +
        convertedValue.toFixed(2) + " meters";
}

// Mile to kilometer
else if (conversion === "mile-to-kilometer") {
    convertedValue = inputValue * 1.61;
    resultText = inputValue + " miles is " +
        convertedValue.toFixed(2) + " kilometers";
}

// Centimeter to inch
else if (conversion === "centimeter-to-inch") {
    convertedValue = inputValue * 0.39;
    resultText = inputValue + " centimeters is " +
        convertedValue.toFixed(2) + " inches";
}

// Centimeter to foot
else if (conversion === "centimeter-to-foot") {
    convertedValue = inputValue * 0.0328;
    resultText = inputValue + " centimeters is " +
        convertedValue.toFixed(2) + " feet";
}

// Meter to yard
else if (conversion === "meter-to-yard") {
    convertedValue = inputValue * 1.09;
    resultText = inputValue + " meters is " +
        convertedValue.toFixed(2) + " yards";
}

// Kilometer to mile
else if (conversion === "kilometer-to-mile") {
    convertedValue = inputValue * 0.62;
    resultText = inputValue + " kilometers is " +
        convertedValue.toFixed(2) + " miles";
}

// Display the result
result.innerHTML = resultText;
```

});
