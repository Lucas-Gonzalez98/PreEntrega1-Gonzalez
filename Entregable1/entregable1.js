// ingrese sus datos / variables

let nombre = prompt("INGRESE SU NOMBRE");
let edad = prompt("INGRESE SU EDAD");
let direccion = prompt("INGRESE SU DIRECCION");
let total = 0;
let CompraTotal = "";

//primer menu
let menuprincipal;
do {
    menuprincipal = parseInt(prompt(`ELIJA UNA OPCION:
    [1] Precios
    [2] Comprar
    [0] Salir`));
    switch (menuprincipal){
        case 1 :
            precios();
            break;
        case 2 :
            comprar();
            break;
        case 0: 
            salir();
            break;
        default:
            alert("NUMERO INCORRECTO");
            break;
    }
}while (menuprincipal != 0)

// salir
function salir(){
    if (total > 0){
        alert (`GRACIAS POR SU COMPRA, ESTAMOS TRABAJANDO EN SU PEDIDO ${nombre}, NOS VEMOS PRONTO`);
}else {
    alert (`GRACIAS POR CONOCER NUESTRA PAGINA WEB ${nombre}, NOS VEMOS PRONTO`);
}
}

// nedios de pago
function medio_de_pago (){
    let pago = parseInt(prompt(`ELIJA UNA OPCION DE PAGO:
    [1] Efectivo
    [2] Tarjeta de Credito/Debito
    [3] Mercado pago
    [4] Transferencia Bancaria`));
}

//menu precios
function precios() {
    alert (`
    Aceitunas Negras (400gr) $520
    Aceitunas Verdes (400gr) $450
    Aceite de Oliva (1L) $1500
    Aceite de Oliva (3L) $4300
    Aceite de Oliva (5L) $5500
    Miel (1kg) $1000
    Miel (1/2kg) $600`); 
}

//menu compra
function comprar(){
    let precio;
    let producto;
    do {
        producto = parseInt(prompt(`ELIJA UNA OPCION:
        [1] Aceitunas Negras (400gr)
        [2] Aceitunas Verdes (400gr)
        [3] Aceite de Oliva (1L)
        [4] Aceite de Oliva (3L)
        [5] Aceite de Oliva (5L)
        [6] Miel (1kg)
        [7] Miel (1/2kg)
        [0] Volver`));
        switch (producto){
            case 1 :
                precio = 520;
                producto1 = "Aceitunas Negras";
                break;
            case 2 :
                precio = 450;
                producto1 = "Aceitunas Verdes";
                break;
            case 3 :
                precio = 1500;
                producto1 = "Aceite de Oliva 1L";
                break;
            case 4 :
                precio = 4300;
                producto1 = "Aceite de Oliva 3L";
                break;
            case 5 :
                precio = 7100;
                producto1 = "Aceite de Oliva 5L";
                break;
            case 6 :
                precio = 1000;
                producto1 = "Miel 1kg";
                break;
            case 7 :
                precio = 600;
                producto1 = "Miel 1/2kg";
                break;
            case 0 : 
                break;
            default:
                alert("NUMERO INCORRECTO");
                break;         
        }
    }while (producto < 0 || producto > 7)
    if (producto > 0){
        let cantidad = parseInt(prompt(`INGRESE LA CANTIDAD DE ${producto1}`));
        total += cantidad * precio;
        CompraTotal += `${cantidad} x ${producto1}` + "\n";
        let seguir = prompt(`SU PEDIDO ES:
${CompraTotal}
        TOTAL: $ ${total}
        
        SI QUIERE SEGUIR COMPRANDO INGRESE [1], 
        SI FINALIZO LA COMPRA INGRESE [2]
        CANCELAR PEDIDO [0]`);
    if (seguir == "1"){
        comprar();
    }else if (seguir == "2"){
        medio_de_pago();
    }else if (seguir == "0"){
        total = 0;
        CompraTotal = "";
    }else {
        alert ("NUMERO INCORRECTO");
    }
    }
}

