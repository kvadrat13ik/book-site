fetch('content.json')
.then(res => res.json())
.then(data => {
    const book = $('#book-container');

    data.forEach(page => {
        const div = $('<div/>', {class: 'page'}).css({
            'background-image': `url('${page.texture}')`,
            'background-size': 'cover'
        });
        book.append(div);
    });

    book.turn({
        width: 800,
        height: 500,
        display: 'double',  // две страницы одновременно
        autoCenter: true,
        elevation: 50,      // тень и сгиб
        gradients: true,
        duration: 1000
    });
});
