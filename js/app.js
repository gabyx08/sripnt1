var estudiantes = [];

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
    var lista="";
    for (var i = 0; i < estudiantes.length; i++) {
      lista+= estudiantes[i].nombre + "\n";
    }
    return lista;
}

function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado
    var estudiante= {
      nombre: prompt("Ingresa el nombre del estudiante"),
      tecnico: prompt("Ingresa el porcentaje tecnico del estudiante"),
      hse:prompt("Ingresa el porcentaje en habilididades socio-emocionales del esudiante")
    };
    estudiantes.push(estudiante);
    console.log(estudiantes);
    return estudiante;

}

function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombre + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.tecnico + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.hse + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;

}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes

    for (var i = 0; i < estudiantes.length; i++) {
      return mostrar(estudiantes);
    }


}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS
    var encontrado= estudiantes.indexOf(nombre.toLowerCase());
    return mostrar(encontrado);
}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
    var temporal;
    for (var i = 0; i < estudiantes.length; i++) {
      for (var j = 0; j < estudiantes.length; j++) {
        if(estudiantes[j].tecnico<estudiantes[j+1].tecnico){
          temporal= estudiantes[j].tecnico;
          estudiantes[j].tecnico=estudiantes[j+1].tecnico;
          estudiantes[j+1].tecnico= temporal;
        }
      }
      return mostrar(estudiantes)
    }
}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor

}
