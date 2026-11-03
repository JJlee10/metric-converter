
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
"use strict";

// Get the HTML elements
let clockFace = document.getElementById("clock-face");
let calendarDate = document.getElementById("calendar-date");

// Function to update the clock and date
function updateClock() {

    // Create a new Date object
    let currentDate = new Date();

    // Retrieve the current time
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();

    // Determine AM or PM
    let session = "AM";

    if (hours >= 12) {
        session = "PM";
    }

    // Convert military time to 12-hour time
    if (hours === 0) {
        hours = 12;
    } else if (hours > 12) {
        hours = hours - 12;
    }

    // Add leading zeros when needed
    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    // Format the time
    let timeString = hours + ":" + minutes + ":" + seconds + " " + session;

    // Format the current date
    let dateString = currentDate.toLocaleDateString();

    // Update the HTML elements
    clockFace.innerHTML = timeString;
    calendarDate.innerHTML = dateString;
}

// Run the clock immediately
updateClock();

// Update the clock every 1000 milliseconds
setInterval(updateClock, 1000);

