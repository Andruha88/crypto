window.addEventListener('scroll', function() {
  const arrow = document.querySelector('.arrov');
  const scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    arrow.style.opacity = 0;
  } else {
    arrow.style.opacity = 1;
  }
});

// 

// Отримання елементів
const modal = document.getElementById('modal');
const btn = document.getElementById('open-modal');
const span = document.getElementsByClassName('close')[0];
const form = document.getElementById('contact-form');

// Відкриття модального вікна
btn.onclick = function() {
  modal.style.display = "block";
}

// Закриття модального вікна
span.onclick = function() {
  modal.style.display = "none";
}

// Відправка форми
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Запобігаємо перезавантаження сторінки
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;   

  const message = document.getElementById('message').value;   


  // Створення посилання для відправки листа
  const mailtoLink = `mailto:admin@crypto-careers.net?subject=${subject}&body=Відправник: ${name} (${email})%0A${message}`;
  window.location.href = mailtoLink;
  modal.style.display = "none"; // Закриваємо модалку після відправки
});