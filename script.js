const key = "b020893985527aaed52b3afe031db4e3"

function colocarDadosNaTela(data) {
    document.querySelector(".city").innerHTML = "Tempo em " + data.name
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C"
    document.querySelector(".could").innerHTML = data.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: " + data.main.humidity + "%"                                                                                       
    console.log(data)
}

async function buscarCidade(cidade) {
  
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`). then(response => response.json())

    colocarDadosNaTela(data)
}

function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-city").value

    buscarCidade(cidade)
}
