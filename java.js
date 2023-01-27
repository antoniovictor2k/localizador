
async function localizarSeuLocal() {
    
    const uri = ("https://api.hgbrasil.com/geoip?format=json-cors&key=3a69decb&address=remote&precision=falses");
    const encodedURI = encodeURI(uri);
    const resposta = await fetch (encodedURI);
    const json = await resposta.json();
    console.log(json);


console.log("Tudo ok")

// js do localizador

document.getElementById("cidade").innerHTML = json.results.city;
document.getElementById("enderecoIp").innerHTML = json.results.address;
document.getElementById("regiao").innerHTML = json.results.region;
document.getElementById("pais").innerHTML = json.results.country_name;
document.getElementById("latit").innerHTML = json.results.latitude;
document.getElementById("longi").innerHTML = json.results.longitude;
document.getElementById("contin").innerHTML = json.results.continent;



}
 localizarSeuLocal();
async function getTempo(){
   
    
    
    
    const uri = ("https://api.hgbrasil.com/weather?format=json-cors&key=3a69decb&user_ip=remote");
    const encodedURI = encodeURI(uri);
    const resposta = await fetch (encodedURI);
    const json = await resposta.json();
    console.log(json);

// comecar aqui

document.getElementById("humid").innerHTML = json.results.humidity+"%";
document.getElementById("temper").innerHTML = json.results.temp + "ºC";
document.getElementById("curre").innerHTML = json.results.currently;

document.getElementById("direcaoVento").innerHTML = json.results.wind_direction;
document.getElementById("nascerDoSol").innerHTML = json.results.sunrise;
document.getElementById("porDoSol").innerHTML = json.results.sunset;
document.getElementById("ventoRapido").innerHTML = json.results.wind_speedy;


    
};
  getTempo()

