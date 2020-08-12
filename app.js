const reviews = [
  {
    id: 1,
    name: "Harry Potter",
    job: "Chosen One",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9ml-4THg4oAuUurwgG9sew3iJWSbSbCCzfQ&usqp=CAU",
    text: "Sad boi with a mind full of chaos and determined to be up to no good."
  },
  {
    id: 2,
    name: "Ron Weasley",
    job: "Red Hed",
    img: "https://i.pinimg.com/originals/34/32/03/34320390a1209b8ee04bfde22b8b62fa.jpg",
    text: "Sad boi's best friend with an equally awesome personality and set of skills.",
  },
  {
    id: 3,
    name: "Hermione Granger",
    job: "Clever One",
    img: "https://miro.medium.com/max/612/1*N1jAR-lrHmrOPQCtneSjmw.jpeg",
    text: "Professional studier.",
  },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function() {
  showPerson();
});

function showPerson() {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

nextBtn.addEventListener("click", function() {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

prevBtn.addEventListener("click", function() {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});

randomBtn.addEventListener("click", function() {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson()
});