let inputs = document.querySelectorAll("form input");
inputs.forEach((input)=> {
    input.addEventListener("keyup",(e)=>{
       switch (e.target.name) {
        case "nombre":
            console.log("Nombre ingresado");
            break;
       }
    });
});

