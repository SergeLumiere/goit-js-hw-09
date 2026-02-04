const STORAGE_KEY = 'feedback-form-state';

const formData = { email: '', message: '' };
const form = document.querySelector('.feedback-form');

const saved = localStorage.getItem(STORAGE_KEY);
if (saved !== null) {
  const parsed = JSON.parse(saved);
  form.elements.email.value = parsed.email ?? '';
  form.elements.message.value = parsed.message ?? '';

  formData.email = parsed.email ?? '';
  formData.message = parsed.message ?? '';
}

form.addEventListener('input', event => {
  const { name, value } = event.target;
  if (!name) return;

  formData[name] = value;

  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  form.elements.email.value = email;
  form.elements.message.value = message;

  formData.email = email;
  formData.message = message;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (formData.email.trim() === '' || formData.message.trim() === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);

  formData.email = '';
  formData.message = '';

  form.reset();
});
