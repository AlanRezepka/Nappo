const familia = ["Alan", "Domi", "Nicole", "Monica", "Julio"];

function quienPasea () {
  var pasea = familia[Math.floor(Math.random() * familia.length)];
  var pasear = "Images/" + pasea +".png";
  document.querySelector(".napo").setAttribute("src", pasear);
  document.querySelector(".napo").classList.replace("animate__bounce", "animate__tada");
  var felicidades = "¡Felicidades " + pasea + "!";
  document.querySelector(".primer-titulo").textContent = felicidades;
  document.querySelector(".segundo-titulo").textContent = "¡Te toca pasear al Napo!";
  document.querySelector(".boton").textContent = "Volver a Intentar";
  document.querySelector(".boton").setAttribute("onclick", "volverIntentar()");
}

function volverIntentar () {
  document.querySelector(".napo").setAttribute("src", "images/Napo1.png");
  document.querySelector(".napo").classList.replace("animate__tada", "animate__bounce");
  document.querySelector(".primer-titulo").textContent = "¿Quién Pasea al Napo Hoy?";
  document.querySelector(".segundo-titulo").textContent = "";
  document.querySelector(".boton").textContent = "¡Vamos a Pasear!";
  document.querySelector(".boton").setAttribute("onclick", "quienPasea()");
}
