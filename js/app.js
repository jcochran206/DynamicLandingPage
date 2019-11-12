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





/* document listener */
document.addEventListener('DOMContentLoaded', (event) => {
    buildNav();
    smoothScroll();
});
