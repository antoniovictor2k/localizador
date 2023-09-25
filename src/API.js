const localizarSeuLocal = async () => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        // Use o serviço Nominatim para obter informações detalhadas
        var apiUrl = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;

        var mymap = L.map("map").setView([latitude, longitude], 12); // Coordenadas e nível de zoom
        var marker = L.marker([latitude, longitude]).addTo(mymap); // Coordenadas do marcador

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(mymap);

        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {
            const rua = data.address.road;
            const bairro = data.address.suburb;
            const cidade = data.address.city;
            const estado = data.address.state;
            const pais = data.address.country;
            const regiao = data.address.region;
            const cep = data.address.postcode;

            document.getElementById("rua").innerHTML = rua;
            document.getElementById("bairro").innerHTML = bairro;
            document.getElementById("cidade").innerHTML = cidade;

            document.getElementById("estado").innerHTML = estado;
            document.getElementById("regiao").innerHTML = regiao;
            document.getElementById("pais").innerHTML = pais;
            document.getElementById("cep").innerHTML = cep;
          })
          .catch((error) => {
            console.error("Erro ao obter informações de localização: " + error);
          });
      },
      function (error) {
        console.error("Erro ao obter a localização: " + error.message);
      }
    );
  }

  const uri =
    "https://api.hgbrasil.com/geoip?format=json-cors&key=89c2f172&address=remote&precision=falses";
  const encodedURI = encodeURI(uri);
  const resposta = await fetch(encodedURI);
  const json = await resposta.json();

  document.getElementById("enderecoIp").innerHTML = json.results.address;
  document.getElementById("enderecoIp2").innerHTML = json.results.address;
};
