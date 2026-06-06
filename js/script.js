// ----------------------------------- Accion para el boton Agendar Cita ------------------------------------

const modal = document.getElementById("modal-cita"); //Guardar el modal en una variable llamada modal
const botones = document.querySelectorAll(".btn-date"); //Busca todos los elementos que tengan la clase btn-cita

// Funcion que sirve para abrir modal en los botones que contengan la clase btn-cita
botones.forEach(boton => { //Recorre todos los botones
    boton.addEventListener("click", () => { //Agrega evento click
    modal.style.display = "flex"; //cambia display a flex
});
});

// ----------------------------------- Arreglo de los horarios ------------------------------------

//Arreglo que contiene los horarios
const horariosDisponibles = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30"
];

// ----------------------------------- Accion seleccionar fecha, marcar y desmarcar horario ------------------------------------

const contenedor = document.getElementById("horarios"); //Busca div con id horarios
let horaSeleccionada = null; //let porque el valor va a cambiar

horariosDisponibles.forEach(hora => { //Recorre todos los elementos(las horas) del arreglo
    
    const botonHora = document.createElement("button"); //Crea un boton
    
    botonHora.textContent = hora; //Agrega texto al boton, las horas que contiene el arreglo
    
    botonHora.addEventListener("click", () => { 
        
        const botones = document.querySelectorAll("#horarios button"); //Quita seleccion de boton anterior
        botones.forEach(boton => {
            boton.classList.remove("hora-seleccionada");
        });

        botonHora.classList.add("hora-seleccionada"); //Agrega la clase al hacer click en el boton
        horaSeleccionada = hora; //Guarda la hora elegida

        document.getElementById("hora-resumen").textContent = `Hora: ${hora}`; //Cambia el texto del id hora-resumen a la hora que seleccionamos

        console.log("Hora seleccionada:", horaSeleccionada); //Muestra la informacion en consola
    });
    
    contenedor.appendChild(botonHora); //Agrega un elemento en el contenedor, mostrara un boton por cada hora
});

const fechaInput = document.getElementById("fecha");

fechaInput.addEventListener("change", () => {
    document.getElementById("fecha-resumen").textContent = `Fecha: ${fechaInput.value}`;  
});

// ----------------------------------- Accion para boton Confirmar cita ------------------------------------
 const btnConfirmar = document.getElementById("confirmar");

 btnConfirmar.addEventListener("click", () => {
    const fecha = fechaInput.value;
    if(fecha === " " || horaSeleccionada === null){
        alert("Seleccione fecha y hora");
    return;
    }

    alert(`Cita agendada para ${fecha} a las ${horaSeleccionada}`);
    modal.style.display = "none";
    limpiarFormulario()
 });

 // ----------------------------------- Accion cerrar modal ------------------------------------

 const cerrarModal = document.getElementById("cerrar-modal");

 cerrarModal.addEventListener("click", () => { //Funcion para cerrar el modal dando click en la X
    modal.style.display = "none";
    limpiarFormulario()
 });

 modal.addEventListener("click", (event) => { //Cierra el modal dando click fuera de el
    if(event.target === modal){
        modal.style.display = "none";
        limpiarFormulario()
    }
 });

 // -------------------- Funcion para borrar elementos guardados del modal ---------------------
 
 function limpiarFormulario() {
    fechaInput.value = "";
    horaSeleccionada = null;
    document.getElementById(
        "fecha-resumen"
    ).textContent =
    "Fecha: No seleccionada";
    document.getElementById(
        "hora-resumen"
    ).textContent =
    "Hora: No seleccionada";
    const botones =
    document.querySelectorAll(
        "#horarios button"
    );
    botones.forEach(boton => {
        boton.classList.remove(
            "hora-seleccionada"
        );
    });
}
