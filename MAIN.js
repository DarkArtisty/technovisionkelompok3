const buttons = document.querySelectorAll('.btn-primary');
const modal = document.getElementById('serviceModal');
const modalTitle = document.getElementById('modalServiceTitle');
const modalDesc = document.getElementById('modalServiceDesc');
const modalBenefits = document.getElementById('modalBenefitsList');
const modalPrice = document.getElementById('modalPrice');
const modalCloseBtn = document.getElementById('modalCloseBtn');

buttons.forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    const serviceCard = btn.closest('.service-card');
    const title = serviceCard.querySelector('.service-title').textContent;
    const desc = serviceCard.querySelector('.service-description').textContent;
    const price = serviceCard.querySelector('.price').textContent;
    const benefitsItems = serviceCard.querySelectorAll('.benefits-list li');

    modalTitle.textContent = title;
    modalDesc.textContent = desc;
    modalPrice.textContent = price;
    modalBenefits.innerHTML = '';

    benefitsItems.forEach(li => {
      const newLi = document.createElement('li');
      newLi.innerHTML = li.innerHTML;
      modalBenefits.appendChild(newLi);
    });

    modal.style.display = 'flex';
  });
});

modalCloseBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', e => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Form submission handling
document.querySelector('.contact-form form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! Our team will contact you within 24 hours.');
    this.reset();
});