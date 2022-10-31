const naveToogle = document.querySelector(".nav-toggle")
const navLink = document.querySelectorAll(".nav__link")


naveToogle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open")
})

navLink.forEach(link => {
     link.addEventListener("click", () => {
        document.body.classList.remove("nav-open")
     })
})

