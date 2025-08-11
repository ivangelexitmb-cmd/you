// Фильтрация по категориям
document.addEventListener('DOMContentLoaded', function() {
    // Lightbox
    const lightbox = new SimpleLightbox('.gallery-grid a', {
        captionsData: 'title',
        captionDelay: 250,
    });

    // Фильтры
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Удаляем активный класс у всех кнопок
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Добавляем активный класс текущей кнопке
            button.classList.add('active');

            const filter = button.dataset.filter;

            galleryItems.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });

            // Обновляем Lightbox после фильтрации
            lightbox.refresh();
        });
    });
});