const STORAGE_KEY = 'feedback-form-state';

const formData = { email: '', message: '' };
const form = document.querySelector('.feedback-form');

form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

const saved = localStorage.getItem(STORAGE_KEY);
if (saved !== null) {
  const parsed = JSON.parse(saved);
  form.elements.email.value = parsed.email ?? '';
  form.elements.message.value = parsed.message ?? '';

  formData.email = parsed.email ?? '';
  formData.message = parsed.message ?? '';
}

form.addEventListener('submit', event => {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);

  formData.email = '';
  formData.message = '';

  form.reset();
});
