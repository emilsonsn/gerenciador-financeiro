
let botao = document.getElementById('cadastrar').setAttribute('onclick','bd.gravar()')
const select = document.getElementById('categoria');

class BD {
    constructor(){ 
        let id = localStorage.getItem('id') 
        if (id === null){
            localStorage.setItem('id',0)
        }
    }

    validarDados(){
        let despesa = this.lerValoresDoFormulario()
        for (let i in despesa){
            if(despesa[i] == undefined || despesa[i] == null || despesa[i] == ''){
                return false
            }
        }
        return true
    } 
      
    lerValoresDoFormulario(){
        return{
            descricao:document.getElementById('descricao').value,
            tipo : select.options[select.selectedIndex].value,
            data:document.getElementById('data').value,
            valor:document.getElementById('valor').value,
            id: 5
        }
    } 
    gravar(){
        if(!this.validarDados()){
            alert('Despesa inválida! Preencha todos os campos.')
            return 0
        }
        let indice = parseInt(localStorage.getItem('id'))+1
        let despesa =  this.lerValoresDoFormulario()
        despesa.id = indice
        console.log(despesa)
        localStorage.setItem(indice,JSON.stringify(despesa))
        localStorage.setItem('id',indice)
    }
}

let bd = new BD()

