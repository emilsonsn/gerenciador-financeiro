function recuperarDespesa(){
    let id = localStorage.getItem('id')
    let despesas = []
    for(let i= 1; i<=id; i++){
        despesas.push(localStorage.getItem(i))
    }
    return(despesas)
}
function deletar(id){
    localStorage.removeItem(id)
    mostrarDespesas()
}
function filtrar(despesas){
    let data = document.getElementById('data')
    let descricao = document.getElementById('descricao')
    let categoria = document.getElementById('categoria')
    let novaDespesa = []
    if(data.value =='' && categoria.value == '' && descricao.value==''){
        return despesas
    }
    
    if(data.value !='' && categoria.value != '' && descricao.value!=''){
        for(let i=0; i < despesas.length;i++){
            alert('Entrei aqui')
            if(despesas[i] == null){
                continue
            }
            if(JSON.parse(despesas[i]).data == data.value && JSON.parse(despesas[i]).descricao == descricao.value && JSON.parse(despesas[i]).tipo == categoria.value){
                alert('achei')
                novaDespesa.push(despesas[i])
            }
        }
    }

    if(data.value !='' && categoria.value != '' && descricao.value!=''){
        for(let i=0; i < despesas.length;i++){
            alert('Entrei aqui')
            if(despesas[i] == null){
                continue
            }
            if(JSON.parse(despesas[i]).data == data.value && JSON.parse(despesas[i]).descricao == descricao.value && JSON.parse(despesas[i]).tipo == categoria.value){
                alert('achei')
                novaDespesa.push(despesas[i])
            }
        }
    }
    return novaDespesa}

function tratarData(data){
    let dataTratada = data.split('-')
    return (`${dataTratada[2]}/${dataTratada[1]}`)
}

function mostrarDespesas(){
    const tbody = document.getElementById('tbody')
    let soma =document.getElementById('soma') 
    let salario =document.getElementById('salario') 
    
    let despesa = filtrar(recuperarDespesa())
     let valor = 0 
     // Limpar o tbody
     tbody.innerHTML = ''
     for(let i=0;i<despesa.length;i++){
         if(JSON.parse(despesa[i]) == null){
             continue
         }
         let linha = tbody.insertRow()
         let botao = document.createElement('button')
         botao.innerHTML = 'X'
         botao.setAttribute('onclick',"deletar("+JSON.parse(despesa[i]).id+")")
         linha.insertCell().innerHTML = JSON.parse(despesa[i]).descricao
         linha.insertCell().innerHTML = tratarData(JSON.parse(despesa[i]).data)
         linha.insertCell().innerHTML = JSON.parse(despesa[i]).tipo
         linha.insertCell().innerHTML = JSON.parse(despesa[i]).valor
         let linha2 = linha.insertCell()
         linha2.appendChild(botao)
         valor += parseInt(JSON.parse(despesa[i]).valor)
         console.log(JSON.parse(despesa[i]))
     
    
        }
    soma.innerHTML = 'R$'+valor
    salario.innerHTML = 'R$'+(parseInt(localStorage.getItem('salario'))- valor)
    if((parseInt(localStorage.getItem('salario'))- valor) <0){
        salario.style.background = 'red'
    }
}

mostrarDespesas()