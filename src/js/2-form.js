const form = document.querySelector('.feedback-form');

let formData = {
  email: "",
  message: ""
};

const STORAGE_KEY = "feedback-form-state";

loadFormData();

form.addEventListener('input', onInput);
function onInput(e) {
  formData[e.target.name] = e.target.value.trim();

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

form.addEventListener('submit', onSubmit);
function onSubmit(e) {
  e.preventDefault();

  if (formData.email === "" || formData.message === "") {
    alert("Fill please all fields");
    return;
  }

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formData = { email: "", message: "" };
}

function loadFormData() {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) return;

  formData = JSON.parse(saved);

  form.elements.email.value = formData.email || "";
  form.elements.message.value = formData.message || "";
}
