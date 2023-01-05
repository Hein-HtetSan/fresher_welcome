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

Reveal.reveal(homePageCard, {delay: 150, origin: "top", interval: 100});
Reveal.reveal(homePageCardNav, {delay: 280, opactiy: 0.4, interval: 150, distance: '10px'})
Reveal.reveal(cardTitle, {delay: 580, opacity: 0.4, interval: 150, distance: '10px'})
Reveal.reveal(cardContents, {delay: 580, opacity: 0.4, interval: 150, distance: '10px'})