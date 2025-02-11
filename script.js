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
