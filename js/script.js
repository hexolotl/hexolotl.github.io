// İletişim Formu İşleyicisi
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Formun otomatik gönderimini engelle
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('form-message');

    formMessage.textContent = ''; // Önceki mesajı temizle
    formMessage.style.color = '#ff6f61'; // Yeni hata rengi

    // 1. Alanların Boş Olup Olmadığını Kontrol Etme
    if (!name || !email || !message) {
        formMessage.textContent = "Lütfen tüm alanları doldurun.";
        return;
    }

    // 2. E-posta Formatını Kontrol Etme
    if (!validateEmail(email)) {
        formMessage.textContent = "Lütfen geçerli bir E-posta adresi giriniz.";
        return;
    }

    // 3. Başarılı Gönderim 
    formMessage.textContent = "Mesajınız başarıyla gönderildi!";
    formMessage.style.color = '#ffffffff'; // Başarı mesajı için tema rengi
    this.reset(); // Formu sıfırla
});

// E-posta Doğrulama Fonksiyonu (Basit Regex)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return re.test(email);
}