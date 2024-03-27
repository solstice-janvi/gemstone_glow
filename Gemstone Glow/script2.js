document.addEventListener('DOMContentLoaded', function() {
    let text = document.getElementById('text');
    let leaf = document.getElementById('leaf');
    let hill1 = document.getElementById('hill1');
    let hill4 = document.getElementById('hill4');
    let hill5 = document.getElementById('hill5');


    window.addEventListener('scroll', () => {
        let value = window.scrollY;

        text.style.marginTop = value * 2.5 + 'px';
        text.style.Top = value * -1.5 + 'px'; 
        leaf.style.left = value * 1.5 + 'px';
        hill5.style.left = value * 1.5 + 'px';
        hill4.style.left = value * -1.5 + 'px';
        hill1.style.Top = value * 1 + 'px'; 
    });
    
});

const bar = document.getElementById('bar');
const nav = document.getElementsByClassName('navigation')[0]; // Access the first element with class 'navigation'
const close = document.getElementById('close');

//  for nav
if (bar && nav) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');

        if (close){
            close.addEventListener('click',() => {
                nav.classList.remove('active');
            })
        }
    })
}

// for slider
function slideLeft() {
    const slider = document.querySelector('.slider');
    slider.style.transform = 'translateX(-310px)'; // Adjust the value based on product card width and margin
  }
  
  // Function to slide the products to the right
  function slideRight() {
    const slider = document.querySelector('.slider');
    slider.style.transform = 'translateX(0)';
  }


  //opening new page
  document.getElementById("openPage").addEventListener("click", function(){
    window.open("product1.html","_blank");
  })

  