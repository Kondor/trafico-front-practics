(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    const menuCloseItem = document.querySelector('.header__nav-close');

    const imgItem = document.querySelector('.row__img');
    const info = document.querySelector('.box');
    
    burgerItem.addEventListener('click',() => {
        menu.classList.add('header__nav-active');
    });

    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__nav-active');
    });

    imgItem.addEventListener('click',() => {
        info.parentNode.classList.add('hid');
    });

/* KARUSEL */

// var btn_prev = document.querySelector('title__nav-left');
// var btn_next = document.querySelector('title__nav-rigth');

// var images = document.querySelectorAll('owl-carousel');
// var i = 0;

// btn_prev.onclick = function(){
//      images[i].style.display = 'none';
//      i = i - 1; /* i-- */
     
//      if(i < 0){
//          i = images.length - 1;
//      }
     
//      images[i].style.display = 'block';
// }

// btn_next.onclick = function(){
//      images[i].style.display = 'none';
//      i = i + 1; /* i++ */
     
//      if(i >= images.length){
//          i = 0;
//      }
     
//      images[i].style.display = 'block';
// }


/* DropDownList for 1 START */

const block_plus_1 = document.querySelectorAll('.row__img-plus')[0];
const block_minus_1 = document.querySelectorAll('.row__img-minus')[0];

console.log(block_plus_1);
console.log(block_minus_1);

const drop_list_1 = document.querySelectorAll('.box__row')[0].querySelector('#myDropdown');
console.log(drop_list_1);


block_plus_1.addEventListener('click', () => {
    block_plus_1.classList.add('active-img-none');

    block_minus_1.classList.remove('active-img-none');
    block_minus_1.classList.add('active-img-block');

    drop_list_1.classList.add('show');

    console.log(block_plus_1);
    console.log(block_minus_1);
    console.log(drop_list_1);
});

block_minus_1.addEventListener('click', () => {

    drop_list_1.classList.remove('show');

    block_minus_1.classList.remove('active-img-block');
    block_minus_1.classList.add('active-img-none');
    block_plus_1.classList.remove('active-img-none');
    
    console.log(block_plus_1);
    console.log(block_minus_1);
    console.log(drop_list_1);
});

/* DropDownList for 1 END */



/* DropDownList for 2 START */

const block_plus_2 = document.querySelectorAll('.row__img-plus')[1];
const block_minus_2 = document.querySelectorAll('.row__img-minus')[1];

const drop_list_2 = document.querySelectorAll('.box__row')[1].querySelector('#myDropdown');

block_plus_2.addEventListener('click', () => {
    block_plus_2.classList.add('active-img-none');

    block_minus_2.classList.remove('active-img-none');
    block_minus_2.classList.add('active-img-block');

    drop_list_2.classList.add('show');
});

block_minus_2.addEventListener('click', () => {

    drop_list_2.classList.remove('show');

    block_minus_2.classList.remove('active-img-block');
    block_minus_2.classList.add('active-img-none');
    block_plus_2.classList.remove('active-img-none');
});

/* DropDownList for 2 END */



/* DropDownList for 3 START */

const block_plus_3 = document.querySelectorAll('.row__img-plus')[2];
const block_minus_3 = document.querySelectorAll('.row__img-minus')[2];

const drop_list_3 = document.querySelectorAll('.box__row')[2].querySelector('#myDropdown');

block_plus_3.addEventListener('click', () => {
    block_plus_3.classList.add('active-img-none');

    block_minus_3.classList.remove('active-img-none');
    block_minus_3.classList.add('active-img-block');

    drop_list_3.classList.add('show');
});

block_minus_3.addEventListener('click', () => {

    drop_list_3.classList.remove('show');

    block_minus_3.classList.remove('active-img-block');
    block_minus_3.classList.add('active-img-none');
    block_plus_3.classList.remove('active-img-none');
});

/* DropDownList for 3 END */



/* DropDownList for 4 START */

const block_plus_4 = document.querySelectorAll('.row__img-plus')[3];
const block_minus_4 = document.querySelectorAll('.row__img-minus')[3];

const drop_list_4 = document.querySelectorAll('.box__row')[3].querySelector('#myDropdown');

block_plus_4.addEventListener('click', () => {
    block_plus_4.classList.add('active-img-none');

    block_minus_4.classList.remove('active-img-none');
    block_minus_4.classList.add('active-img-block');

    drop_list_4.classList.add('show');
});

block_minus_4.addEventListener('click', () => {

    drop_list_4.classList.remove('show');

    block_minus_4.classList.remove('active-img-block');
    block_minus_4.classList.add('active-img-none');
    block_plus_4.classList.remove('active-img-none');
});

/* DropDownList for 4 END */



/* DropDownList for 5 START */

const block_plus_5 = document.querySelectorAll('.row__img-plus')[4];
const block_minus_5 = document.querySelectorAll('.row__img-minus')[4];

const drop_list_5 = document.querySelectorAll('.box__row')[4].querySelector('#myDropdown');

block_plus_5.addEventListener('click', () => {
    block_plus_5.classList.add('active-img-none');

    block_minus_5.classList.remove('active-img-none');
    block_minus_5.classList.add('active-img-block');

    drop_list_5.classList.add('show');
});

block_minus_5.addEventListener('click', () => {

    drop_list_5.classList.remove('show');

    block_minus_5.classList.remove('active-img-block');
    block_minus_5.classList.add('active-img-none');
    block_plus_5.classList.remove('active-img-none');
});

/* DropDownList for 5 END */



/* DropDownList for 6 START */

const block_plus_6 = document.querySelectorAll('.row__img-plus')[5];
const block_minus_6 = document.querySelectorAll('.row__img-minus')[5];

