// Слайдер
slidesToggle();
function slidesToggle() {
  const slides = document.querySelectorAll(".slider__photo");
  slides.forEach((slide) => {
    slide.addEventListener("click", () => {
      for (one of slides) one.classList.remove("active");
      slide.classList.add("active");
    });
  });
}

// Табы
showTabs();
function showTabs() {
  let tabNav = document.querySelectorAll(".video__title .title-three");
  let tabContent = document.querySelectorAll(".video__list");
  let tabName;
  tabNav.forEach((item) => item.addEventListener("click", selectTabNav));
  function selectTabNav() {
    tabNav.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
    tabName = this.dataset.name;
    selectTabContent(tabName);
  }
  function selectTabContent(selectName) {
    tabContent.forEach((item) => {
      item.classList.contains(selectName)
        ? item.classList.add("active")
        : item.classList.remove("active");
    });
  }
}

// Бургерное меню
showmobilemenu();
function showmobilemenu() {
  const menu = document.querySelector(".mobileMenu");
  const nav = document.querySelector(".nav");

  menu.addEventListener("click", function () {
    menu.classList.toggle("active");
    nav.classList.toggle("active");
  });
}

// Маска телефона
window.addEventListener("DOMContentLoaded", function () {
  [].forEach.call(document.querySelectorAll(".tel"), function (input) {
    var keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___ ____",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
        new_value = matrix.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
        });
      i = new_value.indexOf("_");
      if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i);
      }
      var reg = matrix
        .substr(0, this.value.length)
        .replace(/_+/g, function (a) {
          return "\\d{1," + a.length + "}";
        })
        .replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (
        !reg.test(this.value) ||
        this.value.length < 5 ||
        (keyCode > 47 && keyCode < 58)
      )
        this.value = new_value;
      if (event.type == "blur" && this.value.length < 5) this.value = "";
    }
    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);
  });
});

// Валидация и отправка формы
const form = document.querySelector(".forma");
checkForm(form);

function checkForm(forma) {
  const errorField = forma.querySelectorAll(".forma__error"),
    btn = forma.querySelector("#forma");
  checkFormField(forma);
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    checkFullField(forma);
    for (error of errorField) {
      if (error.textContent != "") return false;
      else btn.textContent = "Заявка отправлена";
    }
  });
}

function checkFormField(forma) {
  const emailInput = forma.querySelector(".email");
  const telInput = forma.querySelector(".tel");
  const name = forma.querySelector(".name");
  const text = forma.querySelector(".textarea");

  const validateEmail = () => {
    const pattern = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
    if (emailInput.value.match(pattern))
      emailInput.nextElementSibling.innerHTML = "";
    else
      emailInput.nextElementSibling.innerHTML = "Вы ввели некорректный e-mail";
  };
  const validateTel = () => {
    const telInputValue = telInput.value;
    if (telInputValue.length < 17)
      telInput.nextElementSibling.innerHTML =
        "Вы ввели некорректный номер телефона";
    else if (telInputValue.length < 4)
      telInput.nextElementSibling.innerHTML =
        "Поле, обязательное для заполнения";
    else telInput.nextElementSibling.innerHTML = "";
  };
  const validateTextarea = () => {
    if (area.value.length >= 1000)
      area.nextElementSibling.innerHTML =
        "Число символов не должно превышать 1000";
    else area.nextElementSibling.innerHTML = "";
  };
  const validateText = () => {
    const patternLetter = /^[a-zA-ZА-Яа-яЁё]{3,20}$/u;
    if (name.value.length == 0)
      name.nextElementSibling.innerHTML = "Поле, обязательное для заполнения";
    else if (name.value.match(patternLetter) && name.value.length >= 3)
      name.nextElementSibling.innerHTML = "";
    else if (name.value.length >= 30)
      name.nextElementSibling.innerHTML =
        "Число символов не должно превышать 30";
    else if (name.value.length < 3)
      name.nextElementSibling.innerHTML =
        "Число символов не должно быть меньше 3";
    else
      name.nextElementSibling.innerHTML = "Поле может содержать только буквы";
  };
  emailInput.addEventListener("change", validateEmail);
  telInput.addEventListener("change", validateTel);
  name.addEventListener("change", validateText);
  text.addEventListener("change", validateTextarea);
}

