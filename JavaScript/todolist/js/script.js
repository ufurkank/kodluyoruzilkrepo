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
      updateLocalStorage(); // LocalStorage'ı güncelle
    });
    li.appendChild(span);

    // Listeye yeni öğeyi ekle
    document.getElementById("list").appendChild(li);

    // Yeni öğeye click eventi ekle
    li.addEventListener("click", function() {
      toggleChecked(this);
    });

    // Yeni öğeyi localStorage'a ekle
    addToLocalStorage(inputValue);

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
  // Sayfa yüklendiğinde localStorage'dan öğeleri al
  var savedItems = JSON.parse(localStorage.getItem("items"));
  if (savedItems) {
    savedItems.forEach(function(item) {
      createListItem(item);
    });
  }

  var listItems = document.querySelectorAll("#list li");
  // Her liste öğesine click eventi ekle
  listItems.forEach(function(item) {
    item.addEventListener("click", function() {
      // Tıklanan öğenin sınıfını kontrol et ve ekle/çıkar
      toggleChecked(this);
      updateLocalStorage(); // LocalStorage'ı güncelle
    });
  });
});

function toggleChecked(element) {
  // Tıklanan öğenin sınıfını kontrol et ve ekle/çıkar
  if (element.classList.contains("checked")) {
    element.classList.remove("checked");
  } else {
    element.classList.add("checked");
  }
}

function addToLocalStorage(item) {
  // localStorage'daki öğeleri al
  var items = JSON.parse(localStorage.getItem("items")) || [];
  // Yeni öğeyi ekle
  items.push(item);
  // Güncellenmiş listeyi localStorage'a kaydet
  localStorage.setItem("items", JSON.stringify(items));
}

function updateLocalStorage() {
  // Tüm liste öğelerini al
  var listItems = document.querySelectorAll("#list li");
  var items = [];
  // Her liste öğesini dön
  listItems.forEach(function(item) {
    // Öğenin içeriğini al ve localStorage için items dizisine ekle
    items.push(item.textContent.trim());
  });
  // Güncellenmiş listeyi localStorage'a kaydet
  localStorage.setItem("items", JSON.stringify(items));
}

function createListItem(itemContent) {
  // Yeni bir liste öğesi oluştur
  var li = document.createElement("li");
  var t = document.createTextNode(itemContent);
  li.appendChild(t);

  let span = document.createElement("span");
  span.className = "close";
  span.textContent = "x";
  span.addEventListener("click", function() {
    li.remove(); // Bu satır, tıklanan li öğesini kaldıracaktır.
    updateLocalStorage(); // LocalStorage'ı güncelle
  });
  li.appendChild(span);

  // Listeye yeni öğeyi ekle
  document.getElementById("list").appendChild(li);
}
