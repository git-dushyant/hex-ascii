// Function to convert Hex to ASCII
function convertHexToAscii() {
    let hex = document.getElementById("hexInput").value.trim();

    // Remove spaces before processing
    hex = hex.replace(/\s+/g, "");

    // Ensure even-length hex input
    if (hex.length % 2 !== 0) {
        document.getElementById("asciiOutput").value = "Error: Invalid Hex (Odd Length)";
        return;
    }

    let ascii = "";
    try {
        for (let i = 0; i < hex.length; i += 2) {
            ascii += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
        }
        document.getElementById("asciiOutput").value = ascii;
    } catch (e) {
        document.getElementById("asciiOutput").value = "Error: Conversion Failed";
    }
}

// Function to convert ASCII to Hex (Now outputs UPPERCASE)
function convertAsciiToHex() {
    let ascii = document.getElementById("asciiInput").value;
    let hex = "";

    for (let i = 0; i < ascii.length; i++) {
        hex += ascii.charCodeAt(i).toString(16).padStart(2, "0").toUpperCase() + " "; // Converts to uppercase
    }

    hex = hex.trim(); // Remove last space
    document.getElementById("hexOutput").value = hex;
}

// Function to clear Hex input and output
function clearFields() {
    document.getElementById("hexInput").value = "";
    document.getElementById("asciiOutput").value = "";
}

// Function to clear ASCII input and output
function clearAsciiFields() {
    document.getElementById("asciiInput").value = "";
    document.getElementById("hexOutput").value = "";
}

// Function to copy text from textarea
function copyToClipboard(elementId) {
    let textArea = document.getElementById(elementId);
    textArea.select();
    textArea.setSelectionRange(0, 99999); // For mobile support

    navigator.clipboard.writeText(textArea.value.trim()) // Trim before copying
        .then(() => alert("Copied to clipboard!"))
        .catch(err => console.error("Copy failed", err));
}
