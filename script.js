const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  if (e.target.matches('.next')) {
    slider.append(items[0]);
  } else if (e.target.matches('.prev')) {
    slider.prepend(items[items.length - 1]);
  }

  // Show birthday message on the current active slide
  const currentSlide = document.querySelector('.item:nth-child(2)');
  const content = currentSlide.querySelector('.content');
  toggleContent(content);
  }

  function toggleContent(content) {
    if (content.style.display === 'none' || content.style.display === '') {
      content.style.display = 'block';
      animateContent(content);
    } else {
      content.style.display = 'none';
    }
  }

  function animateContent(content) {
    content.classList.add('show');
  }

  document.addEventListener('click', activate, false);
