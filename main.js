const bookBtn = document.getElementById('bookBtn');
  const bookingForm = document.getElementById('bookingForm');
  const successMsg = document.getElementById('successMsg');

  bookBtn.addEventListener('click', () => {
    bookingForm.style.display = 'block';
    successMsg.style.display = 'none';
    bookBtn.style.display = 'none';
  });

  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    bookingForm.style.display = 'none';
    successMsg.style.display = 'block';
  });