// Function to convert Hex to ASCII
function convertHexToAscii() {
    let hex = document.getElementById("hexInput").value.trim().toUpperCase(); // Ensure input is uppercase

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

// Function to convert ASCII to Hex (Ensures UPPERCASE output)
function convertAsciiToHex() {
    let ascii = document.getElementById("asciiInput").value;
    let hexArray = [];

    for (let i = 0; i < ascii.length; i++) {
        let hexChar = ascii.charCodeAt(i).toString(16).padStart(2, "0").toUpperCase(); // Force UPPERCASE
        hexArray.push(hexChar);
    }

    let hex = hexArray.join(" "); // Join with space
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

// Function to copy text from textarea (Fixed copy-paste issue)
function copyToClipboard(elementId) {
    let textArea = document.getElementById(elementId);
    
    // Set focus and select the content
    textArea.focus();
    textArea.select();
    
    try {
        // Attempt to copy text
        document.execCommand("copy");
        alert("Copied to clipboard!");
    } catch (err) {
        console.error("Copy failed", err);
    }
    
    // Deselect text
    textArea.setSelectionRange(0, 0);
}
