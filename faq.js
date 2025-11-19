document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
      const answer = q.nextElementSibling;
      const isVisible = answer.style.display === 'block';
  
      document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
      document.querySelectorAll('.faq-question span').forEach(s => s.textContent = '+');
  
      if (!isVisible) {
        answer.style.display = 'block';
        q.querySelector('span').textContent = '−';
      }
    });
  });
  