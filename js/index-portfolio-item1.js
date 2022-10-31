import {imgDataProject1} from './imgData.js'
const imgScroll = document.querySelector(".portfolio-item-individual__callToAction--img")
const moveNext = document.querySelector(".btn_moveNext")
const movePrev = document.querySelector(".btn_movePrev")


let i = 0
moveNext.addEventListener("click", ()=> {
    if ( i < imgDataProject1.length - 1 ) {
        i++
    } else {
        i = 0
    }
    imgScroll.src = imgDataProject1[i]
})
movePrev.addEventListener("click", ()=> {
    if ( i === 0 ) {
        i = imgDataProject1.length - 1
    } else {
        i --
    }
    imgScroll.src = imgDataProject1[i]
})