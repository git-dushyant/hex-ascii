// Function to update labels based on dropdown selection
function updateLabels() {
    let inputType = document.getElementById("inputType").value;
    let outputType = document.getElementById("outputType").value;

    document.getElementById("converterTitle").innerText = `${inputType.toUpperCase()} to ${outputType.toUpperCase()} Converter`;
    document.getElementById("inputLabel").innerText = `Enter ${inputType.toUpperCase()}:`;
    document.getElementById("outputLabel").innerText = `${outputType.toUpperCase()} Output:`;
}

// Function to handle conversion
function convertData() {
    let inputType = document.getElementById("inputType").value;
    let outputType = document.getElementById("outputType").value;
    let inputValue = document.getElementById("inputValue").value.trim();
    let outputValue = "";

    try {
        if (inputType === "ascii") {
            if (outputType === "hex") outputValue = asciiToHex(inputValue);
            else if (outputType === "binary") outputValue = asciiToBinary(inputValue);
            else if (outputType === "decimal") outputValue = asciiToDecimal(inputValue);
            else if (outputType === "octal") outputValue = asciiToOctal(inputValue);
        } else if (inputType === "hex") {
            if (outputType === "ascii") outputValue = hexToAscii(inputValue);
            else if (outputType === "binary") outputValue = hexToBinary(inputValue);
            else if (outputType === "decimal") outputValue = hexToDecimal(inputValue);
            else if (outputType === "octal") outputValue = hexToOctal(inputValue);
        }
        // Other conversions can be added similarly
    } catch (error) {
        outputValue = "Error: Invalid Input!";
    }

    document.getElementById("outputValue").value = outputValue;
}

// Function to clear input and output fields
function clearFields() {
    document.getElementById("inputValue").value = "";
    document.getElementById("outputValue").value = "";
}

// Function to copy text from textarea
function copyToClipboard(elementId) {
    let textArea = document.getElementById(elementId);
    textArea.select();
    document.execCommand("copy");
    alert("Copied to clipboard!");
}

// ASCII to Hex
function asciiToHex(str) {
    return str.split("").map(char => char.charCodeAt(0).toString(16).padStart(2, "0").toUpperCase()).join(" ");
}

// Hex to ASCII
function hexToAscii(hex) {
    return hex.split(" ").map(byte => String.fromCharCode(parseInt(byte, 16))).join("");
}

// ASCII to Binary
function asciiToBinary(str) {
    return str.split("").map(char => char.charCodeAt(0).toString(2).padStart(8, "0")).join(" ");
}

// Hex to Binary
function hexToBinary(hex) {
    return hex.split(" ").map(byte => parseInt(byte, 16).toString(2).padStart(8, "0")).join(" ");
}

// ASCII to Decimal
function asciiToDecimal(str) {
    return str.split("").map(char => char.charCodeAt(0).toString(10)).join(" ");
}

// Hex to Decimal
function hexToDecimal(hex) {
    return hex.split(" ").map(byte => parseInt(byte, 16).toString(10)).join(" ");
}

// ASCII to Octal
function asciiToOctal(str) {
    return str.split("").map(char => char.charCodeAt(0).toString(8)).join(" ");
}

// Hex to Octal
function hexToOctal(hex) {
    return hex.split(" ").map(byte => parseInt(byte, 16).toString(8)).join(" ");
}

// Update labels on page load
updateLabels();
