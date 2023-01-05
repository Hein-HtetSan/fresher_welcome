ScrollReveal({
    reset: true,
    distance: '30px',
    duration: 2500,
    delay: 400,
});

const Reveal = ScrollReveal()

const homePageCardNav = document.querySelector(".homepagecardnav")
const homePageCard = document.querySelector(".card");
const cardTitle = document.querySelector(".card-title")
const cardContents = document.querySelector(".card-contents")
const cardImage = document.querySelector(".card-img")
const cardBtn = document.querySelector(".card-btn")

Reveal.reveal(homePageCard, {delay: 150, origin: "top", interval: 100});
Reveal.reveal(homePageCardNav, {delay: 280, opactiy: 0.4, distance: '10px'})
Reveal.reveal(cardTitle, {delay: 580, opacity: 0.1, distance: '10px'})
Reveal.reveal(cardContents, {delay: 580, opacity: 0.1, distance: '10px'})
Reveal.reveal(cardImage, {delay: 550, opactiy: 0.1, distance: '0px'})
Reveal.reveal(cardBtn, {delay: 900, opacity: 0.05, distance: '20px', origin: 'top'})