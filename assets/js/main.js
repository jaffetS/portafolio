/*=============== Show menu ===============*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

/*===== Menu Show ===== */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

/*===== Hide Show ===== */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/*=============== Remove menu mobile ===============*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
}

navLink.forEach((n) => n.addEventListener('click', linkAction));

/*=============== Active Link ===============*/
const navlink = document.querySelectorAll('.nav__link');

function activeLink() {
  navlink.forEach((a) => a.classList.remove('active-link'));
  this.classList.add('active-link');
}

navlink.forEach((a) => a.addEventListener('click', activeLink));

/*=============== Background Header ===============*/
function scrollHeader() {
  const header = document.getElementById('header');
  // cuando el desplazamiento sea superioor a 50 de altura de la ventana gráfica, agregue la clase de encabezado de desplazamiento a la etiqueta del encabezado
  if (this.scrollY >= 50) header.classList.add('scroll-header');
  else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

/*=============== Mixitup Filter ===============*/
let mixerProjects = mixitup('.projects__container', {
  selectors: {
    target: '.project__item'
  },
  animation: {
    duration: 300,
  },
});

/* Active Work */
const linkWork = document.querySelectorAll('.category__btn');

function activeWork() {
  linkWork.forEach((a) => a.classList.remove('active-work'));
  this.classList.add('active-work');
}

linkWork.forEach((a) => a.addEventListener('click', activeWork));

/*=============== Testimonios Swiper ===============*/
var testiSwiper = new Swiper(".testimonial__container", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

/*=============== Contact Form ===============*/
const contactForm = document.getElementById('contact-form'),
  contactName = document.getElementById('contact-name'),
  contactEmail = document.getElementById('contact-email'),
  Message = document.getElementById('message'),
  contactMessage = document.getElementById('contact__message');

const sendEmail = (e) => {
  e.preventDefault();

  // comprueba si el campo tiene un valor
  if (
    contactName.value === '' ||
    contactEmail.value === '' ||
    Message.value === ''
  ) {
    // agrega y quita color
    contactMessage.classList.remove('color-light');
    contactMessage.classList.add('color-dark');

    // mostrar mensaje
    contactMessage.textContent = 'Llena los datos';
  } else {
    //serviceID - templateID - #form - publickey
    emailjs
      .sendForm(
        'service_sfctqzi',
        'template_1nx4pdq',
        '#contact-form',
        'U5e0AcDVfVOhobqPj'
      )
      .then(() => {
        // mostrar mensaje y agregar color
        contactMessage.classList.add('color-light');
        contactMessage.textContent = 'Mensaje enviado ✔️';

        // quitar el mensaje despues de 5 segundos
        setTimeout(() => {
          contactMessage.textContent = '';
        }, 5000);
      },
        (error) => {
          alert('OOPs! ALGO SALIO MAL...', error)
        }
      );

    // borrar los campos
    contactName.value = '';
    contactEmail.value = '';
    Message.value = '';
  }
};

contactForm.addEventListener('submit', sendEmail);

/*=============== Style Switcher ===============*/
const styleSwitcherToggle = document.querySelector('.style__switcher-toggler'),
  styleSwitcher = document.querySelector('.style__switcher');

styleSwitcherToggle.addEventListener('click', () => {
  styleSwitcher.classList.toggle('open');
});

//hide switcher on scroll
window.addEventListener('scroll', () => {
  if (styleSwitcher.classList.contains('open')) {
    styleSwitcher.classList.remove('open');
  }
});

const alternateStyles = document.querySelectorAll('.alternate-style');

function setActiveStyle(color){
  alternateStyles.forEach((style) => {
    if(color === style.getAttribute('title')){
      style.removeAttribute('disabled');
    }else{
      style.setAttribute('disabled', 'true');
    }
  });
}