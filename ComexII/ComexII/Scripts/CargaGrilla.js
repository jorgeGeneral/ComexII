﻿
//FUNCION QUE CARGA GRILLAS DE ESTRUCTURA DE PRECIOS POR SEGMENTO
function cargaTablaEstructuraPreciosSegmento() {
    //Limpia las Grillas
    for (x = 1; x <= 7; x++) {
        $('#tblPrecioData' + x).empty();
        $('#tblPreciocontroles' + x).empty();
    }
    //Nombre Naranjo Grillas
    var nombre;
    for (x = 1; x <= 7; x++) {
        switch (x) {
            case 1: nombre = "Microempresas"; break; case 2: nombre = "Pequeña Empresa"; break; case 3: nombre = "Medianas Empresas"; break;
            case 4: nombre = "Grandes empresas"; break; case 5: nombre = "Inmobiliaria"; break; case 6: nombre = "Institucional"; break;
            case 7: nombre = "Corporativa"; break;
        }
        if (document.getElementById("cboTipoProducto").value == "1") {
            document.getElementById("tblPrecioData" + x).insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: #FF9D25" colspan="10"><label class="cabeceraBE2">' + nombre + '</label></td></tr>';
        }
        else if (document.getElementById("cboTipoProducto").value == "3") {
            document.getElementById("tblPrecioData" + x).insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: #FF9D25" colspan="11"><label class="cabeceraBE2">' + nombre + '</label></td></tr>';
        }else {
            document.getElementById("tblPrecioData" + x).insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: #FF9D25" colspan="7"><label class="cabeceraBE2">' + nombre + '</label></td></tr>';
        }
    }
    //Cabecera y Datos Grillas
    var tramo1; var tramo2; var tramo3;
    for (x = 1; x <= 7; x++) {
        switch (x) {
            case 1: tramo1 = "0 - 500 (USD)"; tramo2 = "501 - 1,000 (USD)"; tramo3 = "1,001 - 1,500 (USD)"; break;
            case 2: tramo1 = "1,501 - 2,000 (USD)"; tramo2 = "2,001 - 2,500 (USD)"; tramo3 = "2,501 - 3,000 (USD)"; break;
            case 3: tramo1 = "3,001 - 3,500 (USD)"; tramo2 = "3,501 - 4,000 (USD)"; tramo3 = "4,001 - 4,500 (USD)"; break;
            case 4: tramo1 = "4,501 - 5,000 (USD)"; tramo2 = "5,001 - 5,500 (USD)"; tramo3 = "5,501 - 6,000 (USD)"; break;
            case 5: tramo1 = "6,001 - 6,500 (USD)"; tramo2 = "6,501 - 7,000 (USD)"; tramo3 = "7,001 - 7,500 (USD)"; break;
            case 6: tramo1 = "7,501 - 8,000 (USD)"; tramo2 = "8,001 - 8,500 (USD)"; tramo3 = "8,501 - 9,000 (USD)"; break;
            case 7: tramo1 = "9,001 - 9,500 (USD)"; tramo2 = "9,501 - 10,000 (USD)"; tramo3 = "10,001 - 10,500 (USD)"; break;
        }
        //Producto financiamiento contado
        if (document.getElementById("cboTipoProducto").value == "1") {
            //document.getElementById("tblPrecioData" + x).insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Tramo</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Gasto OUR USD</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Gasto OUR Garantizado USD</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Gasto OUR Garantizado EUR</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Gasto Swift</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray;"><label class="labelBE2">Comisión</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width:10%"><label class="labelBE2">Comisión Prorroga</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width:8%"><label class="labelBE2">Spread Ejecutivo (%)</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width:10%"><label class="labelBE2">Fecha Vencimiento Spread Ejecutivo</label></td></tr>';
            document.getElementById("tblPrecioData" + x).insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Tramo</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Gasto OUR USD</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Gasto OUR Garantizado USD</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Gasto OUR Garantizado EUR</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Gasto Swift</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray;"><label class="labelBE2">Comisión</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray;"><label class="labelBE2">Comisión All-in</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width:10%"><label class="labelBE2">Comisión Prorroga</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width:8%"><label class="labelBE2">Spread Ejecutivo (%)</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width:10%"><label class="labelBE2">Fecha Vencimiento Spread Ejecutivo</label></td></tr>';
            document.getElementById("tblPrecioData" + x).insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">' + tramo1 + '</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="1' + x + '"type="text" value="10,00" size="10" disabled style="text-align:right; width:70%" maxlength="15" />&nbsp;<label class="labelBE2" > (USD)</label ></td > <td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="3' + x + '" type="text" value="50,00" size="10" disabled style="text-align:right; width:70%" maxlength="15" />&nbsp;<label class="labelBE2">(USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="4' + x + '" type="text" value="50,00" size="10" disabled style="text-align:right; width:70%" maxlength="15" />&nbsp;<label class="labelBE2">(EUR)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="5' + x + '" type="text" value="0,00" size="10" disabled style="text-align:right; width:70%" maxlength="15" />&nbsp;<label class="labelBE2" > (USD)</label ></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="6' + x + '" type="text" value="123,00" size="10" disabled style="text-align:right; width:70%" maxlength="15" />&nbsp;<label class="labelBE2">(USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">19,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">23,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">1,10</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">15/01/2019</label></td></tr >';
            document.getElementById("tblPrecioData" + x).insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">' + tramo2 + '</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="7' + x + '"type="text" value="10,00" size="10" disabled style="text-align:right; width:70%" maxlength="15" />&nbsp;<label class="labelBE2" > (USD)</label ></td > <td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="9' + x + '" type="text" value="50,00" size="10" disabled style="text-align:right; width:70%" maxlength="15" />&nbsp;<label class="labelBE2">(USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="10' + x + '" type="text" value="50,00" size="10" disabled style="text-align:right; width:70%" maxlength="15" />&nbsp;<label class="labelBE2">(EUR)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="11' + x + '" type="text" value="0,00" size="10" disabled style="text-align:right; width:70%" maxlength="15" />&nbsp;<label class="labelBE2" > (USD)</label ></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="12' + x + '" type="text" value="123,00" size="10" disabled style="text-align:right; width:70%" maxlength="15" />&nbsp;<label class="labelBE2">(USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">20,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">23,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">1,10</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">15/01/2019</label></td></tr >';
            document.getElementById("tblPrecioData" + x).insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">' + tramo3 + '</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="13' + x + '"type="text" value="10,00" size="10" disabled style="text-align:right; width:70%" maxlength="15" />&nbsp;<label class="labelBE2" > (USD)</label ></td > <td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="15' + x + '" type="text" value="50,00" size="10" disabled style="text-align:right; width:70%" maxlength="15" />&nbsp;<label class="labelBE2">(USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="16' + x + '" type="text" value="50,00" size="10" disabled style="text-align:right; width:70%" maxlength="15" />&nbsp;<label class="labelBE2">(EUR)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="17' + x + '" type="text" value="0,00" size="10" disabled style="text-align:right; width:70%" maxlength="15" />&nbsp;<label class="labelBE2"> (USD)</label ></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="18' + x + '" type="text" value="123,00" size="10" disabled style="text-align:right; width:70%" maxlength="15" />&nbsp;<label class="labelBE2">(USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">21,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">23,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">1,10</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">15/01/2019</label></td></tr >';
        } //Producto CCarta de Creditos
        else if (document.getElementById("cboTipoProducto").value == "3") {            
            document.getElementById("tblPrecioData" + x).insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Tramo</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Comisión apertura</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Gasto Swift</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Comisión All-in</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Comisión de Modificación</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray;"><label class="labelBE2">Comisión de Anulación</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray;"><label class="labelBE2">Comisión Prorroga</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width:10%"><label class="labelBE2">Tasa Apertura-Negociación</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width:10%"><label class="labelBE2">Tasa Plazo Proveedor</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width:8%"><label class="labelBE2">Spread Ejecutivo (%)</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width:10%"><label class="labelBE2">Fecha Vencimiento Spread Ejecutivo</label></td></tr>';
            document.getElementById("tblPrecioData" + x).insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">' + tramo1 + '</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="1' + x + '"type="text" value="10,00" size="10" disabled style="text-align:right; width:70%" maxlength="15" />&nbsp;<label class="labelBE2" > (USD)</label ></td > <td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="3' + x + '" type="text" value="50,00" size="10" disabled style="text-align:right; width:70%" maxlength="15" />&nbsp;<label class="labelBE2">(USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="4' + x + '" type="text" value="50,00" size="10" disabled style="text-align:right; width:70%" maxlength="15" />&nbsp;<label class="labelBE2">(EUR)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="5' + x + '" type="text" value="0,00" size="10" disabled style="text-align:right; width:70%" maxlength="15" />&nbsp;<label class="labelBE2" > (USD)</label ></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="6' + x + '" type="text" value="123,00" size="10" disabled style="text-align:right; width:70%" maxlength="15" />&nbsp;<label class="labelBE2">(USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">19,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">19,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">23,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">1,10</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">15/01/2019</label></td></tr >';
            document.getElementById("tblPrecioData" + x).insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">' + tramo2 + '</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="7' + x + '"type="text" value="10,00" size="10" disabled style="text-align:right; width:70%" maxlength="15" />&nbsp;<label class="labelBE2" > (USD)</label ></td > <td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="9' + x + '" type="text" value="50,00" size="10" disabled style="text-align:right; width:70%" maxlength="15" />&nbsp;<label class="labelBE2">(USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="10' + x + '" type="text" value="50,00" size="10" disabled style="text-align:right; width:70%" maxlength="15" />&nbsp;<label class="labelBE2">(EUR)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="11' + x + '" type="text" value="0,00" size="10" disabled style="text-align:right; width:70%" maxlength="15" />&nbsp;<label class="labelBE2" > (USD)</label ></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="12' + x + '" type="text" value="123,00" size="10" disabled style="text-align:right; width:70%" maxlength="15" />&nbsp;<label class="labelBE2">(USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">19,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">20,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">23,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">1,10</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">15/01/2019</label></td></tr >';
            document.getElementById("tblPrecioData" + x).insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">' + tramo3 + '</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="13' + x + '"type="text" value="10,00" size="10" disabled style="text-align:right; width:70%" maxlength="15" />&nbsp;<label class="labelBE2" > (USD)</label ></td > <td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="15' + x + '" type="text" value="50,00" size="10" disabled style="text-align:right; width:70%" maxlength="15" />&nbsp;<label class="labelBE2">(USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="16' + x + '" type="text" value="50,00" size="10" disabled style="text-align:right; width:70%" maxlength="15" />&nbsp;<label class="labelBE2">(EUR)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="17' + x + '" type="text" value="0,00" size="10" disabled style="text-align:right; width:70%" maxlength="15" />&nbsp;<label class="labelBE2"> (USD)</label ></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="18' + x + '" type="text" value="123,00" size="10" disabled style="text-align:right; width:70%" maxlength="15" />&nbsp;<label class="labelBE2">(USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">19,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">21,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">23,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">1,10</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">15/01/2019</label></td></tr >';
        }
        else {//Resto de productos
            document.getElementById("tblPrecioData" + x).insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Tramo</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Gasto OUR USD</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Gasto OUR Garantizado USD</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Gasto OUR Garantizado EUR</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Gasto Swift</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray;"><label class="labelBE2">Comisión</label></td></tr>';
            document.getElementById("tblPrecioData" + x).insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">' + tramo1 + '</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="1' + x + '"type="text" value="120,00" size="10" disabled style="text-align:right; width:80%" maxlength="15" />&nbsp;<label class="labelBE2" > (USD)</label ></td > <td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="3' + x + '" type="text" value="50,00" size="10" disabled style="text-align:right; width:80%" maxlength="15" />&nbsp;<label class="labelBE2">(USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="4' + x + '" type="text" value="20,00" size="10" disabled style="text-align:right; width:80%" maxlength="15" />&nbsp;<label class="labelBE2">(EUR)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="5' + x + '" type="text" value="0,00" size="10" disabled style="text-align:right; width:80%" maxlength="15" />&nbsp;<label class="labelBE2">(USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="6' + x + '" type="text" value="220,00" size="10" disabled style="text-align:right; width:80%" maxlength="15" />&nbsp;<label class="labelBE2">(USD)</label></td></tr >';
            document.getElementById("tblPrecioData" + x).insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">' + tramo2 + '</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="7' + x + '"type="text" value="80,00" size="10" disabled style="text-align:right; width:80%" maxlength="15" />&nbsp;<label class="labelBE2" > (USD)</label ></td > <td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="9' + x + '" type="text" value="30,00" size="10" disabled style="text-align:right; width:80%" maxlength="15" />&nbsp;<label class="labelBE2">(USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="10' + x + '" type="text" value="10,00" size="10" disabled style="text-align:right; width:80%" maxlength="15" />&nbsp;<label class="labelBE2">(EUR)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="11' + x + '" type="text" value="0,00" size="10" disabled style="text-align:right; width:80%" maxlength="15" />&nbsp;<label class="labelBE2">(USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="12' + x + '" type="text" value="320,00" size="10" disabled style="text-align:right; width:80%" maxlength="15" />&nbsp;<label class="labelBE2">(USD)</label></td></tr >';
            document.getElementById("tblPrecioData" + x).insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">' + tramo3 + '</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="13' + x + '"type="text" value="270,00" size="10" disabled style="text-align:right; width:80%" maxlength="15" />&nbsp;<label class="labelBE2" > (USD)</label ></td > <td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="15' + x + '" type="text" value="90,00" size="10" disabled style="text-align:right; width:80%" maxlength="15" />&nbsp;<label class="labelBE2">(USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="16' + x + '" type="text" value="5,00" size="10" disabled style="text-align:right; width:80%" maxlength="15" />&nbsp;<label class="labelBE2">(EUR)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="17' + x + '" type="text" value="0,00" size="10" disabled style="text-align:right; width:80%" maxlength="15" />&nbsp;<label class="labelBE2">(USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="18' + x + '" type="text" value="420,00" size="10" disabled style="text-align:right; width:80%" maxlength="15" />&nbsp;<label class="labelBE2">(USD)</label></td></tr >';
        }
        //Grilla controles para todos los productos
        document.getElementById("tblPreciocontroles" + x).insertRow(-1).innerHTML = '<tr><td width="10%" rowspan="1"><label class="labelBE2">Fecha Vigencia :</label></td><td width="30%"><label class="labelBE2">Desde</label>&nbsp<input id="19' + x + '"disabled size="13" maxlength="10" type="text" placeholder="01/02/2020" style="text-align:center"/>&nbsp&nbsp<label class="labelBE2">Hora</label>&nbsp<input id="20' + x + '"disabled size="8" maxlength="5" type="text" placeholder="00:00" style="text-align:center"/></td><td width="15%"><button style="width:100%; text-align:center" id="btnEditaMicro" class="botonBE" onclick="habilitaDeshabilitaCamposEstructuraPrecioSegmento(' + x + ', 1)">Editar</button></td><td width="15%"><button style="width:100%; text-align:center" id="btnActualizaMicro" class="botonBE" onclick="habilitaDeshabilitaCamposEstructuraPrecioSegmento(' + x + ', 0)">Actualizar</button></td></tr>';
    }

}