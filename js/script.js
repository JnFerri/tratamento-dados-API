let cep = document.getElementById('cep')
let cidade = document.getElementById('cidade')
let bairro = document.getElementById('bairro')
let rua = document.getElementById('rua')
let estado = document.getElementById('estado')
console.log(estado)
let endereco = document.getElementById('endereco')
let numeroEndereco = document.getElementById('numero')
async function consultaEndereco(cep){
    try{
        var consultaCEP = await fetch(`http://viacep.com.br/ws/${cep}/json/`)
        var consultaConvertida = await consultaCEP.json()
        if(consultaConvertida.erro){
            throw Error('CEP inexistente')
        }
        console.log(consultaConvertida)
        cidade.value = consultaConvertida.localidade
        bairro.value = consultaConvertida.logradouro
        rua.value = consultaConvertida.rua
        estado.

    }
    catch(erro){
        console.log(erro)
    }
}

consultaEndereco()



cep.addEventListener('focusout',()=> consultaEndereco(cep.value))
