const masterButton = document.getElementById("titleCodigo")
const checkbox = document.getElementById("checkbox")
const codigoDescuento = document.getElementById("codigoDescuento")

masterButton.addEventListener("click", () => {
        chequeo(checkbox.checked)
    })

function chequeo(valor) {
    switch (valor) {
        case true:
            codigoDescuento.setAttribute("class", "fs-1 fw-bold text-warning")
        break;
    
        case false:
        alert("Para obtener un código de descuento debe aceptar los términos y condiciones")
            break;
    }

}