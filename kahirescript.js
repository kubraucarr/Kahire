

window.onload = function() {
    window.scrollTo(0, 0);
  }; 

// Tüm kalp ikonlarını seç
var heartIcons = document.querySelectorAll('.heart');

// Her bir kalp ikonu için tıklama olayı ekle
heartIcons.forEach(function(heartIcon) {
    heartIcon.addEventListener('click', function() {
        heartIcon.classList.toggle('active');
    });
});

