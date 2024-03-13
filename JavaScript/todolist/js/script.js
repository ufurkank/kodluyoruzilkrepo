
function newElement() {
  // 1. Giriş alanındaki değeri al trim() ile başındaki ve sonundaki boşlukları kaldır
  var inputValue = document.getElementById("task").value.trim();

  // 2. Eğer giriş alanı boş değilse
  if (inputValue !== '') {
    // Yeni bir liste öğesi oluştur
    var li = document.createElement("li");
    var t = document.createTextNode(inputValue);
    li.appendChild(t);

    let span = document.createElement("span");
    span.className = "close";
    span.textContent = "x";
    span.addEventListener("click", function() {
      li.remove(); // Bu satır, tıklanan li öğesini kaldıracaktır.
    });
    li.appendChild(span);

    // Listeye yeni öğeyi ekle
    document.getElementById("list").appendChild(li);

    // Giriş alanını temizle
    document.getElementById("task").value = "";

    // Listeye eklendi toast'ını bul
    var successToast = document.querySelector('.toast.success');
    // Bootstrap.Toast sınıfı ile yeni bir toast örneği oluştur
    var successToastInstance = new bootstrap.Toast(successToast);
    // Oluşturulan toast'ı göster
    successToastInstance.show();
  } else {
    // Boş ekleme yapamazsınız toast'ını bul
    var errorToast = document.querySelector('.toast.error');
    // Bootstrap.Toast sınıfı ile yeni bir toast örneği oluştur
    var errorToastInstance = new bootstrap.Toast(errorToast);
    // Oluşturulan toast'ı göster
    errorToastInstance.show();
  }
}

document.addEventListener("DOMContentLoaded", function() {
  var listItems = document.querySelectorAll("#list li");
  // Her liste öğesine click eventi ekle
  listItems.forEach(function(item) {
    item.addEventListener("click", function() {
      // Tıklanan öğenin sınıfını kontrol et ve ekle/çıkar
      if (this.classList.contains("checked")) {
        this.classList.remove("checked");
      } else {
        this.classList.add("checked");
      }
    });
  });
});
