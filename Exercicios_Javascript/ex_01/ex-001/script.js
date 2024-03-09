// Função que vai pegar os valores e apresentar na tela
function display(val) {
    document.getElementById('tela').value += val
    return val
}


//função para resolver o cálculo
function resolver(){
    
    let x = document.getElementById('tela').value  //pega o valor da tela e acumula na variavel x

    let y = eval(x)

    document.getElementById('tela').value = y

    return y
}

//função para limpar a tela ao apertar o CE
function limparTela(){
    document.getElementById('tela').value = ""
}   


// const switcher = document.querySelector('.theme_button');

// switcher.addEventListener('acionado', function () {
//     document.body.classList.toggle('dark_theme')

//     var className = document.body.className;
//     if(className == "light_them") {
//         this.textContent = "Dark";
//     }
//     else{
//         this.textContent = "Light";
//     }

//     // console.log('current class name: ' +className);
// });