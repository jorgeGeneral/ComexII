
/**Funcion carga productos*/
function cargaTipoProducto(idCarga){

    var producto = document.getElementById('cboTipoProducto');
    producto.options[0] = new Option("ODP al Exterior", "0", "0");
    producto.options[1] = new Option("Financiamiento Contado", "1", "1");
    producto.options[2] = new Option("Otro Financiamiento", "2", "2");
    producto.options[3] = new Option("Carta de Creditos", "3", "3");
    if (idCarga == 1) {
        producto.options[4] = new Option("Todos los productos", "4", "4");
    }
    producto.selectedIndex = 0;
}

/**Funcion carga monedas*/
function cargaTipoMoneda() {

    var moneda = document.getElementById('cboTipoMoneda');
    moneda.options[0] = new Option("Dolar (USD)", "0", "0");
    moneda.options[1] = new Option("Euro (EUR)", "1", "1");
    moneda.options[2] = new Option("Peso (CLP)", "2", "2");
    moneda.selectedIndex = 0;
}

/**Funcion carga segmento*/
function cargaTipoSegmento() {

    var segmento = document.getElementById('cboSegmento');
    segmento.options[0] = new Option("Microempresas", "0", "0");
    segmento.options[1] = new Option("Pequeña Empresa", "1", "1");
    segmento.options[2] = new Option("Medianas Empresas", "2", "2");
    segmento.options[3] = new Option("Grandes Empresas", "3", "3");
    segmento.options[4] = new Option("Inmobiliaria", "4", "4");
    segmento.options[5] = new Option("Institucional", "5", "5");
    segmento.options[6] = new Option("Corporativa", "6", "6");
    segmento.selectedIndex = 0;
}

/**Funcion carga jefe */
function cargaTipoJefe() {

    var jefe = document.getElementById('cboJefe');
    jefe.options[0] = new Option("Seleccione", "0", "0");
    jefe.options[1] = new Option("Jefe Ejemplo Prueba", "1", "1");
    jefe.options[2] = new Option("Todos", "2", "2");
    jefe.selectedIndex = 0;
}

/**Funcion carga ejecutivo */
function cargaTipoEjecutivo() {

    var ejecutivo = document.getElementById('cboEjecutivo');
    ejecutivo.options[0] = new Option("Seleccione", "0", "0");
    ejecutivo.options[1] = new Option("Ejecutivo Ejemplo Prueba", "1", "1");
    ejecutivo.options[2] = new Option("Todos", "2", "2");
    ejecutivo.selectedIndex = 0;
}

/**Funcion carga gerente */
function cargaTipoGerente() {

    var gerente = document.getElementById('cboGerente');
    gerente.options[0] = new Option("Seleccione", "0", "0");
    gerente.options[1] = new Option("Gerente Ejemplo Prueba", "1", "1");
    gerente.selectedIndex = 0;
}

/**Funcion carga estado bandejas */
function cargaTipoEstadoBandeja() {

    var estadoBdj = document.getElementById('cboEstadoBdj');
    estadoBdj.options[0] = new Option("Pendiente de Firma", "0", "0");
    estadoBdj.options[1] = new Option("Rechazado", "1", "1");
    estadoBdj.options[2] = new Option("Autorizado", "2", "2");
    estadoBdj.options[3] = new Option("Todos", "3", "3");
    estadoBdj.selectedIndex = 0;
}

/**Funcion carga funcionalidad pantallas*/
function cargaTipoFuncionalidadPantalla() {

    var funcionalidad = document.getElementById('cboTipoFuncionalidad');
    funcionalidad.options[0] = new Option("pantalla 1", "0", "0");
    funcionalidad.options[1] = new Option("pantalla 2", "1", "1");
    funcionalidad.options[2] = new Option("pantalla 3", "2", "2");
    funcionalidad.selectedIndex = 0;
}

