fetch('content.json')
.then(res => res.json())
.then(data => {
    const book = $('#book-container');
    
 data.forEach((page, index) => {
    // Определяем, обложка это или обычная страница
    const isCover = index === 0 || index === data.length - 1;
    const className = isCover ? 'page cover' : 'page';

    const div = $('<div/>', { class: className }).css({
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