function checkFullField(forma) {
  const inputRequired = forma.querySelectorAll("[required]");
  for (input of inputRequired) {
    if (!input.value)
      input.nextElementSibling.innerHTML = "Поле, обязательное для заполнения";
  }
}

// Якорные ссылки
const links = document.querySelectorAll('a[href^="#"]');
links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Анимация с gsap.js
gsap.from(".header .nav__item", {
  opacity: 0,
  y: -50,
  stagger: 0.1,
  ease: "power1.inOut",
});

gsap.from(".mainScreen__title", {
  opacity: 0,
  x: -100,
  ease: "power1.inOut",
});

gsap.from(".mainScreen__desc", {
  opacity: 0,
  x: -100,
  delay: 0.3,
  ease: "power1.inOut",
});

gsap.from(".mainScreen__img", {
  opacity: 0,
  scale: 0.8,
  delay: 0.1,
  duration: 1,
  ease: "power3.out",
});

// Анимация с gsap.js и ScrollTrigger
gsap.from("#stroke", {
  "--dashOffset": 1000,
  delay: 1,
  scrollTrigger: {
    // markers: true,
    trigger: "#page",
    start: "-5% top",
    end: "bottom+=20% bottom",
    scrub: 1,
  },
});

let aboutTitle = new SplitType("#about h2", {
  types: "lines, words, chars",
  tagName: "span",
});

gsap.from(aboutTitle.chars, {
  scrollTrigger: {
    trigger: ".mainScreen",
    start: "center center",
    // markers: true,
  },
  opacity: 0,
  y: -200,
  delay: 0.5,
  stagger: 0.1,
});

gsap.from("#about .svgContainer", {
  scrollTrigger: {
    trigger: ".mainScreen",
    start: "center center",
    // markers: true,
  },
  opacity: 0,
  x: 200,
  delay: 1,
});

gsap.from(".about__text p", {
  scrollTrigger: {
    trigger: ".mainScreen",
    start: "center center",
    // markers: true,
  },
  opacity: 0,
  duration: 1,
  delay: 2,
});

gsap.from(".about__img", {
  scrollTrigger: {
    trigger: ".mainScreen",
    start: "center center",
    // markers: true,
  },
  opacity: 0,
  y: -200,
  delay: 1,
});

let galleryTitle = new SplitType("#gallery h2", {
  types: "lines, words, chars",
  tagName: "span",
});

gsap.from(galleryTitle.chars, {
  scrollTrigger: {
    trigger: "#about",
    start: "center center",
    // markers: true,
  },
  opacity: 0,
  y: -200,
  delay: 0.5,
  stagger: 0.1,
});

gsap.from("#gallery .svgContainer", {
  scrollTrigger: {
    trigger: "#about",
    start: "center center",
    // markers: true,
  },
  opacity: 0,
  x: 200,
  delay: 1,
});

gsap.from(".slider__photo", {
  scrollTrigger: {
    trigger: "#about",
    start: "center center",
    // markers: true,
  },
  opacity: 0,
  x: -300,
  delay: 1,
});

let videoTitle = new SplitType("#video h2", {
  types: "lines, words, chars",
  tagName: "span",
});

gsap.from(videoTitle.chars, {
  scrollTrigger: {
    trigger: "#gallery",
    start: "center center",
    // markers: true,
  },
  opacity: 0,
  y: -200,
  delay: 0.5,
  stagger: 0.1,
});

gsap.from("#video .svgContainer", {
  scrollTrigger: {
    trigger: "#gallery",
    start: "center center",
    // markers: true,
  },
  opacity: 0,
  x: 200,
  delay: 1,
});

gsap.from(".video__title", {
  scrollTrigger: {
    trigger: "#gallery",
    start: "center center",
    // markers: true,
  },
  opacity: 0,
  delay: 1,
});

