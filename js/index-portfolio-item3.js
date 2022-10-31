import {imgDataProject3} from './imgData.js'
const imgScroll = document.querySelector(".portfolio-item-individual__callToAction--img")
const moveNext = document.querySelector(".btn_moveNext")
const movePrev = document.querySelector(".btn_movePrev")


let i = 0
moveNext.addEventListener("click", ()=> {
    if ( i < imgDataProject3.length - 1 ) {
        i++
    } else {
        i = 0
    }
    imgScroll.src = imgDataProject3[i]
})
movePrev.addEventListener("click", ()=> {
    if ( i === 0 ) {
        i = imgDataProject3.length - 1
    } else {
        i --
    }
    imgScroll.src = imgDataProject3[i]
})