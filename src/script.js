let count = 0;
let info = [
    {
        title: 'Веб-разработчик',
        descr: 'Веб-разработчик разрабатывает сайт на языках HTML, CSS и JavaScript. Создаёт интерфейсы с помощью библиотеки React.',
        id: count,
    }
];
let logs = [
    {
        id: 'колличество кликов:',
        count: count,
    }
];

let accord = document.querySelector('.accord');
let btn = document.querySelector('.btn');
let news = document.querySelector('.accord__news');
let btnStatus = document.querySelector('.btn__info__enable');

btn.addEventListener('click', function() {
    count++;
    if(count < 2) {
        let wrapper = document.createElement('div');
        wrapper.classList.toggle('accord__news__wrapper');
    
        info.forEach(function(item) {
            wrapper.innerHTML = `<div class="title">${item.title}</div>
            <div class="descr">${item.descr}</div>`
            item.id = count;
        });
        news.append(wrapper);
    }


    news.classList.toggle('accord__news-active');
    btnStatus.classList.toggle('btn__info__enable-active');
    btn.classList.toggle('btn-active');

    addLogs(count);
});

function addLogs(count) {
    logs.forEach(function(item) {
        item.count = count;
        console.log(`${item.id} ${item.count}`);
    });
}