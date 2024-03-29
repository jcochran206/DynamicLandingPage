/* Title: Dynamic Landing page JS
   Author: Jonathan Cochran
   Description: JS section that provides smooth scrolling
   and identifies new sections in html page then automatically
   adds them to navigation links!
*/

/* Global variables */
const ldSections = document.querySelectorAll('section');

/* functions */

/* build navbar */
function buildNav() {
  //1) select nav section
  const nav = document.querySelector('#list');
  //2 create text for 1st or top section link

  //3) create loop to build links
  for(section of ldSections){
    // create li
    const navLink = document.createElement('li');
    // create anchor
    const anchorTag = document.createElement('a');
    // get section attr
    const ldSectionName = section.getAttribute("data-nav");
    // set href and id
    anchorTag.setAttribute('href', '#'+section.id);
    // set
    anchorTag.setAttribute('class', 'menu__link '+ldSectionName);
    anchorTag.textContent = ldSectionName;
    navLink.appendChild(anchorTag);
    nav.appendChild(navLink);
  }
}

// js smooth scroll
function smoothScroll(){
  const navLinks = document.querySelectorAll('a[href^="#"]');
  for(i = 0; i < navLinks.length; i++){
    navLinks[i].addEventListener('click', function() {
    const navie = document.querySelector(this.getAttribute('href'));
    navie.scrollIntoView({behavior: 'smooth', block: "end", inline: "nearest"
    });

    })
  }
};

// add active class to section
function inView(){
  const landingSection = document.querySelector('section');
  const domRect = landingSection.getBoundingClientRect();
  const scrolled = document.documentElement.scrollHeight - window.innerHeight; //entire document height
  let topps = domRect.top;
  let bottomEnd = domRect.bottom;
  if(topps >= 0 && bottomEnd - window.innerHeight){
    console.log('yup');
  }else{
    console.log('nothing')
  }


  let viewActive = (Math.ceil(topps)); //true
  console.log(Math.ceil(viewActive));

}

//added class
function addClass(){
  for(sector of ldSections){
    if(inView(sector) && view == true){
      sector.classList.add("active-class");
    }else {
      sector.classList.remove("active-class");
    }
  }
}

//Scroll listener

window.addEventListener('scroll', () => {
  addClass();
  console.log("scrolled")
})





/* document listener */
document.addEventListener('DOMContentLoaded', (event) => {
    buildNav();
    smoothScroll();
});
