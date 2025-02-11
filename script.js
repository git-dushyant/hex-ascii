function convertHexToAscii() {
    let hex = document.getElementById("hexInput").value.trim();
    let ascii = "";

    if (hex.length % 2 !== 0) {
        alert("Invalid Hex! Length must be even.");
        return;
    }

    try {
        for (let i = 0; i < hex.length; i += 2) {
            ascii += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
        }
        document.getElementById("asciiOutput").value = ascii;
    } catch (e) {
        alert("Invalid hex input!");
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

