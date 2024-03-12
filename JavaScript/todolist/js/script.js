function newElement() {
    // 1. Giriş alanındaki değeri al trim() ile basindaki ve sonundaki bosluklari kaldir
    var inputValue = document.getElementById("task").value.trim();
  
    // 2. Eğer giriş alanı boş ise
    if (inputValue === '') {
      // 3. Boş ekleme yapamazsınız toast'ını bul
      var errorToast = document.querySelector('.toast.error');
      // 4. Bootstrap.Toast sınıfı ile yeni bir toast örneği oluştur
      var errorToastInstance = new bootstrap.Toast(errorToast);
      // 5. Oluşturulan toast'ı göster
      errorToastInstance.show();
    } else {
      // 6. Yeni bir liste öğesi oluştur
      var li = document.createElement("li");
      var t = document.createTextNode(inputValue);
      li.appendChild(t);
  
      // 7. Eğer giriş alanı boş değilse
      if (inputValue === '') {
        alert("Boş ekleme yapamazsınız!");
      } else {
        // 8. Listeye yeni öğeyi ekle
        document.getElementById("list").appendChild(li);
      }
  
      // 9. Giriş alanını temizle
      document.getElementById("task").value = "";
  
      // 10. Listeye eklendi toast'ını bul
      var successToast = document.querySelector('.toast.success');
      // 11. Bootstrap.Toast sınıfı ile yeni bir toast örneği oluştur
      var successToastInstance = new bootstrap.Toast(successToast);
      // 12. Oluşturulan toast'ı göster
      successToastInstance.show();
    }
  }
  
  