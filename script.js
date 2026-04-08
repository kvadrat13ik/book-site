fetch('content.json')
.then(res => res.json())
.then(data => {
    const book = $('#book-container');

    data.forEach((page) => {
        const div = $('<div/>', {class: 'page'}).css({
            'background-image': `url('${page.texture}')`
        }).html(`
            <h2>${page.title}</h2>
            <p>${page.text}</p>
            ${page.image ? `<img src="${page.image}">` : ''}
        `);
        book.append(div);
    });

    // Инициализация turn.js с двухстраничным режимом
    book.turn({
        width: 800,
        height: 500,
        autoCenter: true,
        display: 'double',
        elevation: 50,
        gradients: true,
        duration: 1000
    });
});
