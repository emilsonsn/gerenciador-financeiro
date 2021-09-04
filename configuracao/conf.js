let salario = document.getElementById('salario')

function salvarConf(){
    localStorage.setItem('salario',salario.value)
}

function exibirSalario(){
    salario.value = localStorage.getItem('salario')
}
exibirSalario()