fetch('content.json')
.then(res => res.json())
.then(data => {
    const book = $('#book-container');

    data.forEach(page => {
        // Мы оставляем здесь только самое нужное, 
        // остальное (размеры, прозрачность) подтянется из CSS автоматически
        const div = $('<div/>', { class: 'page' }).css({
            'background-image': `url('${page.texture}')`
        });
        book.append(div);
    });

    book.turn({
        width: 900,         // ИСПРАВЛЕНО: Теперь совпадает с CSS (450+450)
        height: 600,        // ИСПРАВЛЕНО: Теперь совпадает с CSS
        display: 'double',  
        autoCenter: true,
        elevation: 0,       // ИСПРАВЛЕНО: 0 убирает лишние белые тени при перелистывании
        gradients: false,   // ИСПРАВЛЕНО: false убирает стандартный серый градиент Turn.js
        duration: 1000
    });
});
