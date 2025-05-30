"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const ctaButton = document.querySelector(".cta-button");
    const contactFormSection = document.querySelector(".contact-form");
  
    ctaButton.addEventListener("click", () => {
      contactFormSection.scrollIntoView({ behavior: "smooth" });
    });
  
    const form = contactFormSection.querySelector("form");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const name = form.querySelector("input[type='text']").value.trim();
      const phone = form.querySelector("input[type='tel']").value.trim();
      const email = form.querySelector("input[type='email']").value.trim();
  
      if (!name || !phone || !email) {
        alert("Будь ласка, заповніть усі поля форми.");
        return;
      }

      alert(`Дякуємо, ${name}! Ваша заявка прийнята.`);
  
      form.reset();
    });
  });

  const header = document.querySelector('.header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      header.classList.add('shrink');
    } else{
      header.classList.remove('shrink');
    }
  });


  const btnGoTop = document.querySelector('#go-top')

  document.addEventListener('scroll', () => {
      if (window.scrollY > 220) {
          btnGoTop.classList.add('visible')
      } else {
          btnGoTop.classList.remove('visible')
      }
  })
  
  btnGoTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
  })

  const burger = document.querySelector('.burger');
  const navWrapper = document.querySelector('.nav-wrapper');
  const overlay = document.querySelector('.overlay');
  const body = document.body;

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navWrapper.classList.toggle('open');
    overlay.classList.toggle('active');
    body.classList.toggle('no-scroll');
  });

  document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('active');
      navWrapper.classList.remove('open');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });
  });

  overlay.addEventListener('click', () => {
    burger.classList.remove('active');
    navWrapper.classList.remove('open');
    overlay.classList.remove('active');
    body.classList.remove('no-scroll');
  });


  function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days*864e5).toUTCString();
    document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/';
  }

  function getCookie(name) {
    return document.cookie.split('; ').reduce((r, v) => {
      const parts = v.split('=');
      return parts[0] === name ? decodeURIComponent(parts[1]) : r
    }, '');
  }

  function enableScrollSave() {
    window.addEventListener('beforeunload', () => {
      setCookie('lastScrollY', window.scrollY, 7);
    });

    const lastScroll = getCookie('lastScrollY');
    if (lastScroll) {
      window.scrollTo(0, parseInt(lastScroll));
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
  const aboutBoxes = document.querySelector('.about-boxes');

  aboutBoxes.addEventListener('scroll', () => {
    const scrollTop = aboutBoxes.scrollTop;
    const scrollHeight = aboutBoxes.scrollHeight;
    const clientHeight = aboutBoxes.clientHeight;
    const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
  });
});

  window.addEventListener('DOMContentLoaded', () => {
    const banner = document.querySelector('#cookie-banner');
    const modal = document.querySelector('#cookie-modal');
    const acceptBtn = document.querySelector('#accept-cookies');
    const declineBtn = document.querySelector('#decline-cookies');
    const moreInfoBtn = document.querySelector('#more-info');
    const closeModalBtn = document.querySelector('#close-modal');

    const accepted = getCookie('acceptCookies');

    if (accepted === 'true') {
      enableScrollSave();
    } else if (accepted !== 'false') {
      banner.classList.add('show');
    }

    acceptBtn.addEventListener('click', () => {
      setCookie('acceptCookies', 'true', 30);
      banner.style.display = 'none';
      enableScrollSave();
    });

    declineBtn.addEventListener('click', () => {
      setCookie('acceptCookies', 'false', 30);
      banner.style.display = 'none';
    });

    moreInfoBtn.addEventListener('click', () => {
      modal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  });

  
  
  
