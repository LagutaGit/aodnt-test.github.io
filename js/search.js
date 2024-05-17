document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.search').addEventListener('click', function() {
      document.getElementById('searchContainer').classList.toggle('active'); // Переключение класса для показа/скрытия контейнера поиска
    });
  });
  