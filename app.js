function generateQR() {
    const qrText = document.getElementById("qrText").value;
    const qrCodeContainer = document.getElementById("qrCode");

    // Limpiamos el contenedor para generar un nuevo QR
    qrCodeContainer.innerHTML = "";

    // Generamos el código QR con el texto ingresado
    if (qrText) {
        new QRCode(qrCodeContainer, {
            text: qrText,
            width: 200,
            height: 200,
        });
    } else {
        alert("Por favor, introduce un texto o URL para generar el QR.");
    }
}
