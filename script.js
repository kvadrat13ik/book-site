fetch('content.json')
  .then(res => res.json())
  .then(data => {
    const pages = document.querySelectorAll('.page');
    pages.forEach((p, i) => {
      p.innerText = data.pages[i] || "";
    });
  });
