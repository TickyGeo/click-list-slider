const sliderItems = document.querySelectorAll('.slider .item');
const prevBtn = document.querySelector('.slider .btn.prev');
const nextBtn = document.querySelector('.slider .btn.next');
const radio = document.querySelectorAll('.slider .radio input');

let cur = 0;

nextBtn.onclick = () => {
    cur++;
    cur == radio.length ? cur = 0 : '';
    for (let i = 0; i < sliderItems.length; i++) {
        sliderItems[i].style = 'width: calc(100% / 8); filter: grayscale(80%);';
    };
    sliderItems[cur].style = 'width: 140%; filter: none';
    radio[cur].checked = true;
};

prevBtn.onclick = () => {
    cur--;
    cur < 0 ? cur = radio.length - 1 : '';
    for (let i = 0; i < sliderItems.length; i++) {
        sliderItems[i].style = 'width: calc(100% / 8); filter: grayscale(80%);';
    };
    sliderItems[cur].style = 'width: 140%; filter: none';
    radio[cur].checked = true;
};

for (let i = 0; i < radio.length; i++) {
    radio[i].onchange = () => {
        cur = i;
        for (let k = 0; k < sliderItems.length; k++) {
            sliderItems[k].style = 'width: calc(100% / 8); filter: grayscale(80%);';
        };
        sliderItems[cur].style = 'width: 140%; filter: none';
    };
};