let people = [
  {
    img: '/images/person-2.jpg',
    name: 'Jhon Human',
    work: 'PROFESSIONAL REVIEWER',
    review:
      "I love reviewing stuff, I'm always on yelp reviewing restaurants, I always give bad reviews if they don't pick up my fork from the floor when I purposly throw it... If the michelin star restaurants do it why domino's can't?",
  },
  {
    img: '/images/person-1.jpeg',
    name: 'Jean Horse',
    work: 'FUNERAL CRASHER',
    review:
      'Some people like to hire people like me to crash at their funerals and wreck havoc.',
  },
  {
    img: '/images/person-3.jpg',
    name: 'Sarah Notconnor',
    work: 'CAT PSYCOLOGIST',
    review:
      "Approaching the state of mind of a cat It's complicated, some cats don't like to respond and they always fall asleep in the middle of a sesion",
  },
  {
    img: '/images/person-4.jpg',
    name: 'Leia Pricess',
    work: 'JEDI ADVOCATE',
    review: 'I provide support for the people who fight against the dark side',
  },
];
const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');
const surpriseBtn = document.querySelector('#surprisebtn');
let img = document.querySelector('#profile-picture');
let name = document.querySelector('#name');
let work = document.querySelector('#work');
let review = document.querySelector('#review');

let current = 0;

leftBtn.addEventListener('click', () => {
  console.log(current);
  if (current < 0) {
    console.log(current);
    current = people.length - 1;
    console.log('despues de reasignar', current);
  }
  img.setAttribute('src', people[current].img);
  name.innerText = people[current].name;
  work.innerText = people[current].work;
  review.innerText = people[current].review;
  current--;
});

rightBtn.addEventListener('click', () => {
  if (current === people.length) {
    current = 0;
  }
  img.setAttribute('src', people[current].img);
  name.innerText = people[current].name;
  work.innerText = people[current].work;
  review.innerText = people[current].review;
  console.log(current);
  current++;
});

surpriseBtn.addEventListener('click', () => {
  current = Math.floor(Math.random() * (people.length - 1));
  img.setAttribute('src', people[current].img);
  name.innerText = people[current].name;
  work.innerText = people[current].work;
  review.innerText = people[current].review;
  console.log(current);
  current++;
});
