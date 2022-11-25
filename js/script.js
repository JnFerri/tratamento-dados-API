async function consultaEndereco(){
    var consultaCEP = await fetch("http://viacep.com.br/ws/01001000/json/")
    var consultaConvertida = await consultaCEP.json()
    console.log(consultaConvertida)
}

consultaEndereco()



