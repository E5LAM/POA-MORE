const sr = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 1500,
  reset: true,
});

sr.reveal(`.content-data`, {
  interval: 200,
});


// const card = document.querySelector('.card');

// function clickRotate() {
//   card.classList.toggle('rotated');
// }
// card.addEventListener('click', clickRotate);

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('rotated');
  });
});