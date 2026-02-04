const STORAGE_KEY = 'feedback-form-state';

const formData = { email: '', message: '' };
const form = document.querySelector('.feedback-form');

form.addEventListener('input', event => {
  const { name, value } = event.target;
  if (!name) return;

  formData[name] = value;

  const dataToSave = {
    email: formData.email.trim(),
    message: formData.message.trim(),
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
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
