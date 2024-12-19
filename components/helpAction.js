function toggleAnswer(button) {
  const answer = button.nextElementSibling;
  answer.classList.toggle('hidden');
}

function filterFAQ() {
  const query = document.getElementById('search').value.toLowerCase();
  const faqs = document.querySelectorAll('.faq-item');

  faqs.forEach((faq) => {
    const question = faq.querySelector('button').textContent.toLowerCase();
    faq.style.display = question.includes(query) ? 'block' : 'none';
  });
}
