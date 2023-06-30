//Selecionar os elementos de input 
const emailInput = document.querySelector('#input');
const passwordInput = document.querySelector('#inputSenha');
const button = document.querySelector('.btn-primary');
const resultContainer = document.querySelector('.result-container');
const linkContainer = document.querySelector('#link');
const emailCadastro = document.querySelector('#emailCad');
const senhaCadastro = document.querySelector('#senhaCad');
const buttonSave = document.querySelector('#btn-save');

function criarRegistro(userName, userEmail, userPassword){
    const userRegister = userEmail + " , " + userPassword;
    localStorage.setItem (userName, userRegister);
};


function salvarDado () {

    buttonSave.addEventListener('click', function(e) {

    const user = Math.floor(Math.random() * (10 - 0) + 0);
    const emailSave = emailCadastro.value;
    const senhaSave = senhaCadastro.value;
    
    criarRegistro(user, emailSave, senhaSave);
    // Atualize a página
    location.reload();
        
});
};

salvarDado();

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