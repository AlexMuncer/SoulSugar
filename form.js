// Set minimum date
const today = new Date().toISOString().split('T')[0];
document.getElementById('eventDate').setAttribute('min', today);

// Form submit
document.getElementById('bookingForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const eventDate = document.getElementById('eventDate').value;

  if (!name || !email || !eventDate) {
    alert('Please fill in all required fields.');
    return false;
  }

  const formData = new FormData(this);

  try {
    const response = await fetch(this.action, {
      method: this.method,
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      document.getElementById('successMessage').style.display = 'block';
      this.reset();
      document.getElementById('successMessage').scrollIntoView({ behavior: 'smooth' });

      setTimeout(() => {
        document.getElementById('successMessage').style.display = 'none';
      }, 5000);
    } else {
      throw new Error('Form submission failed');
    }

  } catch (error) {
    console.error(error);
    alert('There was a problem submitting your form. Please try again.');
  }
});
