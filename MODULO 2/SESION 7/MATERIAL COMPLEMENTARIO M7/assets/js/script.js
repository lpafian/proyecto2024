var opcion = prompt("¡Hola! Soy Eva, tu asistente virtual del Servicio al Cliente de Mentel. Estoy aquí para ayudarte en lo que necesides.\nEscribe el número de la opción que buscas:   \n1.- Boletas y Pagos \n2.- Señal y llamadas \n3.- Oferta comercial  \n4.- Otras consultas")

//FUNCIONES

switch (opcion){
    case "1":
    var opcion1 = prompt("Seleccione una opcion\n1.- Ver Boleta \n2.- Pagar cuenta");
    if(opcion1==1){
        alert("Haga clic aqui para descargar su boleta.");
    }else if(opcion1==2){
        alert("Usted esta siendo transferido. Espere por favor");
    }
    break;
    case "2":
    var opcion2 = prompt("Seleccione una opcion\n1.- Problemas con la Señal \n2.- Problemas con las llamadas");
    if (opcion2==1){
        prompt("A continuacion escriba su solicitud");
        alert("estimado usuario, su solicitud: Tengo problemas con la señal en\navenida siempre viva Ha sido Ingresada con exito. Pronto sera\nContactado por uno de nuestros ejecutivos.");
    }else if(opcion2==2){
        prompt("A continuacion escriba su solicitud");
        alert("estimado usuario, su solicitud: Tengo problemas con la señal en\navenida siempre viva Ha sido Ingresada con exito. Pronto sera\nContactado por uno de nuestros ejecutivos.");
    }
    break;
    case "3":
    var opcion3 = prompt("¡Mentel tiene una oferta comercial acorde a tus necesidade!\npara conocer mas informacion y ser asesorado personalmente por un\nejecutivo escribe SI y un ejecutivo te llamara.\nde lo contrario ingrese No");
    if(opcion3=="si"){
        alert("un ejecutivo se contactara con usted");
    }else if(opcion=3){
        alert("Gracias por preferir nuestros servicios");
    }
    break;
    case "4":
    var opcion4 =prompt("A continuacion escriba una consulta");
    alert("Estimado usuario, su consulta: Quisiera saber por que no ha llegado\nmi producto codigo 1234 Ha sido ingresa con exito. Pronto sera\ncontactado por uno de nuestros ejecutivos.")
    break;
    default:
        alert("La opcion ingresada no es valida. Gracias por preferir nuestros servicios")

}





