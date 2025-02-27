function openOrderForm(productName) {
    document.getElementById("item").value = productName;
    document.getElementById("order-form").style.display = "block";
}

function closeOrderForm() {
    document.getElementById("order-form").style.display = "none";
}

window.onclick = function(event) {
    if (event.target === document.getElementById("order-form")) {
        closeOrderForm();
    }
};
