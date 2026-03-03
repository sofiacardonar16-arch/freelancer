//Este codigo carga el navbar

document.addEventListener("DOMContentLoaded", function(){
    //Seleccione la clase
    const navbarElement = document.querySelector(".navbar-container")

    if (navbarElement){
        fetch("/frontend/views/components/navbar.html")

        .then(response => {
            if (!response.ok) throw new Error("Error al cargar el navbar")  
            return response.text();         
        })
        .then(data => {
            navbarElement.innerHTML = data;
        })

    .catch(error => console.error("Error cargando el navbar", error));
    }

});