const drop_list_6 = document.querySelectorAll('.box__row')[5].querySelector('#myDropdown');

block_plus_6.addEventListener('click', () => {
    block_plus_6.classList.add('active-img-none');

    block_minus_6.classList.remove('active-img-none');
    block_minus_6.classList.add('active-img-block');

    drop_list_6.classList.add('show');
});

block_minus_6.addEventListener('click', () => {

    drop_list_6.classList.remove('show');

    block_minus_6.classList.remove('active-img-block');
    block_minus_6.classList.add('active-img-none');
    block_plus_6.classList.remove('active-img-none');
});

/* DropDownList for 6 END */



/* DropDownList for 7 START */

const block_plus_7 = document.querySelectorAll('.row__img-plus')[6];
const block_minus_7 = document.querySelectorAll('.row__img-minus')[6];

const drop_list_7 = document.querySelectorAll('.box__row')[6].querySelector('#myDropdown');

block_plus_7.addEventListener('click', () => {
    block_plus_7.classList.add('active-img-none');

    block_minus_7.classList.remove('active-img-none');
    block_minus_7.classList.add('active-img-block');

    drop_list_7.classList.add('show');
});

block_minus_7.addEventListener('click', () => {

    drop_list_7.classList.remove('show');

    block_minus_7.classList.remove('active-img-block');
    block_minus_7.classList.add('active-img-none');
    block_plus_7.classList.remove('active-img-none');
});

/* DropDownList for 7 END */



/* DropDownList for 8 START */

const block_plus_8 = document.querySelectorAll('.row__img-plus')[7];
const block_minus_8 = document.querySelectorAll('.row__img-minus')[7];

const drop_list_8 = document.querySelectorAll('.box__row')[7].querySelector('#myDropdown');

block_plus_8.addEventListener('click', () => {
    block_plus_8.classList.add('active-img-none');

    block_minus_8.classList.remove('active-img-none');
    block_minus_8.classList.add('active-img-block');

    drop_list_8.classList.add('show');
});

block_minus_8.addEventListener('click', () => {

    drop_list_8.classList.remove('show');

    block_minus_8.classList.remove('active-img-block');
    block_minus_8.classList.add('active-img-none');
    block_plus_8.classList.remove('active-img-none');
});

/* DropDownList for 8 END */



/* DropDownList for 9 START */

const block_plus_9 = document.querySelectorAll('.row__img-plus')[8];
const block_minus_9 = document.querySelectorAll('.row__img-minus')[8];

const drop_list_9 = document.querySelectorAll('.box__row')[8].querySelector('#myDropdown');

block_plus_9.addEventListener('click', () => {
    block_plus_9.classList.add('active-img-none');

    block_minus_9.classList.remove('active-img-none');
    block_minus_9.classList.add('active-img-block');

    drop_list_9.classList.add('show');
});

block_minus_9.addEventListener('click', () => {

    drop_list_9.classList.remove('show');

    block_minus_9.classList.remove('active-img-block');
    block_minus_9.classList.add('active-img-none');
    block_plus_9.classList.remove('active-img-none');
});

/* DropDownList for 9 END */



/* DropDownList for 10 START */

const block_plus_10 = document.querySelectorAll('.row__img-plus')[9];
const block_minus_10 = document.querySelectorAll('.row__img-minus')[9];

const drop_list_10 = document.querySelectorAll('.box__row')[9].querySelector('#myDropdown');

block_plus_10.addEventListener('click', () => {
    block_plus_10.classList.add('active-img-none');

    block_minus_10.classList.remove('active-img-none');
    block_minus_10.classList.add('active-img-block');

    drop_list_10.classList.add('show');
});

block_minus_10.addEventListener('click', () => {

    drop_list_10.classList.remove('show');

    block_minus_10.classList.remove('active-img-block');
    block_minus_10.classList.add('active-img-none');
    block_plus_10.classList.remove('active-img-none');
});

/* DropDownList for 10 END */



/* DropDownList for 11 START */

const block_plus_11 = document.querySelectorAll('.row__img-plus')[10];
const block_minus_11 = document.querySelectorAll('.row__img-minus')[10];

const drop_list_11 = document.querySelectorAll('.box__row')[10].querySelector('#myDropdown');

block_plus_11.addEventListener('click', () => {
    block_plus_11.classList.add('active-img-none');

    block_minus_11.classList.remove('active-img-none');
    block_minus_11.classList.add('active-img-block');

    drop_list_11.classList.add('show');
});

block_minus_11.addEventListener('click', () => {

    drop_list_11.classList.remove('show');

    block_minus_11.classList.remove('active-img-block');
    block_minus_11.classList.add('active-img-none');
    block_plus_11.classList.remove('active-img-none');
});

/* DropDownList for 11 END */



/* DropDownList for 12 START */

const block_plus_12 = document.querySelectorAll('.row__img-plus')[11];
const block_minus_12 = document.querySelectorAll('.row__img-minus')[11];

const drop_list_12 = document.querySelectorAll('.box__row')[11].querySelector('#myDropdown');

block_plus_12.addEventListener('click', () => {
    block_plus_12.classList.add('active-img-none');

    block_minus_12.classList.remove('active-img-none');
    block_minus_12.classList.add('active-img-block');

    drop_list_12.classList.add('show');
});

block_minus_12.addEventListener('click', () => {

    drop_list_12.classList.remove('show');

    block_minus_12.classList.remove('active-img-block');
    block_minus_12.classList.add('active-img-none');
    block_plus_12.classList.remove('active-img-none');
});

/* DropDownList for 12 END */

}());


