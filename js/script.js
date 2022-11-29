let cep = document.getElementById('cep')
let cidade = document.getElementById('cidade')
let bairro = document.getElementById('bairro')
let estado = document.getElementById('estado')
let mensagemErroCep = document.getElementById("erro")
mensagemErroCep.innerHTML = ""
 
async function consultaEndereco(cep){
    try{
        var consultaCEP = await fetch(`http://viacep.com.br/ws/${cep}/json/`)
        var consultaConvertida = await consultaCEP.json()
        if(consultaConvertida.erro){
            throw Error('CEP inexistente')
        }
        
        
        cidade.value = consultaConvertida.localidade
        bairro.value = consultaConvertida.logradouro
        estado.value = consultaConvertida.uf
        

    }
    catch(erro){
        mensagemErroCep.innerHTML = "CEP invalido, tente novamente."
    }
}



cep.addEventListener('focusout',()=> consultaEndereco(cep.value))
