
"use strict";

// ==========================================
// IMPERIAL / METRIC CONVERTER
// ==========================================

// Get the converter HTML elements.
const converterForm = document.getElementById("converter-form");
const inputField = document.getElementById("input-value");
const conversionType = document.getElementById("conversion-type");
const conversionResult = document.getElementById("conversion-result");

// Listen for form submission.
if (
    converterForm &&
    inputField &&
    conversionType &&
    conversionResult
) {
    converterForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const inputValue = Number(inputField.value);

        if (
            inputField.value.trim() === "" ||
            !Number.isFinite(inputValue)
        ) {
            conversionResult.textContent =
                "Please enter a valid number.";
            return;
        }

        let convertedValue;
        let resultText;

        // Perform the selected conversion.
        switch (conversionType.value) {

            case "inch-to-centimeter":
                convertedValue = inputValue * 2.54;
                resultText = inputValue + " inches is " +
                    convertedValue.toFixed(2) + " centimeters";
                break;

            case "foot-to-centimeter":
                convertedValue = inputValue * 30.48;
                resultText = inputValue + " feet is " +
                    convertedValue.toFixed(2) + " centimeters";
                break;

            case "yard-to-meter":
                convertedValue = inputValue * 0.9144;
                resultText = inputValue + " yards is " +
                    convertedValue.toFixed(2) + " meters";
                break;

            case "mile-to-kilometer":
                convertedValue = inputValue * 1.609344;
                resultText = inputValue + " miles is " +
                    convertedValue.toFixed(2) + " kilometers";
                break;

            case "centimeter-to-inch":
                convertedValue = inputValue / 2.54;
                resultText = inputValue + " centimeters is " +
                    convertedValue.toFixed(2) + " inches";
                break;

            case "centimeter-to-foot":
                convertedValue = inputValue / 30.48;
                resultText = inputValue + " centimeters is " +
                    convertedValue.toFixed(2) + " feet";
                break;

            case "meter-to-yard":
                convertedValue = inputValue / 0.9144;
                resultText = inputValue + " meters is " +
                    convertedValue.toFixed(2) + " yards";
                break;

            case "kilometer-to-mile":
                convertedValue = inputValue / 1.609344;
                resultText = inputValue + " kilometers is " +
                    convertedValue.toFixed(2) + " miles";
                break;

            default:
                resultText = "Please select a valid conversion.";
        }

        // Display the conversion result.
        conversionResult.textContent = resultText;
    });
}
