document.addEventListener("DOMContentLoaded", function(){
    //Seleccione la clase
    const heroElement = document.querySelector(".hero-container")

    if (heroElement){
        fetch("/frontend/views/components/hero.html")

        .then(response => {
            if (!response.ok) throw new Error("Error al cargar el hero")  
            return response.text();         
        })
        .then(data => {
            heroElement.innerHTML = data;
        })

    .catch(error => console.error("Error cargando el hero", error));
    }

});             