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
let btnStatus = document.querySelector('.btn__status');

btn.addEventListener('click', function() {
    let wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');

    info.forEach(function(item) {
        wrapper.innerHTML = `<div class="title">${item.title}</div>
        <div class="descr">${item.descr}</div>`
    });
    news.append(wrapper);


    btnStatus.classList.add('btn__status-active');
    count++;
});

