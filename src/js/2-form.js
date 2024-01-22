const storageKey = 'feedback-form-state';

const feedbackForm = document.querySelector('.feedback-form');
const inputFormUser = document.querySelector('.feedback-input');
const textareaFormUser = document.querySelector('.feedback-textarea');

feedbackForm.addEventListener('input', addInfoUser);
feedbackForm.addEventListener('submit', showInfoUser);
document.addEventListener('DOMContentLoaded', addValue);

function addValue() {
  const user = localStorage.getItem(storageKey);
  const newValue = JSON.parse(user);

  if (!newValue) {
  } else {
    feedbackForm.elements.email.value = newValue.email;
    feedbackForm.elements.message.value = newValue.message;
  }
}

function addInfoUser() {
  const email = feedbackForm.elements.email.value.trim();
  const message = feedbackForm.elements.message.value.trim();

  const user = {
    email,
    message,
  };

  localStorage.setItem(storageKey, JSON.stringify(user));
}

function showInfoUser(event) {
  event.preventDefault();

  const user = localStorage.getItem(storageKey);

  if (
    !feedbackForm.elements.email.value.trim() ||
    !feedbackForm.elements.message.value.trim()
  ) {
    alert('All form fields must be filled in');
  } else {
    console.log(JSON.parse(user));
    localStorage.removeItem(storageKey);
    feedbackForm.reset();
  }
}
