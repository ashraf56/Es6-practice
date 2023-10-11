

let pi=[
    'images/pic-1.jpg','images/pic-2.jpg','images/pic-3.jpg','images/pic-4.jpg','images/pic-5.jpg','images/pic-6.jpg','images/pic-7.jpg','images/pic-8.jpg','images/pic-9.jpg'
]
let imgid=document.getElementById('slider-img')
let img=0
setInterval(() => {
    
if (img === pi.length) {
    img=0;
} let url=pi[img]
    console.log(img,url);
    imgid.setAttribute('src',url)
    img++
}, 1000);