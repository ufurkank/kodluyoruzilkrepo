let examResult = prompt ("Notunuzu giriniz:")
let textInfo;


if (examResult.trim() === "") {
    textInfo = "Boş değer girdiniz!";
} else if (examResult >= 90 && examResult <= 100) {
    textInfo = "AA";
} else if (examResult >= 85 && examResult < 90) {
    textInfo = "BA";
} else if (examResult >= 80 && examResult < 85) {
    textInfo = "BB";
} else if (examResult >= 75 && examResult < 80) {
    textInfo = "CB";
} else if (examResult >= 70 && examResult < 75) {
    textInfo = "CC";
} else if (examResult >= 65 && examResult < 70) {
    textInfo = "DC";
} else if (examResult >= 60 && examResult < 65) {
    textInfo = "DD";
} else if (examResult >= 50 && examResult < 60) {
    textInfo = "FD";
} else if (examResult <= 49 && examResult >= 0) {
    textInfo = "FF";
} else {
    textInfo = "Lütfen geçerli bir not giriniz!";
}

let info = document.querySelector ("#info")
info.innerHTML = `Girdiğiniz değer: '${examResult}' <br> 
Harfli başarı notunuz: ${textInfo}
`