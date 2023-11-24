'use strict';

const hero = document.querySelector('.section-hero');
const header = document.querySelector('.header')
const allSection = document.querySelectorAll('.section');

//sticky header

const navHeight = header.getBoundingClientRect().height;
console.log(navHeight);

const stickyNav = function(entries) {
  const [entry] = entries;
  !entry.isIntersecting ? header.classList.add('sticky') : header.classList.remove('sticky');
}

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null, 
  threshold: 0, 
  //rootMargin: `-${navHeight}px 0px 0px 0px`,
})

headerObserver.observe(hero);

//Reveal

const revealSection = function(entries, observer) {
  const [entry] = entries;
  if(!entry.isIntersecting) return;
  else entry.target.classList.remove('section-hidden');
  
  observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null, 
  threshold: 0.7,
  
})

allSection.forEach(section => { 
  section.classList.add('section-hidden');
  sectionObserver.observe(section)
  
})

// click