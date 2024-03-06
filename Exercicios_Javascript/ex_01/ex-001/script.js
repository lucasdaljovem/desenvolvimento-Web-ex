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