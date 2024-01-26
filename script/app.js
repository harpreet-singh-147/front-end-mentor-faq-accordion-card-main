const buttons = document.querySelectorAll('.accordion__list-item-btn');
const accordion = document.querySelector('.accordion');

const setContentStyle = (content, isActive) => {
  content.style.opacity = isActive ? 1 : '';
  content.style.maxHeight = isActive ? content.scrollHeight + 'px' : '';
  content.style.visibility = isActive ? 'visible' : '';
  content.style.marginTop = isActive ? '1.3rem' : '';
};

const handleClick = button => {
  const content = button.nextElementSibling;
  const isActive = button.classList.contains('active-list-item');

  buttons.forEach(otherButton => {
    if (otherButton !== button) {
      const otherContent = otherButton.nextElementSibling;
      otherButton.classList.remove('active-list-item');
      otherButton.setAttribute('aria-expanded', 'false');
      setContentStyle(otherContent, false);
    }
  });

  if (isActive) {
    button.classList.remove('active-list-item');
    button.setAttribute('aria-expanded', 'false');
    setContentStyle(content, false);
  } else {
    button.classList.add('active-list-item');
    button.setAttribute('aria-expanded', 'true');
    setContentStyle(content, true);
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
