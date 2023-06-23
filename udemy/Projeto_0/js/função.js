//Selecionar os elementos de input 
const emailInput = document.querySelector('#contact-email input');
const passwordInput = document.querySelector('#contact-password input');
const button = document.querySelector('.btn-primary');
const resultContainer = document.querySelector('.result-container');
const linkContainer = document.querySelector('#link');

button.addEventListener("click", function(event){
    //Pegar os valores digitados
    const emailVal = 'andresinholxl@gmail.com';
    const passwordVal = 'andre10';

    const email = emailInput.value;
    const password = passwordInput.value;
    

    if (email === emailVal && password === passwordVal) {
        
    } else {
        resultContainer.innerHTML = `Login inválido, tente novamente`;
        event.preventDefault();
    };

    
 
});


