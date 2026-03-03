
document.addEventListener("DOMContentLoaded", function(){
    //Seleccione la clase
    const formElement = document.querySelector(".form-container")

    if (formElement){
        fetch("/frontend/views/components/contact-form.html")

        .then(response => {
            if (!response.ok) throw new Error("Error al cargar el formulario")  
            return response.text();         
        })
        .then(data => {
            formElement.innerHTML = data;
        })

    .catch(error => console.error("Error cargando el Formulario", error));
    }

});