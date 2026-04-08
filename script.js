// Загружаем content.json
fetch('content.json')
.then(response => response.json())
.then(data => {
    const container = document.getElementById('book-container');
    data.forEach((page, index) => {
        const div = document.createElement('div');
        div.className = 'page';
        div.style.backgroundImage = `url('${page.texture}')`;
        div.innerHTML = `
            <h2>${page.title}</h2>
            <p>${page.text}</p>
            ${page.image ? `<img src="${page.image}" style="max-width:100%; margin-top:10px;">` : ''}
        `;
        div.style.display = index === 0 ? 'block' : 'none';
        container.appendChild(div);
    });

    let currentPage = 0;
    const pages = document.querySelectorAll('.page');

    document.getElementById('next').onclick = () => {
        if (currentPage < pages.length - 1) {
            pages[currentPage].style.display = 'none';
            currentPage++;
            pages[currentPage].style.display = 'block';
        }
    };

    document.getElementById('prev').onclick = () => {
        if (currentPage > 0) {
            pages[currentPage].style.display = 'none';
            currentPage--;
            pages[currentPage].style.display = 'block';
        }
    };
});
