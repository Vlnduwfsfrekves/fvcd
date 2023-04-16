const inputValidation = document.getElementById('validation-input');
const inputLength = inputValidation.getAttribute('data-length');
inputValidation.addEventListener('blur',()=>{
    const actualLength = inputValidation.value.length;
    if(Number(inputLength)===Number(actualLength)){
        inputValidation.classList.add('valid');
        inputValidation.classList.remove('invalid');
    }else{
        inputValidation.classList.add('invalid');
        inputValidation.classList.remove('valid');
    }
});