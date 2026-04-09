fetch('content.json')
.then(res => res.json())
.then(data => {
    const book = $('#book');

    // 1. Сначала подгружаем мягкие страницы из JSON внутрь книги
    // Вставляем их ПЕРЕД задней обложкой (перед предпоследним элементом)
    data.forEach((item) => {
        const pageHtml = `
            <div class="page inner-page">
                <div style="background-image: url('${item.texture}'); position:absolute; top:0; left:0; width:100%; height:100%; z-index:-1; opacity:0.3;"></div>
                <h2>${item.title}</h2>
                <p>${item.text}</p>
                ${item.image ? `<img src="${item.image}" style="width:100%">` : ''}
            </div>`;
        $(pageHtml).insertBefore('#book .hard.internal-side:last');
    });

    // 2. Теперь инициализируем книгу с вашими настройками
    book.turn({
        width: 920, 
        height: 610,
        display: 'double',
        acceleration: true,
        elevation: 0, 
        pages: book.children().length, 
        when: {
            turning: function(event, page, view) {
                // Если это первая или последняя страница (обложка), 
                // turn.js поймет класс .hard и не будет её гнуть
            }
        }
    });
});

// 3. Управление кнопками и клавиатурой (чтобы не пропало)
$('#prev').click(() => $('#book').turn('previous'));
$('#next').click(() => $('#book').turn('next'));

$(window).bind('keydown', function(e){
    if (e.keyCode == 37) $('#book').turn('previous');
    else if (e.keyCode == 39) $('#book').turn('next');
});
