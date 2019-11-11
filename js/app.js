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
  nav.innerHtml = '<li><a href="#top" class="menu__link">Home</a></li>';
  //3) create loop to build links
  for(const ldSection of ldSections) {
    // create li
    const navLink = document.createElement('li');
    // create anchor
    const anchorTag = document.createElement('a');
    // get section attr
    const ldSectionName = ldSection.getAttribute("data-nav");
    // set href and id
    anchorTag.setAttribute('href', '#'+ldSection.id);
    // set
    anchorTag.setAttribute('class', 'menu__link '+ldSectionName);
    anchorTag.textContent = ldSectionName;
    navLink.appendChild(anchorTag);
    nav.appendChild(navLink);
  }
}

// navbarLinks.forEach(elem => elem.addEventListener("click", navbarLinksClick));

// for(let i=0, i<navbarLinks.length; i++ {
//   navbarLinks[i].addEventListener("click", navbarLinksClick);
// });

/* function to scroll to navLink */
// function navbarLinksClick(event){
//   smoothScroll(event);
//   console.log()
// }
function smoothScroll(){
  const navLinks = document.querySelectorAll('a[href^="#"]');
  for(i = 0; i < navLinks.length; i++){
    navLinks[i].addEventListener('click', function() {
    const navie = document.querySelector(this.getAttribute('href'));
    navie.scrollTo({top: 100, behavior: 'smooth'
    });

    })
  }
};

//function update classList
// function updateClass(){
//   for( i = 0; i < ldSections.length; i++){
//     if()
//   }
// }



/* document listener */
document.addEventListener('DOMContentLoaded', (event) => {
    buildNav();
    smoothScroll();
});
