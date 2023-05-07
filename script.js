document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();
    var anio = document.getElementById("anio").value;
    var carrera = document.getElementById("carrera").value;
    var url;
    if (anio === "2022" && carrera === "mecanica") {
        url = "https://www.escuelatecnicarubendario.com";
    } else if (anio === "2022" && carrera === "electricidad") {
        url = "https://ejemplo.com/seccion2";
    } else if (anio === "2021" && carrera === "mecanica") {
        url = "https://ejemplo.com/seccion3";
    } else if (anio === "2021" && carrera === "electricidad") {
        url = "https://ejemplo.com/seccion4";
    } else if (anio === "2020" && carrera === "mecanica") {
        url = "https://www.google.com";
    } else if (anio === "2020" && carrera === "electricidad") {
        url = "https://www.youtube.com";
    }else {
        alert("Por favor, seleccione una opción válida");
        return;
    }
    /*window.location.href = url;*/
    window.open(url, "_blank");
});