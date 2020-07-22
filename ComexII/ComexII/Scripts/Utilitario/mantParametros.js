﻿/**
 * Funcion que carga informacion de parametros en grilla de pantalla mantenedor de parametros
 */
function cargaDataMantParametros() {

    $('#tblParametros').append('<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray" width="6%"><label class="labelBE2"></label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray" width="8%"><label class="labelBE2">Código</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray" width="30%"><label class="labelBE2">Descripción</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray" width="8%"><label class="labelBE2">Valor</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray" width="13%"><label class="labelBE2">Tipo Parametro</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray" width="10%"><label class="labelBE2">Usuario</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray" width="10%"><label class="labelBE2">Fecha</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray" width="10%"><label class="labelBE2">Hora</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray" width="30%"><label class="labelBE2">Observación</label></td></tr>');
    $('#tblParametros').append('<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><input id="r1" type="radio" value="1" name="cambia" onchange="habilita(r1)"/></td><td class="labelBE2" style="text-align: left; border: 1px solid; border-color: darkgray">0001</td><td class="labelBE2" style="text-align: left; border: 1px solid; border-color: darkgray">Borradores</td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray"><input id="txt1" type="text" value="50" size="25" disabled style="text-align:center" maxlength="10" /></td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray"> valor</td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray">rjara8</td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray">19/08/2019</td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray">12:00:00</td><td class="labelBE2" style="text-align: left;border: 1px solid; border-color: darkgray"><input id="txt2" type="text" value="Cantidad de borradores por empresas" size="60" disabled maxlength="50"/></td></tr>');
    $('#tblParametros').append('<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><input id="r3" type="radio" value="1" name="cambia" onchange="habilita(r3)"/></td><td class="labelBE2" style="text-align: left; border: 1px solid; border-color: darkgray">0002</td><td class="labelBE2" style="text-align: left; border: 1px solid; border-color: darkgray">Cantidad de ODP</td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray"><input id="txt3" type="text" value="20" size="25" disabled style="text-align:center" maxlength="10" /></td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray"> valor</td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray">rjara8</td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray">19/08/2019</td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray">12:00:00</td><td class="labelBE2" style="text-align: left;border: 1px solid; border-color: darkgray"><input id="txt4" type="text" value="Cantidad de ordenes de pago por solicitud" size="60" disabled maxlength="50"/></td></tr>');
    $('#tblParametros').append('<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><input id="r5" type="radio" value="1" name="cambia" onchange="habilita(r5)"/></td><td class="labelBE2" style="text-align: left; border: 1px solid; border-color: darkgray">0003</td><td class="labelBE2" style="text-align: left; border: 1px solid; border-color: darkgray">Hora caducidad CCD</td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray"><input id="txt5" type="text" value="13:00" size="25" disabled style="text-align:center" maxlength="10" /></td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray"> valor</td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray">rjara8</td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray">19/08/2019</td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray">12:00:00</td><td class="labelBE2" style="text-align: left;border: 1px solid; border-color: darkgray"><input id="txt6" type="text" value="Hora caducidad con compra de divisas" size="60" disabled maxlength="50"/></td></tr>');
    $('#tblParametros').append('<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><input id="r7" type="radio" value="1" name="cambia" onchange="habilita(r7)"/></td><td class="labelBE2" style="text-align: left; border: 1px solid; border-color: darkgray">0004</td><td class="labelBE2" style="text-align: left; border: 1px solid; border-color: darkgray">Hora caducidad SCD</td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray"><input id="txt7" type="text" value="13:00" size="25" disabled style="text-align:center" maxlength="10" /></td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray"> valor</td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray">rjara8</td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray">19/08/2019</td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray">12:00:00</td><td class="labelBE2" style="text-align: left;border: 1px solid; border-color: darkgray"><input id="txt8" type="text" value="Hora caducidad sin compra de divisas" size="60" disabled maxlength="50"/></td></tr>');
    $('#tblParametros').append('<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><input id="r9" type="radio" value="1" name="cambia" onchange="habilita(r9)"/></td><td class="labelBE2" style="text-align: left; border: 1px solid; border-color: darkgray">0005</td><td class="labelBE2" style="text-align: left; border: 1px solid; border-color: darkgray">Monto de desviacion</td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray"><input id="txt9" type="text" value="1000" size="25" disabled style="text-align:center" maxlength="10" /></td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray"> valor</td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray">rjara8</td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray">19/08/2019</td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray">12:00:00</td><td class="labelBE2" style="text-align: left;border: 1px solid; border-color: darkgray"><input id="txt10" type="text" value="Monto de desviacion en solicitudes ODP" size="60" disabled maxlength="50"/></td></tr>');
    $('#tblParametros').append('<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><input id="r11" type="radio" value="1" name="cambia" onchange="habilita(r11)"/></td><td class="labelBE2" style="text-align: left; border: 1px solid; border-color: darkgray">0006</td><td class="labelBE2" style="text-align: left; border: 1px solid; border-color: darkgray">Tiempo de precio</td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray"><input id="txt11" type="text" value="2:00" size="25" disabled style="text-align:center" maxlength="10" /></td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray"> valor</td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray">rjara8</td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray">19/08/2019</td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray">12:00:00</td><td class="labelBE2" style="text-align: left;border: 1px solid; border-color: darkgray"><input id="txt12" type="text" value="Tiempo duracion de Precios en pantalla" size="60" disabled maxlength="50"/></td></tr>');
    $('#tblParametros').append('<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><input id="r13" type="radio" value="1" name="cambia" onchange="habilita(r13)"/></td><td class="labelBE2" style="text-align: left; border: 1px solid; border-color: darkgray">0007</td><td class="labelBE2" style="text-align: left; border: 1px solid; border-color: darkgray">Hora max valuta cero</td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray"><input id="txt13" type="text" value="15:30" size="25" disabled style="text-align:center" maxlength="10" /></td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray"> valor</td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray">rjara8</td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray">19/08/2019</td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray">12:00:00</td><td class="labelBE2" style="text-align: left;border: 1px solid; border-color: darkgray"><input id="txt14" type="text" value="Hora maxima valuta cero" size="60" disabled maxlength="50"/></td></tr>');
    $('#tblParametros').append('<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><input id="r15" type="radio" value="1" name="cambia" onchange="habilita(r15)"/></td><td class="labelBE2" style="text-align: left; border: 1px solid; border-color: darkgray">0008</td><td class="labelBE2" style="text-align: left; border: 1px solid; border-color: darkgray">Hora corte operaciones</td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray"><input id="txt15" type="text" value="20:30" size="25" disabled style="text-align:center" maxlength="10" /></td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray"> valor</td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray">rjara8</td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray">19/08/2019</td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray">12:00:00</td><td class="labelBE2" style="text-align: left;border: 1px solid; border-color: darkgray"><input id="txt16" type="text" value="Hora corte en operaciones recepcion ODP" size="60" disabled maxlength="50"/></td></tr>');
    $('#tblParametros').append('<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><input id="r17" type="radio" value="1" name="cambia" onchange="habilita(r17)"/></td><td class="labelBE2" style="text-align: left; border: 1px solid; border-color: darkgray">0009</td><td class="labelBE2" style="text-align: left; border: 1px solid; border-color: darkgray">Plz max en L/C</td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray"><input id="txt17" type="text" value="180" size="25" disabled style="text-align:center" maxlength="10" /></td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray"> valor</td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray">rjara8</td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray">19/08/2019</td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray">12:00:00</td><td class="labelBE2" style="text-align: left;border: 1px solid; border-color: darkgray"><input id="txt18" type="text" value="Plazo maximo en cartas de credito" size="60" disabled maxlength="50"/></td></tr>');
    $('#tblParametros').append('<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><input id="r19" type="radio" value="1" name="cambia" onchange="habilita(r19)"/></td><td class="labelBE2" style="text-align: left; border: 1px solid; border-color: darkgray">0010</td><td class="labelBE2" style="text-align: left; border: 1px solid; border-color: darkgray">Tolerancia en L/C</td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray"><input id="txt19" type="text" value="15" size="25" disabled style="text-align:center" maxlength="10" /></td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray"> valor</td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray">rjara8</td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray">19/08/2019</td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray">12:00:00</td><td class="labelBE2" style="text-align: left;border: 1px solid; border-color: darkgray"><input id="txt20" type="text" value="Tolerancia en cartas de credito" size="60" disabled maxlength="50"/></td></tr>');
    $('#tblParametros').append('<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><input id="r21" type="radio" value="1" name="cambia" onchange="habilita(r21)"/></td><td class="labelBE2" style="text-align: left; border: 1px solid; border-color: darkgray">0011</td><td class="labelBE2" style="text-align: left; border: 1px solid; border-color: darkgray">Dias max curse L/C</td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray"><input id="txt21" type="text" value="15" size="25" disabled style="text-align:center" maxlength="10" /></td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray"> valor</td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray">rjara8</td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray">19/08/2019</td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray">12:00:00</td><td class="labelBE2" style="text-align: left;border: 1px solid; border-color: darkgray"><input id="txt22" type="text" value="Dias maximo de curse de cartas de credito" size="60" disabled maxlength="50"/></td></tr>');
    $('#tblParametros').append('<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><input id="r23" type="radio" value="1" name="cambia" onchange="habilita(r23)"/></td><td class="labelBE2" style="text-align: left; border: 1px solid; border-color: darkgray">0012</td><td class="labelBE2" style="text-align: left; border: 1px solid; border-color: darkgray">Hora caduca ValCero</td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray"><input id="txt23" type="text" value="15:00" size="25" disabled style="text-align:center" maxlength="10" /></td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray"> valor</td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray">rjara8</td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray">19/08/2019</td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray">12:00:00</td><td class="labelBE2" style="text-align: left;border: 1px solid; border-color: darkgray"><input id="txt24" type="text" value="Hora caducidad solicitudes valuta cero" size="60" disabled maxlength="50"/></td></tr>');
    $('#tblParametros').append('<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><input id="r25" type="radio" value="1" name="cambia" onchange="habilita(r25)"/></td><td class="labelBE2" style="text-align: left; border: 1px solid; border-color: darkgray">0013</td><td class="labelBE2" style="text-align: left; border: 1px solid; border-color: darkgray">Tiempo refresco PU</td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray"><input id="txt25" type="text" value="30:00:00" size="25" disabled style="text-align:center" maxlength="10" /></td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray"> valor</td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray">rjara8</td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray">19/08/2019</td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray">12:00:00</td><td class="labelBE2" style="text-align: left;border: 1px solid; border-color: darkgray"><input id="txt26" type="text" value="Tiempo refresco consulta PU" size="60" disabled maxlength="50"/></td></tr>');
    $('#tblParametros').append('<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><input id="r27" type="radio" value="1" name="cambia" onchange="habilita(r27)"/></td><td class="labelBE2" style="text-align: left; border: 1px solid; border-color: darkgray">0014</td><td class="labelBE2" style="text-align: left; border: 1px solid; border-color: darkgray">Hora tope Cargo CTA</td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray"><input id="txt27" type="text" value="14:00" size="25" disabled style="text-align:center" maxlength="10" /></td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray"> valor</td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray">rjara8</td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray">19/08/2019</td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray">12:00:00</td><td class="labelBE2" style="text-align: left;border: 1px solid; border-color: darkgray"><input id="txt28" type="text" value="Hora tope para autorizar cargao ctas ODP" size="60" disabled maxlength="50"/></td></tr>');
    $('#tblParametros').append('<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><input id="r29" type="radio" value="1" name="cambia" onchange="habilita(r29)"/></td><td class="labelBE2" style="text-align: left; border: 1px solid; border-color: darkgray">0015</td><td class="labelBE2" style="text-align: left; border: 1px solid; border-color: darkgray">Hora Cierre Contable</td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray"><input id="txt29" type="text" value="15:00" size="25" disabled style="text-align:center" maxlength="10" /></td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray"> valor</td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray">rjara8</td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray">19/08/2019</td><td class="labelBE2" style="text-align: center; border: 1px solid; border-color: darkgray">12:00:00</td><td class="labelBE2" style="text-align: left;border: 1px solid; border-color: darkgray"><input id="txt30" type="text" value="Hora de Cierre Contable" size="60" disabled maxlength="50"/></td></tr>');

}

/**
 * Funcion que habilita los input al seleccionar radio button en pantalla mantenedor de parametros
 * @param {any} radio id del radio button seleccionado
 */
function habilita(radio) {

    for (x = 1; x <= 30; x++) {
        document.getElementById("txt" + x).disabled = true;
    }
    for (x = 1; x <= 30; x++) {
        if (radio.id == "r" + x) {
            var z = x + 1;
            document.getElementById("txt" + x).disabled = false;
            document.getElementById("txt" + z).disabled = false;
        }
    }

}