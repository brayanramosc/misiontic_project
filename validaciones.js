const form = document.getElementById("form_registro_usuario");
const submitButton = document.getElementById("btn_enviar_registro");

let timeout = null;

let errors = {
  in_usuario: true,
  correo: true,
  in_contrasena: true,
  val_contrasena: true
};

const mailformatRegex = /^[^@]+@\w+(\.\w+)+\w$/;

document.querySelectorAll('.form-box').forEach((box) => {
  const boxInput = box.querySelector('input');

  boxInput.addEventListener('keydown', (event) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      console.log(`Input ${boxInput.name} value: `, boxInput.value);

      validation(box, boxInput);
    }, 300);
  });
});

validation = (box, boxInput) => {
  if (boxInput.value == '') {
    showError(true, box, boxInput);
  } 
  else {
    showError(false, box, boxInput);
  }
  if(boxInput.name == 'in_usuario'){
    if (boxInput.value.length < 3 || boxInput.value.length >= 9){
        showError(true, box, boxInput);
       }
    else {
      showError(false, box, boxInput);
    }
  }  
  if(boxInput.name == 'in_usuario'){
    const ptr = new RegExp('^[A-Z0-9Ñ]+$', 'i');
    if(!ptr.test(boxInput.value)){
        console.log("Entro")
        showError(true, box, boxInput);
      } 
  }  
  if (boxInput.name == 'in_contrasena') {
    if (boxInput.value.length <= 6) {
      showError(true, box, boxInput);
    } 
    else {
      showError(false, box, boxInput);
    }
  }
  if (boxInput.name == 'in_contrasena') {
    const ptr = new RegExp('^[A-Z0-9Ñ]+$', 'i');
    if(!ptr.test(boxInput.value)){
        console.log("Entro")
        showError(true, box, boxInput);
      } 
  }
  if (boxInput.name == 'correo') {
    if (!boxInput.value.match(mailformatRegex)) {
      showError(true, box, boxInput);
    } 
    else {
      showError(false, box, boxInput);
    }
  }
  if (boxInput.name == 'val_contrasena') {
    if (boxInput.value.length <= 6) {
      showError(true, box, boxInput);
    } 
    else {
      showError(false, box, boxInput);
    }
  }
  submitController();
};

showError = (check, box, boxInput) => {
  if (check) {
    box.classList.remove('form-success');
    box.classList.add('form-error');
    errors[boxInput.name] = true;
  } 
  else {
    box.classList.remove('form-error');
    box.classList.add('form-success');
    errors[boxInput.name] = false;
  }
};

submitController = () => {
  console.log(errors);
  if (errors.in_usuario || errors.correo || errors.in_contrasena || errors.val_contrasena) {
    submitButton.toggleAttribute('disabled', true);
  } 
  else {
    submitButton.toggleAttribute('disabled', false);
  }
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  console.log([...formData]);
  for (let [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }
});