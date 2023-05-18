// Matriz de preguntas y respuestas
var preguntas = [
    ["¿Qué es Lorem Ipsum?", "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto."],
    ["¿Cuál es la longitud de Lorem Ipsum 50?", "50"],
    ["¿Cuál es la longitud de Lorem Ipsum 10?", "10"],
    ["¿De dónde viene Lorem Ipsum?", "Viene de una obra de la literatura latina clásica"],
    ["¿Por qué se utiliza Lorem Ipsum?", "Porque proporciona una distribución más o menos normal de las letras y las palabras."],
    ["¿Quién utilizó por primera vez Lorem Ipsum?", "Un impresor desconocido"],
    ["¿Qué significa Lorem Ipsum?", "Significa 'dolor mismo' en latín"],
    ["¿Qué no es Lorem Ipsum?", "No es un texto legible en latín"],
    ["¿Por qué Lorem Ipsum es popular?", "Porque se utiliza como un texto de relleno en la industria de la impresión y la tipografía"],
    ["¿Cuál es el propósito de Lorem Ipsum?", "Proporcionar un texto de relleno que permita a los diseñadores enfocarse en el diseño en lugar de en el contenido."]
  ];

  var respuestaCorrecta;
  obtenerPregunta();
  
  // Función para obtener una pregunta aleatoria
  function obtenerPregunta() {
    // Genera un número aleatorio entre 0 y 9
    var indice = Math.floor(Math.random() * 10);
  
    // Obtiene la pregunta y la respuesta correspondiente al número aleatorio generado
    var pregunta = preguntas[indice][0];
    respuestaCorrecta = preguntas[indice][1];
  
    // Muestra la pregunta en la página
    var preguntaElemento = document.getElementById("pregunta");
    preguntaElemento.textContent = pregunta;
  
    // Retorna la respuesta correcta
    return respuestaCorrecta;
  }
  
  // Función para verificar la respuesta del usuario
  function verificarRespuesta() {
    // Obtiene la respuesta del usuario y la respuesta correcta
    var respuestaUsuario = document.getElementById("respuesta").value;
    // var respuestaCorrecta;
    // Obtiene la respuesta correcta de la pregunta actual
    // var respuestaCorrecta = obtenerPregunta();

    // Verifica si la respuesta del usuario es correcta o no
    if (respuestaUsuario === respuestaCorrecta) {
      // Si la respuesta es correcta, muestra una alerta de felicitación
      alert("¡Respuesta correcta!");
      
      // Cambia el fondo de la página a verde y el color de fuente a blanco
      document.body.style.backgroundColor = "green";
      document.body.style.color = "white";
    } else {
      // Si la respuesta es incorrecta, muestra una alerta de desaprobación
      alert("Respuesta incorrecta. La respuesta correcta es: " + respuestaCorrecta);
      
      // Cambia el fondo de la página a rojo y el color de fuente a blanco
      document.body.style.backgroundColor = "red";
      document.body.style.color = "white";
    }
  }
  
  // Agrega eventos a los botones
  document.getElementById("verificar").addEventListener("click", verificarRespuesta);
  document.getElementById("volver").addEventListener("click", obtenerPregunta);
  document.getElementById("regresar").addEventListener("click", function() {
    window.location.href = "/index.html";
  });
  