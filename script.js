function clearDisplay() {
    document.getElementById("display").value = "";
}

function appendDisplay(value) {
    document.getElementById("display").value += value;
}

function calculateResult() {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch {
        document.getElementById("display").value = "خطا";
    }
}
