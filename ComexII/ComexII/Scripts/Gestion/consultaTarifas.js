﻿function cargaTablaConsultaTarifado(IdCarga) {

    $('#tblResultado').empty();
    document.getElementById("tblResultado").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: #FF9D25" colspan="7"><label class="cabeceraBE2">Clientes</label></td></tr>';
    //document.getElementById("tblResultado").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width:17%"><label class="labelBE2">Rut Cliente</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width:17%"><label class="labelBE2">Nombre Cliente</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width:17%"><label class="labelBE2">Segmento Cliente</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width:17%"><label class="labelBE2">Ejecutivo</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width:10%"><label class="labelBE2">Precios</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width:10%"><label class="labelBE2">Histórico de Campañas</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width:10%"><label class="labelBE2">Histórico de Precios Especiales</label></td></tr>';
    document.getElementById("tblResultado").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width:17%"><label class="labelBE2">Rut Cliente</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width:17%"><label class="labelBE2">Nombre Cliente</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width:17%"><label class="labelBE2">Segmento Cliente</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width:17%"><label class="labelBE2">Ejecutivo</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width:10%"><label class="labelBE2">Precios</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width:10%"><label class="labelBE2">Histórico de Precios Especiales</label></td></tr>';

    if (IdCarga == 1) {
        if (document.getElementById("txtRutCliente").value == "96599240-9") {
            //document.getElementById("tblResultado").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style = "text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">96.599.240-9</label></td ><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Sociedad Importadora Lorden S.A.</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Grandes Empresas</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Hernandez Javier</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray;"><a href="/Gestion/ComexIIConsultaPrecios"><img src="../../Content/Images/lupa2.png" class="icon-det"></a></td><td style="text-align: center; border: 1px solid; border-color: darkgray;"><a href="/Gestion/ComexIIConsultaHistoricoCampañas"><img src="../../Content/Images/lupa2.png" class="icon-det"></a></td><td style="text-align: center; border: 1px solid; border-color: darkgray;"><a href="/Gestion/ComexIIConsultaHistoricoPreciosEspeciales"><img  src="../../Content/Images/lupa2.png" class="icon-det"></td></tr>';
            document.getElementById("tblResultado").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style = "text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">96.599.240-9</label></td ><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Sociedad Importadora Lorden S.A.</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Grandes Empresas</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Hernandez Javier</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray;"><a href="/Gestion/ComexIIConsultaPrecios"><img src="../../Content/Images/lupa2.png" class="icon-det"></a></td><td style="text-align: center; border: 1px solid; border-color: darkgray;"><a href="/Gestion/ComexIIConsultaHistoricoPreciosEspeciales"><img  src="../../Content/Images/lupa2.png" class="icon-det"></td></tr>';
        }
        else {
            alert("Rut ingresado no existe");
            document.getElementById("txtRutCliente").value = "";
        }
    }
    else if (IdCarga == 2) {
        //document.getElementById("tblResultado").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style = "text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">96.599.240-9</label></td ><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Sociedad Importadora Lorden S.A.</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Grandes Empresas</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Hernandez Javier</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray;"><a href="/Gestion/ComexIIConsultaPrecios"><img src="../../Content/Images/lupa2.png" class="icon-det"></a></td><td style="text-align: center; border: 1px solid; border-color: darkgray;"><a href="/Gestion/ComexIIConsultaHistoricoCampañas"><img src="../../Content/Images/lupa2.png" class="icon-det"></a></td><td style="text-align: center; border: 1px solid; border-color: darkgray;"><a href="/Gestion/ComexIIConsultaHistoricoPreciosEspeciales"><img  src="../../Content/Images/lupa2.png" class="icon-det"></td></tr>';
        document.getElementById("tblResultado").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style = "text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">96.599.240-9</label></td ><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Sociedad Importadora Lorden S.A.</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Grandes Empresas</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Hernandez Javier</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray;"><a href="/Gestion/ComexIIConsultaPrecios"><img src="../../Content/Images/lupa2.png" class="icon-det"></a></td><td style="text-align: center; border: 1px solid; border-color: darkgray;"><a href="/Gestion/ComexIIConsultaHistoricoPreciosEspeciales"><img  src="../../Content/Images/lupa2.png" class="icon-det"></td></tr>';
    }
}


function validaEnterTarifado(event) {
    var keycode = event.keyCode;
    if (keycode == '13' && document.getElementById("txtRutCliente").value != "") {
        cargaTablaConsultaTarifado(1);
    }
}

function limpiaConsultaCliente() {

    cargaTablaConsultaTarifado(0);
    document.getElementById("cboGerente").value = 1;
    document.getElementById("cboJefe").value = 0;
    document.getElementById("cboEjecutivo").value = 0;
    document.getElementById("txtRutCliente").value = "";
}