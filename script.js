function convertHexToAscii() {
    let hex = document.getElementById("hexInput").value.trim();

    // Remove spaces and non-hex characters
    hex = hex.replace(/\s+/g, ""); // Removes all spaces

    // Ensure even-length (Hex should be in pairs)
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



function clearFields() {
    document.getElementById("hexInput").value = "";
    document.getElementById("asciiOutput").value = "";
}

function convertAsciiToHex() {
    let ascii = document.getElementById("asciiInput").value;
    let hex = "";

    for (let i = 0; i < ascii.length; i++) {
        hex += ascii.charCodeAt(i).toString(16).toUpperCase() + " ";
    }

    document.getElementById("hexOutput").value = hex.trim();
}

function clearAsciiFields() {
    document.getElementById("asciiInput").value = "";
    document.getElementById("hexOutput").value = "";
}

function copyToClipboard(id) {
    let textArea = document.getElementById(id);
    textArea.select();
    document.execCommand("copy");
    alert("Copied to clipboard!");
}


