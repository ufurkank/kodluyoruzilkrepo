let input = prompt("Lütfen isminizi giriniz:", "İsminiz...");

if (input !== null) {
    // Kelimeleri ayır
    let words = input.toLowerCase().split(" ");

    // Her kelimenin ilk harfini büyük harfe dönüştür
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    // Dönüştürülmüş kelimeleri birleştir
    let formattedInput = words.join(" ");

    document.querySelector("#myName").innerHTML = formattedInput;
}

    // Tarih ve Saat:
function showTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    hours = formatTime(hours);
    minutes = formatTime(minutes);
    seconds = formatTime(seconds);

    var time = hours + ':' + minutes + ':' + seconds;
    document.getElementById('clock').innerText = time;

    setTimeout(showTime, 1000); // Her saniyede bir güncelle
}

function formatTime(time) {
    if (time < 10) {
    return '0' + time;
    } else {
    return time;
    }
    }

function showDate() {
    var date = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var dateString = date.toLocaleDateString('tr-TR', options);
    document.getElementById('date').innerText = dateString;
}

showTime(); // Saati göster
showDate(); // Tarihi göster
