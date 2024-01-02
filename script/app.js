const buttons = document.querySelectorAll('.accordion__list-item-btn');
const accordion = document.querySelector('.accordion');

const handleClick = button => {
  const content = button.nextElementSibling;
  const isActive = button.classList.contains('active-list-item');

  buttons.forEach(otherButton => {
    if (otherButton !== button) {
      const otherContent = otherButton.nextElementSibling;
      otherButton.classList.remove('active-list-item');
      otherButton.setAttribute('aria-expanded', 'false');
      otherContent.style.opacity = '';
      otherContent.style.maxHeight = '';
      otherContent.style.visibility = '';
      otherContent.style.marginTop = '';
    }
  });

  if (isActive) {
    button.classList.remove('active-list-item');
    button.setAttribute('aria-expanded', 'false');
    content.style.opacity = '';
    content.style.maxHeight = '';
    content.style.visibility = '';
    content.style.marginTop = '';
  } else {
    button.classList.add('active-list-item');
    button.setAttribute('aria-expanded', 'true');
    content.style.marginTop = '1.3rem';
    content.style.maxHeight = content.scrollHeight + 'px';
    content.style.visibility = 'visible';
    content.style.opacity = 1;
  }
};

buttons.forEach(button => {
  button.addEventListener('mouseenter', () => {
    accordion.classList.add('move-square');
  });

  button.addEventListener('mouseleave', () => {
    accordion.classList.remove('move-square');
  });

  button.addEventListener('click', () => handleClick(button));
});
