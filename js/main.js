let btns = document.querySelectorAll('.btn');

// scroll to form
for (let btn of btns) {
  btn.addEventListener('click', function () {
    let form = document.querySelector('form');
    form.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}
    
// slider
let itemIndex = 1;
showSlides(itemIndex);

function plusSlides(n) {
  showSlides(itemIndex += n);
}
function currentSlide(n) {
  showSlides(itemIndex = n);
}

function showSlides(n) {
  let items = document.getElementsByClassName('carusel__item');
 
  if (n > items.length) {
    itemIndex = 1;
  }
  if (n < 1) {
    itemIndex = items.length;
  }
  for (let i = 0; i < items.length; i++) {
    items[i].style.display = "none";
  }
  items[itemIndex -1].style.display = "block";
}

// tooltip
let popName = document.getElementById('name-tooltip');
let popTel = document.getElementById('tel-tooltip');
let inpName = document.querySelector('.user-name');
let inpTel = document.querySelector('.user-phone');
inpName.addEventListener('mouseenter', () => {
  popName.style.display = "block"
});
 
inpName.addEventListener('mouseleave', () => {
  popName.style.display = 'none';
 
});

inpTel.addEventListener('mouseenter', () => {
  popTel.style.display = "block";
  inpName.style.marginBottom = "40px";
});
 
inpTel.addEventListener('mouseleave', () => {
  popTel.style.display = 'none';
  inpName.style.marginBottom = "20px";
});