let count = 0;
let info = [
    {
        title: 'Веб-разработчик',
        descr: 'Веб-разработчик разрабатывает сайт на языках HTML, CSS и JavaScript. Создаёт интерфейсы с помощью библиотеки React.',
        id: count,
    }
];

let accord = document.querySelector('.accord');
let btn = document.querySelector('.btn');
let news = document.querySelector('.accord__news');
let btnStatus = document.querySelector('.btn__info__enable');

btn.addEventListener('click', function() {
    let wrapper = document.createElement('div');
    wrapper.classList.add('accord__news__wrapper');

    info.forEach(function(item) {
        wrapper.innerHTML = `<div class="title">${item.title}</div>
        <div class="descr">${item.descr}</div>`
    });
    news.append(wrapper);

    news.classList.add('accord__news-active');
    btnStatus.classList.add('btn__info__enable-active');
    btn.classList.add('btn-active');
    count++;
});

