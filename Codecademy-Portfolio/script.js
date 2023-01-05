/* I don't want the button to be visible all the time -
I am going to show it when the user has scrolled at least 100px
*/
const showOnPx = 100;
const backToTopButton = document.querySelector('.back-to-top');

/* scrollContainer function returns document.documentElementwhich is HTML
element of out document. If it is not available, the document.body
element is returned instead.
*/
const scrollContainer = () => {
    return document.documentElement || document.body;
  };

/* I am adding an event listener to my document that will trigger the 
callback function on scroll. The scrollTop value that I am getting from
the scrollContainer is the number of px that element has been scrolled from
the top. When the value is higher than 100px, I remove the hidden class from
the button.
*/
document.addEventListener('scroll', () => {
    if (scrollContainer().scrollTop > showOnPx) {
      backToTopButton.classList.remove('hidden')
    } else {
      backToTopButton.classList.add('hidden')
    }
  });

/* The scrollIntoView() method scrolls the page to bring the element 
it is being called upon into view. Here I am calling it on the 
body so the page will be scrolled to the top.
*/
const goToTop = () => {
    document.body.scrollIntoView({
      behavior: 'smooth',
    });
  };

backToTopButton.addEventListener('click', goToTop);

/* I want to move to my sections in a smooth way so when clicking on 
anchors (#) in the nav the default instant scrool to my sections is 
now changed to smooth.
*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
