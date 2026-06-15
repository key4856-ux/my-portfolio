const copyEmailButton = document.getElementById('copyEmailButton');
const emailText = document.getElementById('emailText');
const toast = document.getElementById('toast');

if (copyEmailButton && emailText && toast) {
  copyEmailButton.addEventListener('click', () => {
    const emailValue = emailText.textContent.trim();
    navigator.clipboard.writeText(emailValue).then(() => {
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 2000);
    }).catch(() => {
      alert('복사에 실패했습니다. 다시 시도해주세요.');
    });
  });
}

window.addEventListener('load', () => {
  const observerOptions = {
    threshold: 0.15,
  };

  const revealElements = document.querySelectorAll('.fade-up');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
      }
    });
  }, observerOptions);

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
});
