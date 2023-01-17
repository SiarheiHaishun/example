const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu_close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});

let first = document.getElementById("first");
        let last = document.getElementById("last");
        let text = document.getElementById("text");

        window.addEventListener('scroll', function(){
            var value = window.scrollY;

            first.style.top = value * 0.7 + 'px';
            last.style.bottom = value * 0.5 + 'px';
            text.style.top = value * 1 + 'px';
        });