gsap.from(".video__list img", {
  scrollTrigger: {
    trigger: "#gallery",
    start: "center top",
    // markers: true,
  },
  opacity: 0,
  delay: 1,
  stagger: 0.1,
});

let routesTitle = new SplitType("#routes h2", {
  types: "lines, words, chars",
  tagName: "span",
});

gsap.from(routesTitle.chars, {
  scrollTrigger: {
    trigger: "#video",
    start: "center center",
    // markers: true,
  },
  opacity: 0,
  y: -200,
  delay: 0.5,
  stagger: 0.1,
});

gsap.from("#routes .svgContainer", {
  scrollTrigger: {
    trigger: "#video",
    start: "center center",
    // markers: true,
  },
  opacity: 0,
  x: 200,
  delay: 1,
});

gsap.from(".routes__desc", {
  scrollTrigger: {
    trigger: "#video",
    start: "center center",
    // markers: true,
  },
  opacity: 0,
  duration: 1,
  delay: 1,
});

gsap.from(".route", {
  scrollTrigger: {
    trigger: "#video",
    start: "center center",
    // markers: true,
  },
  opacity: 0,
  x: -300,
  delay: 1,
  stagger: 0.1,
});

let formaTitle = new SplitType("#forma h2", {
  types: "lines, words, chars",
  tagName: "span",
});

gsap.from(formaTitle.chars, {
  scrollTrigger: {
    trigger: "#routes",
    start: "center center",
    // markers: true,
  },
  opacity: 0,
  y: -200,
  delay: 0.5,
  stagger: 0.1,
});

gsap.from("#forma .svgContainer", {
  scrollTrigger: {
    trigger: "#routes",
    start: "center center",
    // markers: true,
  },
  opacity: 0,
  x: 200,
  delay: 1,
});

gsap.from(".forma__img", {
  scrollTrigger: {
    trigger: "#routes",
    start: "center center",
    // markers: true,
  },
  opacity: 0,
  scale: 0.8,
  delay: 0.3,
});

gsap.from(".forma", {
  scrollTrigger: {
    trigger: "#routes",
    start: "bottom center",
    end: "bottom top",
    // markers: true,
  },
  opacity: 0,
  x: -300,
  delay: 0.5,
});

gsap.from(".footer__nav .nav__item", {
  scrollTrigger: {
    trigger: ".footer",
    start: "top bottom",
    // markers: true,
  },
  y: -50,
  stagger: 0.1,
  delay: 1,
});

gsap.from(".footer__svg-left", {
  scrollTrigger: {
    trigger: ".footer",
    start: "top bottom",
    // markers: true,
  },
  x: -50,
  duration: 1,
});

gsap.from(".footer__svg-right", {
  scrollTrigger: {
    trigger: ".footer",
    start: "top bottom",
    // markers: true,
  },
  x: 300,
  duration: 1,
});

gsap.from(".footer__svg-top", {
  scrollTrigger: {
    trigger: ".footer",
    start: "top bottom",
    // markers: true,
  },
  x: 300,
  duration: 1,
});

gsap.from(".footer__svg-center", {
  scrollTrigger: {
    trigger: ".footer",
    start: "top bottom",
    // markers: true,
  },
  y: 300,
  duration: 1,
});

gsap.from(".social", {
  scrollTrigger: {
    trigger: ".footer",
    start: "top bottom",
    // markers: true,
  },
  opacity: 0,
});

gsap.from(".footer__copy", {
  scrollTrigger: {
    trigger: ".footer",
    start: "top bottom",
    // markers: true,
  },
  opacity: 0,
});


gsap.from(".footer__info", {
  scrollTrigger: {
    trigger: ".footer",
    start: "top bottom",
    // markers: true,
  },
  opacity: 0,
});

gsap.from(".title-big", {
  scrollTrigger: {
    trigger: ".title-big",
    start: "-=700px top",
    end: "-=200px top",
    // markers: true,
    scrub: true,
  },
  x: -300,
});