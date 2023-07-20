
    document.getElementById("serviceForm").addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const lastName = document.getElementById("lastName").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;
        const province = document.getElementById("province").value;
        const jobType = document.getElementById("jobType").value;
        const description = document.getElementById("description").value;
    
        // Aquí podrías hacer cualquier validación adicional que necesites
    
        // Mostrar una alerta para verificar que el código se está ejecutando
        alert("Formulario enviado correctamente");
    
        // Simulamos un proceso de envío, luego ocultamos la notificación
        setTimeout(() => {
            document.getElementById("serviceForm").reset();
        }, 1500);
    });
    