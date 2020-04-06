
function cambiaGrilla() {
    if (document.getElementById("cboTipoProducto").value == "2") {
        document.getElementById("tblTarifado").style.width = "100%";
        document.getElementById("td1").style.display = "";
        document.getElementById("td2").style.display = "";
        document.getElementById("td3").style.display = "";
        document.getElementById("td4").style.display = "";
        document.getElementById("td5").style.display = "";
        document.getElementById("td6").style.display = "";
        document.getElementById("td7").style.display = "";
        document.getElementById("td8").style.display = "";
        document.getElementById("td9").style.display = "";
        document.getElementById("td10").style.display = "";
        document.getElementById("td11").style.display = "";
        document.getElementById("td12").style.display = "";
    } else {
        document.getElementById("tblTarifado").style.width = "40%";
        document.getElementById("td1").style.display = "none";
        document.getElementById("td2").style.display = "none";
        document.getElementById("td3").style.display = "none";
        document.getElementById("td4").style.display = "none";
        document.getElementById("td5").style.display = "none";
        document.getElementById("td6").style.display = "none";
        document.getElementById("td7").style.display = "none";
        document.getElementById("td8").style.display = "none";
        document.getElementById("td9").style.display = "none";
        document.getElementById("td10").style.display = "none";
        document.getElementById("td11").style.display = "none";
        document.getElementById("td12").style.display = "none";
    }
}

function cambiaGrillaEstructuraPrecio() {
    if (document.getElementById("cboTipoProducto").value == "2") {
        document.getElementById("tblTarifado").style.width = "90%";
        document.getElementById("tblTarifado2").style.width = "90%";
        document.getElementById("tblTarifado3").style.width = "90%";
        document.getElementById("tblTarifado4").style.width = "90%";
        document.getElementById("tblTarifado5").style.width = "90%";
        document.getElementById("tblTarifado6").style.width = "90%";
        document.getElementById("tblTarifado7").style.width = "90%";
        document.getElementById("tdca").colSpan = "6";
        document.getElementById("tdca2").colSpan = "6";
        document.getElementById("tdca3").colSpan = "6";
        document.getElementById("tdca4").colSpan = "6";
        document.getElementById("tdca5").colSpan = "6";
        document.getElementById("tdca6").colSpan = "6";
        document.getElementById("tdca7").colSpan = "6";
        document.getElementById("td1").style.display = "";
        document.getElementById("td2").style.display = "";
        document.getElementById("td3").style.display = "";
        document.getElementById("td4").style.display = "";
        document.getElementById("td5").style.display = "";
        document.getElementById("td6").style.display = "";
        document.getElementById("td7").style.display = "";
        document.getElementById("td8").style.display = "";
        document.getElementById("td9").style.display = "";
        document.getElementById("td10").style.display = "";
        document.getElementById("td11").style.display = "";
        document.getElementById("td12").style.display = "";

        document.getElementById("tda1").style.display = "";
        document.getElementById("tda2").style.display = "";
        document.getElementById("tda3").style.display = "";
        document.getElementById("tda4").style.display = "";
        document.getElementById("tda5").style.display = "";
        document.getElementById("tda6").style.display = "";
        document.getElementById("tda7").style.display = "";
        document.getElementById("tda8").style.display = "";
        document.getElementById("tda9").style.display = "";
        document.getElementById("tda10").style.display = "";
        document.getElementById("tda11").style.display = "";
        document.getElementById("tda12").style.display = "";

        document.getElementById("tdb1").style.display = "";
        document.getElementById("tdb2").style.display = "";
        document.getElementById("tdb3").style.display = "";
        document.getElementById("tdb4").style.display = "";
        document.getElementById("tdb5").style.display = "";
        document.getElementById("tdb6").style.display = "";
        document.getElementById("tdb7").style.display = "";
        document.getElementById("tdb8").style.display = "";
        document.getElementById("tdb9").style.display = "";
        document.getElementById("tdb10").style.display = "";
        document.getElementById("tdb11").style.display = "";
        document.getElementById("tdb12").style.display = "";

        document.getElementById("tdc1").style.display = "";
        document.getElementById("tdc2").style.display = "";
        document.getElementById("tdc3").style.display = "";
        document.getElementById("tdc4").style.display = "";
        document.getElementById("tdc5").style.display = "";
        document.getElementById("tdc6").style.display = "";
        document.getElementById("tdc7").style.display = "";
        document.getElementById("tdc8").style.display = "";
        document.getElementById("tdc9").style.display = "";
        document.getElementById("tdc10").style.display = "";
        document.getElementById("tdc11").style.display = "";
        document.getElementById("tdc12").style.display = "";

        document.getElementById("tdd1").style.display = "";
        document.getElementById("tdd2").style.display = "";
        document.getElementById("tdd3").style.display = "";
        document.getElementById("tdd4").style.display = "";
        document.getElementById("tdd5").style.display = "";
        document.getElementById("tdd6").style.display = "";
        document.getElementById("tdd7").style.display = "";
        document.getElementById("tdd8").style.display = "";
        document.getElementById("tdd9").style.display = "";
        document.getElementById("tdd10").style.display = "";
        document.getElementById("tdd11").style.display = "";
        document.getElementById("tdd12").style.display = "";

        document.getElementById("tde1").style.display = "";
        document.getElementById("tde2").style.display = "";
        document.getElementById("tde3").style.display = "";
        document.getElementById("tde4").style.display = "";
        document.getElementById("tde5").style.display = "";
        document.getElementById("tde6").style.display = "";
        document.getElementById("tde7").style.display = "";
        document.getElementById("tde8").style.display = "";
        document.getElementById("tde9").style.display = "";
        document.getElementById("tde10").style.display = "";
        document.getElementById("tde11").style.display = "";
        document.getElementById("tde12").style.display = "";

        document.getElementById("tdf1").style.display = "";
        document.getElementById("tdf2").style.display = "";
        document.getElementById("tdf3").style.display = "";
        document.getElementById("tdf4").style.display = "";
        document.getElementById("tdf5").style.display = "";
        document.getElementById("tdf6").style.display = "";
        document.getElementById("tdf7").style.display = "";
        document.getElementById("tdf8").style.display = "";
        document.getElementById("tdf9").style.display = "";
        document.getElementById("tdf10").style.display = "";
        document.getElementById("tdf11").style.display = "";
        document.getElementById("tdf12").style.display = "";

        document.getElementById("tdf13").style.display = "";
        document.getElementById("tdf14").style.display = "";
        document.getElementById("tdf15").style.display = "";
        $(".tr_mod3").show();
    } else {
        document.getElementById("tblTarifado").style.width = "50%";
        document.getElementById("tblTarifado2").style.width = "50%";
        document.getElementById("tblTarifado3").style.width = "50%";
        document.getElementById("tblTarifado4").style.width = "50%";
        document.getElementById("tblTarifado5").style.width = "50%";
        document.getElementById("tblTarifado6").style.width = "50%";
        document.getElementById("tblTarifado7").style.width = "50%";
        document.getElementById("td1").style.display = "none";
        document.getElementById("td2").style.display = "none";
        document.getElementById("td3").style.display = "none";
        document.getElementById("td4").style.display = "none";
        document.getElementById("td5").style.display = "none";
        document.getElementById("td6").style.display = "none";
        document.getElementById("td7").style.display = "none";
        document.getElementById("td8").style.display = "none";
        document.getElementById("td9").style.display = "none";
        document.getElementById("td10").style.display = "none";
        document.getElementById("td11").style.display = "none";
        document.getElementById("td12").style.display = "none";

        document.getElementById("tda1").style.display = "none";
        document.getElementById("tda2").style.display = "none";
        document.getElementById("tda3").style.display = "none";
        document.getElementById("tda4").style.display = "none";
        document.getElementById("tda5").style.display = "none";
        document.getElementById("tda6").style.display = "none";
        document.getElementById("tda7").style.display = "none";
        document.getElementById("tda8").style.display = "none";
        document.getElementById("tda9").style.display = "none";
        document.getElementById("tda10").style.display = "none";
        document.getElementById("tda11").style.display = "none";
        document.getElementById("tda12").style.display = "none";

        document.getElementById("tdb1").style.display = "none";
        document.getElementById("tdb2").style.display = "none";
        document.getElementById("tdb3").style.display = "none";
        document.getElementById("tdb4").style.display = "none";
        document.getElementById("tdb5").style.display = "none";
        document.getElementById("tdb6").style.display = "none";
        document.getElementById("tdb7").style.display = "none";
        document.getElementById("tdb8").style.display = "none";
        document.getElementById("tdb9").style.display = "none";
        document.getElementById("tdb10").style.display = "none";
        document.getElementById("tdb11").style.display = "none";
        document.getElementById("tdb12").style.display = "none";

        document.getElementById("tdc1").style.display = "none";
        document.getElementById("tdc2").style.display = "none";
        document.getElementById("tdc3").style.display = "none";
        document.getElementById("tdc4").style.display = "none";
        document.getElementById("tdc5").style.display = "none";
        document.getElementById("tdc6").style.display = "none";
        document.getElementById("tdc7").style.display = "none";
        document.getElementById("tdc8").style.display = "none";
        document.getElementById("tdc9").style.display = "none";
        document.getElementById("tdc10").style.display = "none";
        document.getElementById("tdc11").style.display = "none";
        document.getElementById("tdc12").style.display = "none";

        document.getElementById("tdd1").style.display = "none";
        document.getElementById("tdd2").style.display = "none";
        document.getElementById("tdd3").style.display = "none";
        document.getElementById("tdd4").style.display = "none";
        document.getElementById("tdd5").style.display = "none";
        document.getElementById("tdd6").style.display = "none";
        document.getElementById("tdd7").style.display = "none";
        document.getElementById("tdd8").style.display = "none";
        document.getElementById("tdd9").style.display = "none";
        document.getElementById("tdd10").style.display = "none";
        document.getElementById("tdd11").style.display = "none";
        document.getElementById("tdd12").style.display = "none";

        document.getElementById("tde1").style.display = "none";
        document.getElementById("tde2").style.display = "none";
        document.getElementById("tde3").style.display = "none";
        document.getElementById("tde4").style.display = "none";
        document.getElementById("tde5").style.display = "none";
        document.getElementById("tde6").style.display = "none";
        document.getElementById("tde7").style.display = "none";
        document.getElementById("tde8").style.display = "none";
        document.getElementById("tde9").style.display = "none";
        document.getElementById("tde10").style.display = "none";
        document.getElementById("tde11").style.display = "none";
        document.getElementById("tde12").style.display = "none";

        document.getElementById("tdf1").style.display = "none";
        document.getElementById("tdf2").style.display = "none";
        document.getElementById("tdf3").style.display = "none";
        document.getElementById("tdf4").style.display = "none";
        document.getElementById("tdf5").style.display = "none";
        document.getElementById("tdf6").style.display = "none";
        document.getElementById("tdf7").style.display = "none";
        document.getElementById("tdf8").style.display = "none";
        document.getElementById("tdf9").style.display = "none";
        document.getElementById("tdf10").style.display = "none";
        document.getElementById("tdf11").style.display = "none";
        document.getElementById("tdf12").style.display = "none";
        document.getElementById("tdf13").style.display = "none";
        document.getElementById("tdf14").style.display = "none";
        document.getElementById("tdf15").style.display = "none";
        $(".tr_mod").hide();
    }
}

function llenarComboEstructura() {
    $("#cboSegmentoParam").empty();
    if ($("#cboSegmento").val() == "1") {
        $("#cboSegmentoParam").append('<option value="1" selected="selected">0 - 500</option>');
        $("#cboSegmentoParam").append('<option value="2">501 - 1.000</option>');
        $("#cboSegmentoParam").append('<option value="3">1.001 - 1.500</option>');
    }
    if ($("#cboSegmento").val() == "2") {
        $("#cboSegmentoParam").append('<option value="1" selected="selected">1.501 - 2.000</option>');
        $("#cboSegmentoParam").append('<option value="2">2.001 - 2.500</option>');
        $("#cboSegmentoParam").append('<option value="3">2.501 - 3.000</option>');
        $("#cboSegmentoParam").append('<option value="3">3.001 - 3.501</option>');
    }
    if ($("#cboSegmento").val() == "3") {
        $("#cboSegmentoParam").append('<option value="1" selected="selected">3.001 - 3.500</option>');
        $("#cboSegmentoParam").append('<option value="2">3.501 - 4.000</option>');
        $("#cboSegmentoParam").append('<option value="3">4.001 - 4.500</option>');
    }
    if ($("#cboSegmento").val() == "4") {
        $("#cboSegmentoParam").append('<option value="1" selected="selected">4.501 - 5.000</option>');
        $("#cboSegmentoParam").append('<option value="2">5.001 - 5.500</option>');
        $("#cboSegmentoParam").append('<option value="3">5.501 - 6.000</option>');
    }
    if ($("#cboSegmento").val() == "5") {
        $("#cboSegmentoParam").append('<option value="1" selected="selected">6.001 - 6.500</option>');
        $("#cboSegmentoParam").append('<option value="2">6.501 - 7.000</option>');
        $("#cboSegmentoParam").append('<option value="3">7.001 - 7.500</option>');
    }
    if ($("#cboSegmento").val() == "6") {
        $("#cboSegmentoParam").append('<option value="1" selected="selected">7.501 - 8.000</option>');
        $("#cboSegmentoParam").append('<option value="2">8.001 - 8.500</option>');
        $("#cboSegmentoParam").append('<option value="3">8.501 - 9.000</option>');
    }
    if ($("#cboSegmento").val() == "7") {
        $("#cboSegmentoParam").append('<option value="1" selected="selected">9.001 - 9.500</option>');
        $("#cboSegmentoParam").append('<option value="2">9.501 - 10.000</option>');
        $("#cboSegmentoParam").append('<option value="3">10.001 - 10.500</option>');
    }
}

function cambiaGrillaTarifado() {
    cargaGrillaDinamica();
}

function cambiaGrillaPrecioEspecial() {
    $('#tblPreciosEspeciales').empty();

    if (document.getElementById("cboTipoProducto").value == "1") {
        document.getElementById("tblPreciosEspeciales").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width: 19%;"><label class="labelBE2">Tipo Producto</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width: 17%;"><label class="labelBE2">Costo SWIFT</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width: 17%;"><label class="labelBE2">Comisión</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width: 17%;"><label class="labelBE2">Comisión Prorroga</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width: 15%;"><label class="labelBE2">Spread Ejecutivo (%)</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width: 15%;"><label class="labelBE2">Fecha Vencimiento Spread Ejecutivo</label></td></tr>';
        document.getElementById("tblPreciosEspeciales").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">ODP al Exterior</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">50,00  (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">20 (CLP)</label></td><td id="td4" style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td><td id="td5" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td><td id="td6" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td></tr>';
    }

    if (document.getElementById("cboTipoProducto").value == "2") {
        document.getElementById("tblPreciosEspeciales").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width: 19%;"><label class="labelBE2">Tipo Producto</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width: 17%;"><label class="labelBE2">Costo SWIFT</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width: 17%;"><label class="labelBE2">Comisión</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width: 17%;"><label class="labelBE2">Comisión Prorroga</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width: 15%;"><label class="labelBE2">Spread Ejecutivo (%)</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width: 15%;"><label class="labelBE2">Fecha Vencimiento Spread Ejecutivo</label></td></tr>';
        
        document.getElementById("tblPreciosEspeciales").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Financiamiento Contado</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">50,00  (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">20 (CLP)</label></td><td id="td4" style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">23 (CLP)</label></td><td id="td5" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">2,50</label></td><td id="td6" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">21/05/2017</label></td></tr>';
        
    }

    if (document.getElementById("cboTipoProducto").value == "3") {
        document.getElementById("tblPreciosEspeciales").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width: 19%;"><label class="labelBE2">Tipo Producto</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width: 17%;"><label class="labelBE2">Costo SWIFT</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width: 17%;"><label class="labelBE2">Comisión</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width: 17%;"><label class="labelBE2">Comisión Prorroga</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width: 15%;"><label class="labelBE2">Spread Ejecutivo (%)</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width: 15%;"><label class="labelBE2">Fecha Vencimiento Spread Ejecutivo</label></td></tr>';
        
        document.getElementById("tblPreciosEspeciales").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Otro Financiamiento</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">50,00  (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">20 (CLP)</label></td><td id="td4" style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td><td id="td5" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td><td id="td6" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td></tr>';
    }

    if (document.getElementById("cboTipoProducto").value == "4") {

        // Ejemplo tabla con titulos naranjos
        document.getElementById("tblPreciosEspeciales").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width: 19%;"><label class="labelBE2">Tipo Producto</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width: 17%;"><label class="labelBE2">Costo SWIFT</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width: 17%;"><label class="labelBE2">Comisión</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width: 17%;"><label class="labelBE2">Comisión Prorroga</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width: 15%;"><label class="labelBE2">Spread Ejecutivo (%)</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width: 15%;"><label class="labelBE2">Fecha Vencimiento Spread Ejecutivo</label></td></tr>';
        document.getElementById("tblPreciosEspeciales").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">ODP al Exterior</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">50,00  (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">20 (CLP)</label></td><td id="td4" style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td><td id="td5" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td><td id="td6" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td></tr>';
        document.getElementById("tblPreciosEspeciales").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Financiamiento Contado</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">50,00  (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">20 (CLP)</label></td><td id="td4" style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">23 (CLP)</label></td><td id="td5" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">2,50</label></td><td id="td6" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">21/05/2017</label></td></tr>';
        document.getElementById("tblPreciosEspeciales").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Otro Financiamiento</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">50,00  (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">20 (CLP)</label></td><td id="td4" style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td><td id="td5" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td><td id="td6" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td></tr>';
    }
}

function habilita(radio, txt1, txt2) {
    var i = (document.getElementById("myTable").rows.length - 1) * 2;
    for (x = 1; x <= i; x++) {
        document.getElementById("txt" + x).disabled = true;
        document.getElementById("txt" + x).disabled = true;
    }
    if (radio.checked) {
        document.getElementById(txt1).disabled = false;
        document.getElementById(txt2).disabled = false;
    }
}

function cambiaGrillaTarifa() {
    if (document.getElementById("cboTipoProducto").value == "2") {
        document.getElementById("tblTarifado").style.width = "70%";
        $("#td1").show();
        $("#td2").show();
        $("#td3").show();
        $("#td4").show();
        $("#td5").show();
        $("#td6").show();
        $("#td7").show();
        $("#td8").show();
        $("#td9").show();
        $("#td10").show();
        $("#td11").show();
        $("#td12").show();
        $(".tr_mod").show();
    } else {
        document.getElementById("tblTarifado").style.width = "40%";
        $("#td1").hide();
        $("#td2").hide();
        $("#td3").hide();
        $("#td4").hide();
        $("#td5").hide();
        $("#td6").hide();
        $("#td7").hide();
        $("#td8").hide();
        $("#td9").hide();
        $("#td10").hide();
        $("#td11").hide();
        $("#td12").hide();
        $(".tr_mod").hide();
    }
}

function alerta() {
    alert("El valor de la campaña es más alto que el valor del segmento");
    alert("El valor de la campaña es mayor que el precio pizarra");
}

function msgCancelaCampaña() {
    alert("Se va a cancelar una campaña vigente ¿esta seguro?");
}

function msgEliminaCampaña() {
    alert("Se va a Eliminar una campaña");
}

function msgCrearCampaña() {
    alert("Se creo una nueva campaña de manera correcta");
}
/////////////////// Nueva Campaña ////////////////////
function cambiaTipoProducto() {
    if (document.getElementById("cboTipoProducto").value == "2") {
        $(".tr_mod").show();
    } else {
        $(".tr_mod").hide();
    }
}


function agregarFila() {
    eliminarFila();
    llenarCombo();
    if (document.getElementById("cboSegmento").value == "2") {
        if (document.getElementById("cboTipoProducto").value == "2") {
            document.getElementById("tblTarifado").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">0 - 500 (USD)</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">50,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">20 (CLP)</label></td><td id="td4" style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">23 (CLP)</label></td><td id="td5" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">2,50</label></td><td id="td6" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">21/05/2017</label></td></tr>';            
        } else {
            document.getElementById("tblTarifado").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">0 - 500 (USD)</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">50,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">20 (CLP)</label></td><td id="td4" style="text-align: right; display: none; border: 1px solid; border-color: darkgray"><label class="labelBE2">23 (CLP)</label></td><td id="td5" style="text-align: center; display: none; border: 1px solid; border-color: darkgray"><label class="labelBE2">2,50</label></td><td id="td6" style="text-align: center; display: none; border: 1px solid; border-color: darkgray"><label class="labelBE2">21/05/2017</label></td></tr>';
        }
    }
    else if (document.getElementById("cboSegmento").value == "3") {
        if (document.getElementById("cboTipoProducto").value == "2") {
            document.getElementById("tblTarifado").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">1.501 - 2.000 (USD)</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">50,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">20 (CLP)</label></td><td id="td4" style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">23 (CLP)</label></td><td id="td5" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">2,50</label></td><td id="td6" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">21/05/2017</label></td></tr>';
            document.getElementById("tblTarifado").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">2.001 - 2.500 (USD)</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">60,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">25 (CLP)</label></td><td id="td7" style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">24 (CLP)</label></td><td id="td8" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">3,50</label></td><td id="td9" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">12/08/2018</label></td></tr>';
            document.getElementById("tblTarifado").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">2.501 - 3.000 (USD)</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">70,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">30 (CLP)</label></td><td id="td10" style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">25 (CLP)</label></td><td id="td11" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">4,50</label></td><td id="td12" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">31/12/2019</label></td></tr>';
        } else {
            document.getElementById("tblTarifado").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">1.501 - 2.000 (USD)</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">50,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">20 (CLP)</label></td><td id="td4" style="text-align: right; display: none; border: 1px solid; border-color: darkgray"><label class="labelBE2">23 (CLP)</label></td><td id="td5" style="text-align: center; display: none; border: 1px solid; border-color: darkgray"><label class="labelBE2">2,50</label></td><td id="td6" style="text-align: center; display: none; border: 1px solid; border-color: darkgray"><label class="labelBE2">21/05/2017</label></td></tr>';
            document.getElementById("tblTarifado").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">2.001 - 2.500 (USD)</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">60,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">25 (CLP)</label></td><td id="td7" style="text-align: right; display: none; border: 1px solid; border-color: darkgray"><label class="labelBE2">24 (CLP)</label></td><td id="td8" style="text-align: center; display: none; border: 1px solid; border-color: darkgray"><label class="labelBE2">3,50</label></td><td id="td9" style="text-align: center; display: none; border: 1px solid; border-color: darkgray"><label class="labelBE2">12/08/2018</label></td></tr>';
            document.getElementById("tblTarifado").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">2.501 - 3.000 (USD)</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">70,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">30 (CLP)</label></td><td id="td10" style="text-align: right; display: none; border: 1px solid; border-color: darkgray"><label class="labelBE2">25 (CLP)</label></td><td id="td11" style="text-align: center; display: none; border: 1px solid; border-color: darkgray"><label class="labelBE2">4,50</label></td><td id="td12" style="text-align: center; display: none; border: 1px solid; border-color: darkgray"><label class="labelBE2">31/12/2019</label></td></tr>';
        }
    }
    else if (document.getElementById("cboSegmento").value == "4") {
        if (document.getElementById("cboTipoProducto").value == "2") {
            document.getElementById("tblTarifado").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">3.001 - 3.500 (USD)</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">50,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">20 (CLP)</label></td><td id="td4" style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">23 (CLP)</label></td><td id="td5" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">2,50</label></td><td id="td6" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">21/05/2017</label></td></tr>';
            document.getElementById("tblTarifado").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">3.501 - 4.000 (USD)</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">60,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">25 (CLP)</label></td><td id="td7" style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">24 (CLP)</label></td><td id="td8" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">3,50</label></td><td id="td9" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">12/08/2018</label></td></tr>';
        } else {
            document.getElementById("tblTarifado").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">3.001 - 3.500 (USD)</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">50,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">20 (CLP)</label></td><td id="td4" style="text-align: right; display: none; border: 1px solid; border-color: darkgray"><label class="labelBE2">23 (CLP)</label></td><td id="td5" style="text-align: center; display: none; border: 1px solid; border-color: darkgray"><label class="labelBE2">2,50</label></td><td id="td6" style="text-align: center; display: none; border: 1px solid; border-color: darkgray"><label class="labelBE2">21/05/2017</label></td></tr>';
            document.getElementById("tblTarifado").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">3.501 - 4.000 (USD)</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">60,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">25 (CLP)</label></td><td id="td7" style="text-align: right; display: none; border: 1px solid; border-color: darkgray"><label class="labelBE2">24 (CLP)</label></td><td id="td8" style="text-align: center; display: none; border: 1px solid; border-color: darkgray"><label class="labelBE2">3,50</label></td><td id="td9" style="text-align: center; display: none; border: 1px solid; border-color: darkgray"><label class="labelBE2">12/08/2018</label></td></tr>';
        }
    }
    else if (document.getElementById("cboSegmento").value == "5") {
        if (document.getElementById("cboTipoProducto").value == "2") {
            document.getElementById("tblTarifado").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">4.501 - 5.000 (USD)</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">50,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">20 (CLP)</label></td><td id="td4" style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">23 (CLP)</label></td><td id="td5" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">2,50</label></td><td id="td6" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">21/05/2017</label></td></tr>';
            document.getElementById("tblTarifado").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">5.001 - 5.500 (USD)</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">60,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">25 (CLP)</label></td><td id="td7" style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">24 (CLP)</label></td><td id="td8" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">3,50</label></td><td id="td9" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">12/08/2018</label></td></tr>';
            document.getElementById("tblTarifado").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">5.501 - 6.000 (USD)</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">70,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">30 (CLP)</label></td><td id="td10" style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">25 (CLP)</label></td><td id="td11" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">4,50</label></td><td id="td12" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">31/12/2019</label></td></tr>';
        } else {
            document.getElementById("tblTarifado").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">4.501 - 5.000 (USD)</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">50,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">20 (CLP)</label></td><td id="td4" style="text-align: right; display: none; border: 1px solid; border-color: darkgray"><label class="labelBE2">23 (CLP)</label></td><td id="td5" style="text-align: center; display: none; border: 1px solid; border-color: darkgray"><label class="labelBE2">2,50</label></td><td id="td6" style="text-align: center; display: none; border: 1px solid; border-color: darkgray"><label class="labelBE2">21/05/2017</label></td></tr>';
            document.getElementById("tblTarifado").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">5.001 - 5.500 (USD)</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">60,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">25 (CLP)</label></td><td id="td7" style="text-align: right; display: none; border: 1px solid; border-color: darkgray"><label class="labelBE2">24 (CLP)</label></td><td id="td8" style="text-align: center; display: none; border: 1px solid; border-color: darkgray"><label class="labelBE2">3,50</label></td><td id="td9" style="text-align: center; display: none; border: 1px solid; border-color: darkgray"><label class="labelBE2">12/08/2018</label></td></tr>';
            document.getElementById("tblTarifado").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">5.501 - 6.000 (USD)</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">70,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">30 (CLP)</label></td><td id="td10" style="text-align: right; display: none; border: 1px solid; border-color: darkgray"><label class="labelBE2">25 (CLP)</label></td><td id="td11" style="text-align: center; display: none; border: 1px solid; border-color: darkgray"><label class="labelBE2">4,50</label></td><td id="td12" style="text-align: center; display: none; border: 1px solid; border-color: darkgray"><label class="labelBE2">31/12/2019</label></td></tr>';
        }
    }

}

function eliminarFila() {
    $('#tblTarifado tr:not(:first)').remove();
}

function llenarCombo() {
    $("#cboSegmentoParam").empty();
    if ($("#cboSegmento").val() == "2") {
        $("#cboSegmentoParam").append('<option value="1" selected="selected">0 - 500</option>');
    }
    if ($("#cboSegmento").val() == "3") {
        $("#cboSegmentoParam").append('<option value="1" selected="selected">1.501 - 2.000</option>');
        $("#cboSegmentoParam").append('<option value="2">2.001 - 2.500</option>');
        $("#cboSegmentoParam").append('<option value="3">2.501 - 3.000</option>');
    }
    if ($("#cboSegmento").val() == "4") {
        $("#cboSegmentoParam").append('<option value="1" selected="selected">3.001 - 3.500</option>');
        $("#cboSegmentoParam").append('<option value="2">3.501 - 4.000</option>');
    }
    if ($("#cboSegmento").val() == "5") {
        $("#cboSegmentoParam").append('<option value="1" selected="selected">4.501 - 5.000</option>');
        $("#cboSegmentoParam").append('<option value="2">5.001 - 5.500</option>');
        $("#cboSegmentoParam").append('<option value="3">5.501 - 6.000</option>');
    }
}

function validaRut(idPage, event) {
    var keycode = event.keyCode;
    if (keycode == '13') {
        if (document.getElementById("txtRut").value != "96599240-9") {
            alert("Rut inválido");
        }
        else {
            cargaIframe(idPage);
        }
    }
}

function validaRutButton(idPage) {
    if (document.getElementById("txtRut").value != "96599240-9") {
        alert("Rut inválido");
    }
    else {
        cargaIframe(idPage);
    }
}

function cargaIframe(idPage) {
    if (idPage == 1) {
        parent.document.getElementById("frmProc").src = "/Home/ComexIIMatrizTarifado";
    }
    if (idPage == 2) {
        document.getElementById("frmProc").src = "/Home/ComexIIConsultaCampañas";
    }
    if (idPage == 3) {
        document.getElementById("frmProc").src = "/Home/ComexIIEstructuraPrecio";
    }
    if (idPage == 4) {
        document.getElementById("frmProc").src = "/Home/ComexIIParametrizacionGastos";
    }
    if (idPage == 5) {
        parent.document.getElementById("frmProc").src = "/Home/ComexIIPreciosEspeciales";
    }
    if (idPage == 6) {
        document.getElementById("frmProc").src = "/Home/ComexIIParametros";
    }
    if (idPage == 7) {
        document.getElementById("frmProc").src = "/Home/ComexIIRutCliente";
    }
    if (idPage == 8) {
        document.getElementById("frmProc").src = "/Home/ComexIIConsultaDetalleCliente";
    }
    if (idPage == 9) {
        document.getElementById("frmProc").src = "/Home/ComexIIConsultaClienteTarifado";
    }
    if (idPage == 10) {
        document.getElementById("frmProc").src = "/Home/ComexIITramosPorSegmento";
    }
    if (idPage == 11) {
        document.getElementById("frmProc").src = "/Home/ComexIIBandejaAutorizaciones";
    }
    if (idPage == 12) {
        document.getElementById("frmProc").src = "/Home/ComexIIMonitoreoCompraDivisa";
    }
    if (idPage == 13) {
        document.getElementById("frmProc").src = "/Home/ComexIIHistoricoCompraDivisa";
    }
    if (idPage == 14) {
        document.getElementById("frmProc").src = "/Home/ComexIIParametroControlCompraDivisa";
    }
    if (idPage == 15) {
        document.getElementById("frmProc").src = "/Home/ComexIIControlTiempoCompraDivisa";
    }
    if (idPage == 16) {
        document.getElementById("frmProc").src = "/Home/ComexIIRutClientePreciosEspeciales";
    }
}

/*
$.datepicker.regional['es'] = {
    closeText: 'Cerrar',
    prevText: '< Ant',
    nextText: 'Sig >',
    currentText: 'Hoy',
    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'Sáb'],
    dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
    weekHeader: 'Sm',
    dateFormat: 'dd/mm/yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
};
$.datepicker.setDefaults($.datepicker.regional['es']);

function showDataPicker(f) {
    $(f).datepicker('show');
}*/

function cargaMenuTabla(idMenu) {
    eliminarFilaMenu();
    if (idMenu == 1) {
        document.getElementById("menu").insertRow(-1).innerHTML = '<tr height="100%"><td width = "12%" height = "100%" class="Titulo2BE" style = "vertical-align: top"><li class="Titulo2BE">Clientes<ul><li class="labelBE2"><a href="#" onclick="cargaIframe(7)">Matriz Tarifado</a></li></ul><ul><li class="labelBE2"><a href="#" onclick="cargaIframe(16)">Precio Especial</a></li></ul></li></td><td width="80%" height="100%"><iframe id="frmProc" name="indice" width="100%" height="100%" frameborder="0" scrolling="si"></iframe></td></tr>';
    }
    else if (idMenu == 2) {
        document.getElementById("menu").insertRow(-1).innerHTML = '<tr height="100%"><td width = "12%" height = "100%" class="Titulo2BE" style = "vertical-align: top"><li class="Titulo2BE">Gestión<ul><li class="labelBE2"><a href="#" onclick="cargaIframe(9)">Consulta de Tarifas</a></li></ul><ul><li class="labelBE2"><a href="#" onclick="cargaIframe(2)">Tarifas Para Campañas</a></li></ul><ul><li class="labelBE2"><a href="#" onclick="cargaIframe(3)">Estructura de Precios</a></li></ul><ul><li class="labelBE2"><a href="#" onclick="cargaIframe(11)">Bandeja de Autorizaciones</a></li></ul><ul><li class="labelBE2"><a href="#" onclick="cargaIframe(12)">Monitoreo Compra Divisa</a></li></ul><ul><li class="labelBE2"><a href="#" onclick="cargaIframe(13)">Histórico Compra Divisa</a></li></ul></li></td><td width="80%" height="100%"><iframe id="frmProc" name="indice" width="100%" height="100%" frameborder="0" scrolling="auto"></iframe></td></tr>';
    }
    else if (idMenu == 3) {
        document.getElementById("menu").insertRow(-1).innerHTML = '<tr height="100%"><td width = "12%" height = "100%" class="Titulo2BE" style = "vertical-align: top"><li class="Titulo2BE">Utilitarios<ul><li class="labelBE2"><a href="#" onclick="cargaIframe(4)">Parametrización Gastos de Envío</a></li></ul><ul><li class="labelBE2"><a href="#" onclick="cargaIframe(6)">Consultas / Modificación de Parametros</a></li></ul><ul><li class="labelBE2"><a href="#" onclick="cargaIframe(10)">Tramos por segmento</a></li></ul><ul><li class="labelBE2"><a href="#" onclick="cargaIframe(14)">Control Compra Divisa</a></li></ul><ul><li class="labelBE2"><a href="#" onclick="cargaIframe(15)">Control Tiempo Compra Divisa</a></li></ul></li></td><td width="80%" height="100%"><iframe id="frmProc" name="indice" width="100%" height="100%" frameborder="0" scrolling="auto"></iframe></td></tr>';
    }
}

function eliminarFilaMenu() {
    $("#menu").empty();
}

function cargaTablaConsulta() {
    $('#tblResultado tr:not(:first)').remove();
    if (document.getElementById("txtRutCliente").value != "" && document.getElementById("txtRutCliente").value == "96599240-9") {
        document.getElementById("tblResultado").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style = "text-align: center; border: 1px solid; border-color: darkgray"><input id="r1" type="radio" name="seleccion"/></td><td style = "text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2"><a href="/Home/ComexIIPreciosEspeciales" onclick="cargaDataPrecioEspecial(1)">96599240-9</a></label></td > <td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Sociedad Importadora Lorden S.A.</label></td> <td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Grandes Empresas</label></td> <td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Hernandez Javier</label></td></tr > ';
    }
    else if (document.getElementById("txtRutCliente").value == "") {
        document.getElementById("tblResultado").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style = "text-align: center; border: 1px solid; border-color: darkgray"><input id="r1" type="radio" name="seleccion"/></td><td style = "text-align: center; border: 1px solid; border-color: darkgray" ><label class="labelBE2"><a href="/Home/ComexIIPreciosEspeciales" onclick="cargaDataPrecioEspecial(1)">96599240-9</a></label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Sociedad Importadora Lorden S.A.</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Grandes Empresas</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Hernandez Javier</label></td></tr>';
        document.getElementById("tblResultado").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style = "text-align: center; border: 1px solid; border-color: darkgray"><input id="r2" type="radio" name="seleccion"/></td><td style = "text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2"><a href="/Home/ComexIIPreciosEspeciales" onclick="cargaDataPrecioEspecial(2)">12345678-9</a></label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Coca-Cola Limitada</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Grandes Empresas</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Fuentes Enrique</label></td></tr>';
        document.getElementById("tblResultado").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style = "text-align: center; border: 1px solid; border-color: darkgray"><input id="r3" type="radio" name="seleccion"/></td><td style = "text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2"><a href="/Home/ComexIIPreciosEspeciales" onclick="cargaDataPrecioEspecial(3)">12345678-1</a></label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Sodimac S.A.</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Grandes Empresas</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Sanchez Sergio</label></td></tr>';
    }
    else {
        alert("Rut ingresado no existe");
        document.getElementById("txtRutCliente").value = "";
    }  
}


////////////////////////////////////
//      Consulta de Tarifas
////////////////////////////////////
function cargaTablaConsultaTarifado() {
    $('#tblResultado tr:not(:first)').remove();
    if (document.getElementById("txtRutCliente").value != "" && document.getElementById("txtRutCliente").value == "96599240-9") {
        //document.getElementById("tblResultado").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style = "text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">96.599.240-9</label></td ><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Sociedad Importadora Lorden S.A.</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Grandes Empresas</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Hernandez Javier</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray;"><a href="/Home/ComexIIMatrizTarifado"><img src="../../Content/Images/lupa2.png" class="icon-det" title="Detalle"></a></td><td style="text-align: center; border: 1px solid; border-color: darkgray;"><a href="/Home/ComexIITarifasCampañas"><img src="../../Content/Images/lupa2.png" class="icon-det" title="Detalle"></a></td><td style="text-align: center; border: 1px solid; border-color: darkgray;"><img  src="../../Content/Images/lupa2.png" class="icon-det-disabled" title="Detalle"></td></tr>';
        document.getElementById("tblResultado").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style = "text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">96.599.240-9</label></td ><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Sociedad Importadora Lorden S.A.</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Grandes Empresas</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Hernandez Javier</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray;"><a href="/Home/ComexIIConsultaPrecios"><img src="../../Content/Images/lupa2.png" class="icon-det"></a></td><td style="text-align: center; border: 1px solid; border-color: darkgray;"><a href="/Home/ComexIIConsultaHistoricoCampañas"><img src="../../Content/Images/lupa2.png" class="icon-det"></a></td><td style="text-align: center; border: 1px solid; border-color: darkgray;"><a href="/Home/ComexIIConsultaHistoricoPreciosEspeciales"><img  src="../../Content/Images/lupa2.png" class="icon-det"></td></tr>';
    }
    else if (document.getElementById("txtRutCliente").value == "") {
        //document.getElementById("tblResultado").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style = "text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">96.599.240-9</label></td ><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Sociedad Importadora Lorden S.A.</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Grandes Empresas</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Hernandez Javier</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray;"><a href="/Home/ComexIIMatrizTarifado"><img src="../../Content/Images/lupa2.png" class="icon-det" title="Detalle"></a></td><td style="text-align: center; border: 1px solid; border-color: darkgray;"><a href="/Home/ComexIITarifasCampañas"><img src="../../Content/Images/lupa2.png" class="icon-det" title="Detalle"></a></td><td style="text-align: center; border: 1px solid; border-color: darkgray;"><img  src="../../Content/Images/lupa2.png" class="icon-det-disabled" title="Detalle"></td></tr>';  
        document.getElementById("tblResultado").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style = "text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">96.599.240-9</label></td ><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Sociedad Importadora Lorden S.A.</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Grandes Empresas</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Hernandez Javier</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray;"><a href="/Home/ComexIIConsultaPrecios"><img src="../../Content/Images/lupa2.png" class="icon-det"></a></td><td style="text-align: center; border: 1px solid; border-color: darkgray;"><a href="/Home/ComexIIConsultaHistoricoCampañas"><img src="../../Content/Images/lupa2.png" class="icon-det"></a></td><td style="text-align: center; border: 1px solid; border-color: darkgray;"><a href="/Home/ComexIIConsultaHistoricoPreciosEspeciales"><img  src="../../Content/Images/lupa2.png" class="icon-det"></td></tr>';  
    }
    else {
        alert("Rut ingresado no existe");
        document.getElementById("txtRutCliente").value = "";
    }
}

function cargaTablaClonar() {
    if (document.getElementById("txtRutCliente").value == "1-9" && document.getElementById("txtRutCliente").value != "") {
        document.getElementById("tblResultado2").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style = "text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">1-9</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">leo messi 10</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Grandes Empresas</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Cristiano Ronaldo</label></td></tr>';
    }else if (document.getElementById("txtRutCliente").value == "") {
        alert("Ingrese rut cliente");
    }else {
        alert("Rut ingresado no existe");
        document.getElementById("txtRutCliente").value = "";
    }
}

function validaEnter(event) {
    var keycode = event.keyCode;
    if (keycode == '13' && document.getElementById("txtRutCliente").value != "") {
        cargaTablaConsulta();
    }
}

function validaEnterTarifado(event) {
    var keycode = event.keyCode;
    if (keycode == '13' && document.getElementById("txtRutCliente").value != "") {
        cargaTablaConsultaTarifado();
    }
}

function validaEnterClonaDatos(event) {
    var keycode = event.keyCode;
    if (keycode == '13' && document.getElementById("txtRutCliente").value != "") {
        cargaTablaClonar();
    }
}

function limpiaConsultaCliente() {
    $('#tblResultado tr:not(:first)').remove();
    document.getElementById("cboGerente").value = 1;
    document.getElementById("cboJefe").value = 1;
    document.getElementById("cboEjecutivo").value = 1;
    document.getElementById("txtRutCliente").value = "";
}

function limpiaConsultaClienteDetalle() {
    $('#tblResultado2 tr:not(:first)').remove();
    document.getElementById("txtRutCliente").value = "";
}

function cargaDataPrecioEspecial(id) {
    SetSession("identificador", id);
}

function demo() {
    var seleccionID = GetSession("identificador")

    if (seleccionID == 1) {
        document.getElementById("lblNombre").innerHTML = "Sociedad Importadora Lorden S.A.";
        document.getElementById("lblSegmento").innerHTML = "Grandes Empresas";
    }
    else if (seleccionID == 2) {
        document.getElementById("lblNombre").innerHTML = "Coca - Cola Limitada";
        document.getElementById("lblSegmento").innerHTML = "Grandes Empresas";
    }
    else if (seleccionID == 3) {
        document.getElementById("lblNombre").innerHTML = "Sodimac S.A.";
        document.getElementById("lblSegmento").innerHTML = "Grandes Empresas";
    } 
}

function demoClonar() {
    var seleccionID = GetSession("identificador")

    if (seleccionID == 1) {
        document.getElementById("tblListaClientes").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style = "text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">96599240-9</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Sociedad Importadora Lorden S.A.</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Grandes Empresas</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Hernandez Javier</label></td></tr>';
    }
    else if (seleccionID == 2) {
        document.getElementById("tblListaClientes").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style = "text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">12345678-9</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Coca-Cola Limitada</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Grandes Empresas</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Fuentes Enrique</label></td></tr>';
    }
    else if (seleccionID == 3) {
        document.getElementById("tblListaClientes").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style = "text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">12345678-1</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Sodimac S.A.</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Grandes Empresas</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Sanchez Sergio</label></td></tr>';
    }
}

function SetSession(name,value) {
    sessionStorage.setItem(name, value);
}

function GetSession(name) {
    var valor
        valor = sessionStorage.getItem(name);
    return valor;
}

function validaSeleccionCliente() {

    if (!document.querySelector('input[name="seleccion"]:checked')) {
        alert('Debe seleccionar un cliente');
    }
    else {
        var id = document.querySelector('input[name="seleccion"]:checked').id;
        window.location.href = '/Home/ComexIIClonaDatos';
        if (id == "r1") {
            cargaDataPrecioEspecial(1);
        }else if (id == "r2") {
            cargaDataPrecioEspecial(2);
        }else if (id == "r3") {
            cargaDataPrecioEspecial(3);
        }
    }
}

function cargaTramosSegmento() {

    $('#tblTramos tr:not(:first)').remove();
    if (document.getElementById("cboSegmento").value == "2") {
        document.getElementById("tblTramos").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style = "text-align: center; border: 1px solid; border-color: darkgray" ></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Corporativo</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">0</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">500</label></td></tr>';
    }
    if (document.getElementById("cboSegmento").value == "3") {
        document.getElementById("tblTramos").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style = "text-align: center; border: 1px solid; border-color: darkgray" ></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">MicroEmpresa</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">501</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">1.000</label></td></tr>';
    }
    if (document.getElementById("cboSegmento").value == "4") {
        document.getElementById("tblTramos").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style = "text-align: center; border: 1px solid; border-color: darkgray" ></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Pequeña Empresa</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">1.001</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">1.500</label></td></tr>';
    }
    if (document.getElementById("cboSegmento").value == "5") {
        document.getElementById("tblTramos").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style = "text-align: center; border: 1px solid; border-color: darkgray" ></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Grandes Empresas</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">1.501</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">2.500</label></td></tr>';
    }
}

////////////////////////////////////
//      Bandeja de Autorización
////////////////////////////////////
function resulTbBandeja() {
    $("#tblBandeja").show();
    var valorEstado = $("#cboEstadoBdj").val();

    $('#tblResulBandeja tr:not(:first)').remove();

    if (valorEstado == "4") {
        document.getElementById("tblResulBandeja").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">JRIVERA6</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Jorge Rivera</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Pendiente de Firma</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">20/02/2020</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Se realiza cambio en campaña Verano 2020</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Nueva Campaña</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray;"><a href="/Home/ComexIITarifasCampañas"><img src="../../Content/Images/lupa2.png" class="icon-det" title="Detalle"></a></td></tr>';
        document.getElementById("tblResulBandeja").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">JRIVERA6</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Jorge Rivera</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Rechazado</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">19/02/2020</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Se ingresa Nuevo tramo para segmento Micro</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Cambio de Precio en Tramos</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray;"><a href="/Home/ComexIITramosPorSegmento"><img src="../../Content/Images/lupa2.png" class="icon-det" title="Detalle"></a></td></tr> ';
        document.getElementById("tblResulBandeja").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">EFUENTE4</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Enrique Fuentes</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Pendiente de Firma</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">18/02/2020</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Se ingresa Nuevo tramo para segmento Grandes Empresas</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Cambio de Precio en Tramos</td><td style="text-align: center; border: 1px solid; border-color: darkgray; "><a href="/Home/ComexIITramosPorSegmento"><img src="../../Content/Images/lupa2.png" class="icon-det" title="Detalle"></a></td></tr>';
        document.getElementById("tblResulBandeja").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">EFUENTE4</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Enrique Fuentes</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Autorizado</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">18/02/2020</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Se ingresa Precio Especial para el cliente 1-9 del segmento Pequeña</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Precios Especiales</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; "><a href="/Home/ComexIIPreciosEspeciales"><img src="../../Content/Images/lupa2.png" class="icon-det" title="Detalle"></a></td></tr>';
    }
    else if (valorEstado == "1") {
        document.getElementById("tblResulBandeja").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">JRIVERA6</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Jorge Rivera</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Pendiente de Firma</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">20/02/2020</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Se realiza cambio en campaña Verano 2020</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Nueva Campaña</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray;"><a href="/Home/ComexIITarifasCampañas"><img src="../../Content/Images/lupa2.png" class="icon-det" title="Detalle"></a></td></tr>';
        document.getElementById("tblResulBandeja").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">EFUENTE4</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Enrique Fuentes</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Pendiente de Firma</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">18/02/2020</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Se ingresa Nuevo tramo para segmento Grandes Empresas</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Cambio de Precio en Tramos</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray;"><a href="/Home/ComexIITramosPorSegmento"><img src="../../Content/Images/lupa2.png" class="icon-det" title="Detalle"></a></td></tr>';
    }
    else if (valorEstado == "2") {
        document.getElementById("tblResulBandeja").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">JRIVERA</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Jorge Rivera</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Rechazado</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">19/02/2020</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Se ingresa Nuevo tramo para segmento Micro</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Cambio de Precio en Tramos</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray;"><a href="/Home/ComexIITramosPorSegmento"><img src="../../Content/Images/lupa2.png" class="icon-det" title="Detalle"></a></td></tr> ';
    }
    else if (valorEstado == "3") {
        document.getElementById("tblResulBandeja").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">EFUENTE4</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Enrique Fuentes</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Autorizado</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">18/02/2020</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Se ingresa Precio Especial para el cliente 1-9 del segmento Pequeña</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Precios Especiales</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; "><a href="/Home/ComexIIPreciosEspeciales"><img src="../../Content/Images/lupa2.png" class="icon-det" title="Detalle"></a></td></tr>';
    }
}

////////////////////////////////////
//    Fin de Bandeja
////////////////////////////////////

function cargaGrillaDinamica() {

    $('#tblTarifadoData').empty();

    if (document.getElementById("cboTipoProducto").value == "1") {
        document.getElementById("tblTarifadoData").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: #FF9D25" colspan="6"><label class="cabeceraBE2">ODP al Exterior (Fecha Vigencia Desde: 01-04-2020 - Hasta: 01-05-2020)</label></td></tr>';
        document.getElementById("tblTarifadoData").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Monto Transado</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Costo SWIFT</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Comisión</label></td><td id="td1" style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Comisión Prorroga</label></td><td id="td2" style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Spread Ejecutivo (%)</label></td><td id="td3" style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Fecha Vencimiento Spread Ejecutivo</label></td></tr>';
        document.getElementById("tblTarifadoData").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">0 - 500 (USD)</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">25,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">20 (CLP)</label></td><td id="td4" style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td><td id="td5" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td><td id="td6" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td></tr>';
        document.getElementById("tblTarifadoData").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">501 - 1,000 (USD)</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">35,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">25 (CLP)</label></td><td id="td7" style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td><td id="td8" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td><td id="td9" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td></tr>';
        document.getElementById("tblTarifadoData").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">1,001 - 1,500 (USD)</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">45,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">30 (CLP)</label></td><td id="td10" style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td><td id="td11" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td><td id="td12" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td></tr>';
    }

    if (document.getElementById("cboTipoProducto").value == "2") {
        document.getElementById("tblTarifadoData").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: #FF9D25" colspan="6"><label class="cabeceraBE2">Financiamiento Contado (Fecha Vigencia Desde: 02-05-2020 - Hasta: 01-06-2020)</label></td></tr>';
        document.getElementById("tblTarifadoData").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Monto Transado</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Costo SWIFT</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Comisión</label></td><td id="td1" style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Comisión Prorroga</label></td><td id="td2" style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Spread Ejecutivo (%)</label></td><td id="td3" style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Fecha Vencimiento Spread Ejecutivo</label></td></tr>';
        document.getElementById("tblTarifadoData").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">0 - 500 (USD)</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">50,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">35 (CLP)</label></td><td id="td4" style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">23 (CLP)</label></td><td id="td5" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">2,50</label></td><td id="td6" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">21/05/2017</label></td></tr>';
        document.getElementById("tblTarifadoData").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">501 - 1,000 (USD)</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">60,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">40 (CLP)</label></td><td id="td7" style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">24 (CLP)</label></td><td id="td8" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">3,50</label></td><td id="td9" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">12/08/2018</label></td></tr>';
        document.getElementById("tblTarifadoData").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">1,001 - 1,500 (USD)</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">70,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">45 (CLP)</label></td><td id="td10" style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">25 (CLP)</label></td><td id="td11" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">4,50</label></td><td id="td12" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">31/12/2019</label></td></tr>';
        document.getElementById("tblTarifadoData").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">1,501 - 2,000 (USD)</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">80,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">55 (CLP)</label></td><td id="td10" style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">36 (CLP)</label></td><td id="td11" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">4,50</label></td><td id="td12" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">31/12/2019</label></td></tr>';
        document.getElementById("tblTarifadoData").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">2,001 - 2,500 (USD)</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">90,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">65 (CLP)</label></td><td id="td10" style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">40 (CLP)</label></td><td id="td11" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">4,50</label></td><td id="td12" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">31/12/2019</label></td></tr>';
    }

    if (document.getElementById("cboTipoProducto").value == "3") {
        document.getElementById("tblTarifadoData").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: #FF9D25" colspan="6"><label class="cabeceraBE2">Otro Financiamiento (Fecha Vigencia Desde: 02-06-2020 - Hasta: 01-06-2020)</label></td></tr>';
        document.getElementById("tblTarifadoData").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Monto Transado</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Costo SWIFT</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Comisión</label></td><td id="td1" style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Comisión Prorroga</label></td><td id="td2" style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Spread Ejecutivo (%)</label></td><td id="td3" style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Fecha Vencimiento Spread Ejecutivo</label></td></tr>';
        document.getElementById("tblTarifadoData").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">0 - 500 (USD)</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">90,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">50 (CLP)</label></td><td id="td4" style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td><td id="td5" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td><td id="td6" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td></tr>';
        document.getElementById("tblTarifadoData").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">501 - 1,000 (USD)</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">95,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">55 (CLP)</label></td><td id="td7" style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td><td id="td8" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td><td id="td9" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td></tr>';
        document.getElementById("tblTarifadoData").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">1,001 - 1,500 (USD)</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">100,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">80 (CLP)</label></td><td id="td10" style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td><td id="td11" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td><td id="td12" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td></tr>';
        document.getElementById("tblTarifadoData").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">1,501 - 2,000 (USD)</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">105,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">90 (CLP)</label></td><td id="td10" style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td><td id="td11" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td><td id="td12" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td></tr>';
    }

    if (document.getElementById("cboTipoProducto").value == "4") {

        document.getElementById("tblTarifadoData").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: #FF9D25" colspan="6"><label class="cabeceraBE2">ODP al Exterior (Fecha Vigencia Desde: 01-04-2020 - Hasta: 01-05-2020)</label></td></tr>';
        document.getElementById("tblTarifadoData").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Monto Transado</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Costo SWIFT</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Comisión</label></td><td id="td1" style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Comisión Prorroga</label></td><td id="td2" style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Spread Ejecutivo (%)</label></td><td id="td3" style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Fecha Vencimiento Spread Ejecutivo</label></td></tr>';
        document.getElementById("tblTarifadoData").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">0 - 500 (USD)</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">25,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">20 (CLP)</label></td><td id="td4" style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td><td id="td5" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td><td id="td6" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td></tr>';
        document.getElementById("tblTarifadoData").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">501 - 1,000 (USD)</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">35,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">25 (CLP)</label></td><td id="td7" style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td><td id="td8" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td><td id="td9" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td></tr>';
        document.getElementById("tblTarifadoData").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">1,001 - 1,500 (USD)</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">45,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">30 (CLP)</label></td><td id="td10" style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td><td id="td11" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td><td id="td12" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td></tr>';
        document.getElementById("tblTarifadoData").insertRow(-1).innerHTML = '<tr><td>&nbsp;</td></tr>';

        document.getElementById("tblTarifadoData").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: #FF9D25" colspan="6"><label class="cabeceraBE2">Financiamiento Contado (Fecha Vigencia Desde: 02-05-2020 - Hasta: 01-06-2020)</label></td></tr>';
        document.getElementById("tblTarifadoData").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Monto Transado</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Costo SWIFT</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Comisión</label></td><td id="td1" style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Comisión Prorroga</label></td><td id="td2" style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Spread Ejecutivo (%)</label></td><td id="td3" style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Fecha Vencimiento Spread Ejecutivo</label></td></tr>';
        document.getElementById("tblTarifadoData").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">0 - 500 (USD)</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">50,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">35 (CLP)</label></td><td id="td4" style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">23 (CLP)</label></td><td id="td5" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">2,50</label></td><td id="td6" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">21/05/2017</label></td></tr>';
        document.getElementById("tblTarifadoData").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">501 - 1,000 (USD)</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">60,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">40 (CLP)</label></td><td id="td7" style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">24 (CLP)</label></td><td id="td8" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">3,50</label></td><td id="td9" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">12/08/2018</label></td></tr>';
        document.getElementById("tblTarifadoData").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">1,001 - 1,500 (USD)</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">70,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">45 (CLP)</label></td><td id="td10" style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">25 (CLP)</label></td><td id="td11" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">4,50</label></td><td id="td12" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">31/12/2019</label></td></tr>';
        document.getElementById("tblTarifadoData").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">1,501 - 2,000 (USD)</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">80,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">55 (CLP)</label></td><td id="td10" style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">36 (CLP)</label></td><td id="td11" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">4,50</label></td><td id="td12" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">31/12/2019</label></td></tr>';
        document.getElementById("tblTarifadoData").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">2,001 - 2,500 (USD)</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">90,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">65 (CLP)</label></td><td id="td10" style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">40 (CLP)</label></td><td id="td11" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">4,50</label></td><td id="td12" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">31/12/2019</label></td></tr>';
        document.getElementById("tblTarifadoData").insertRow(-1).innerHTML = '<tr><td>&nbsp;</td></tr>';

        document.getElementById("tblTarifadoData").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: #FF9D25" colspan="6"><label class="cabeceraBE2">Otro Financiamiento (Fecha Vigencia Desde: 02-06-2020 - Hasta: 01-06-2020)</label></td></tr>';
        document.getElementById("tblTarifadoData").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Monto Transado</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Costo SWIFT</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Comisión</label></td><td id="td1" style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Comisión Prorroga</label></td><td id="td2" style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Spread Ejecutivo (%)</label></td><td id="td3" style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Fecha Vencimiento Spread Ejecutivo</label></td></tr>';
        document.getElementById("tblTarifadoData").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">0 - 500 (USD)</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">90,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">50 (CLP)</label></td><td id="td4" style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td><td id="td5" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td><td id="td6" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td></tr>';
        document.getElementById("tblTarifadoData").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">501 - 1,000 (USD)</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">95,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">55 (CLP)</label></td><td id="td7" style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td><td id="td8" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td><td id="td9" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td></tr>';
        document.getElementById("tblTarifadoData").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">1,001 - 1,500 (USD)</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">100,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">80 (CLP)</label></td><td id="td10" style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td><td id="td11" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td><td id="td12" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td></tr>';
        document.getElementById("tblTarifadoData").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">1,501 - 2,000 (USD)</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">105,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">90 (CLP)</label></td><td id="td10" style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td><td id="td11" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td><td id="td12" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td></tr>';

    }

}

////////////////////////////////////
//      Listado de Campañas
////////////////////////////////////

function cargaListadoCampañas() {

    //$('#tblListadoCampañas').empty();
    document.getElementById("tblListadoCampañas").insertRow(-1).innerHTML = '<tr style=" order: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray; height:40px;"><label class="labelBE2">0002</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Campaña Todos en Casa 2020</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Micro Empresas</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">01/04/2020</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">01/05/2020</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">JORGE RIVERA</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">VIGENTE</label></td></tr><td style="text-align: center; border: 1px solid; border-color: darkgray; "><a href="/Home/ComexIITarifasCampañas"><img src="../../Content/Images/lupa2.png" class="icon-det" title="Ver Detalle Campaña"></a></td></tr><td style="text-align: center; border: 1px solid; border-color: darkgray; "><a href="#" onclick="msgCancelaCampaña();"><img src="../../Content/Images/cancel2.png" class="icon-det"></a></td><td style="text-align: center; border: 1px solid; border-color: darkgray; "><a href="#" ><img src="../../Content/Images/delete2.png" class="icon-det-disabled"></a></td></tr>';
    document.getElementById("tblListadoCampañas").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray; height:40px;"><label class="labelBE2">0001</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Campaña Verano 2020</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Pequeñas Empresas</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">19/02/2020</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">19/03/2020</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">ENRIQUE FUENTES</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">CADUCADA</label></td></tr><td style="text-align: center; border: 1px solid; border-color: darkgray; "><a href="/Home/ComexIITarifasCampañas"><img src="../../Content/Images/lupa2.png" class="icon-det" title="Ver Detalle Campaña"></a></td></tr><td style="text-align: center; border: 1px solid; border-color: darkgray; "><a href="#"><img src="../../Content/Images/cancel2.png" class="icon-det-disabled"></a></td><td style="text-align: center; border: 1px solid; border-color: darkgray; "><a href="#"><img src="../../Content/Images/delete2.png" class="icon-det-disabled"></a></td></tr>';
    document.getElementById("tblListadoCampañas").insertRow(-1).innerHTML = '<tr style=" order: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray; height:40px;"><label class="labelBE2">0003</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Campaña Vuelta a Clases 2020</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Pequeñas Empresas</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">20/03/2020</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">20/04/2020</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">ENRIQUE FUENTES</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">CANCELADA</label></td></tr><td style="text-align: center; border: 1px solid; border-color: darkgray; "><a href="/Home/ComexIITarifasCampañas"><img src="../../Content/Images/lupa2.png" class="icon-det" title="Ver Detalle Campaña"></a></td></tr><td style="text-align: center; border: 1px solid; border-color: darkgray; "><a href="#"><img src="../../Content/Images/cancel2.png" class="icon-det-disabled"></a></td><td style="text-align: center; border: 1px solid; border-color: darkgray; "><a href="#"><img src="../../Content/Images/delete2.png" class="icon-det-disabled"></a></td></tr>';
    document.getElementById("tblListadoCampañas").insertRow(-1).innerHTML = '<tr style=" order: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray; height:40px;"><label class="labelBE2">0004</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Campaña Solidaria 2020</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Micro Empresas</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">01/04/2020</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">01/05/2020</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">JORGE RIVERA</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">ELIMINADA</label></td></tr><td style="text-align: center; border: 1px solid; border-color: darkgray; "><a href="/Home/ComexIITarifasCampañas"><img src="../../Content/Images/lupa2.png" class="icon-det" title="Ver Detalle Campaña"></a></td></tr><td style="text-align: center; border: 1px solid; border-color: darkgray; "><a href="#" ><img src="../../Content/Images/cancel2.png" class="icon-det-disabled"></a></td><td style="text-align: center; border: 1px solid; border-color: darkgray; "><a href="#"><img src="../../Content/Images/delete2.png" class="icon-det-disabled"></a></td></tr>';
    document.getElementById("tblListadoCampañas").insertRow(-1).innerHTML = '<tr style=" order: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray; height:40px;"><label class="labelBE2">0005</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Campaña Fiestas Patrias 2020</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Grandes Empresas</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">05/09/2020</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">05/10/2020</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">SERGIO SANCHEZ</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">PROGRAMADA</label></td></tr><td style="text-align: center; border: 1px solid; border-color: darkgray; "><a href="/Home/ComexIITarifasCampañas"><img src="../../Content/Images/lupa2.png" class="icon-det" title="Ver Detalle Campaña"></a></td></tr><td style="text-align: center; border: 1px solid; border-color: darkgray; "><a href="#" ><img src="../../Content/Images/cancel2.png" class="icon-det-disabled"></a></td><td style="text-align: center; border: 1px solid; border-color: darkgray; "><a href="#" onclick="msgEliminaCampaña();"><img src="../../Content/Images/delete2.png" class="icon-det"></a></td></tr>';
    
}

function nuevaCampaña() {
    window.location.href = '/Home/ComexIINuevaCampaña';
}

////////////////////////////////////
//    Fin de Listado Campañas
////////////////////////////////////



//////////////////////////////////////////
//habilita campos estructura precios
//////////////////////////////////////////
function habilitaDeshabilitaCamposEstructura(idCampo, idOpcion) {

    switch (idCampo) {
        case 1:
            if (idOpcion == 1) {
                document.getElementById("in1").disabled = false; document.getElementById("in2").disabled = false; document.getElementById("in3").disabled = false;
                document.getElementById("in4").disabled = false; document.getElementById("in5").disabled = false; document.getElementById("in6").disabled = false;
            }
            else {
                //var fec = new Date();
                //document.getElementById("fein1").innerHTML = fec.getDate() + '/' + fec.getMonth + '/' + fec.getFullYear();
                //document.getElementById("hoin1").innerHTML = fec.getHours();
                //document.getElementById("feou1").disabled = true
                //document.getElementById("hoou1").disabled = true

                document.getElementById("in1").disabled = true; document.getElementById("in2").disabled = true; document.getElementById("in3").disabled = true;
                document.getElementById("in4").disabled = true; document.getElementById("in5").disabled = true; document.getElementById("in6").disabled = true;
                alert("Datos guardados correctamente");
            }
            break;
        case 2:
            if (idOpcion == 1) {
                document.getElementById("in7").disabled = false; document.getElementById("in8").disabled = false; document.getElementById("in9").disabled = false;
                document.getElementById("in10").disabled = false; document.getElementById("in11").disabled = false; document.getElementById("in12").disabled = false;
                document.getElementById("in13").disabled = false; document.getElementById("in14").disabled = false;
            }
            else {
                document.getElementById("in7").disabled = true; document.getElementById("in8").disabled = true; document.getElementById("in9").disabled = true;
                document.getElementById("in10").disabled = true; document.getElementById("in11").disabled = true; document.getElementById("in12").disabled = true;
                document.getElementById("in13").disabled = true; document.getElementById("in14").disabled = true;
                alert("Datos guardados correctamente");
            }
            break;
        case 3:
            if (idOpcion == 1) {
                document.getElementById("in15").disabled = false; document.getElementById("in16").disabled = false; document.getElementById("in17").disabled = false;
                document.getElementById("in18").disabled = false; document.getElementById("in19").disabled = false; document.getElementById("in20").disabled = false;
            }
            else {
                document.getElementById("in15").disabled = true; document.getElementById("in16").disabled = true; document.getElementById("in17").disabled = true;
                document.getElementById("in18").disabled = true; document.getElementById("in19").disabled = true; document.getElementById("in20").disabled = true;
                alert("Datos guardados correctamente");
            }
            break;
        case 4:
            if (idOpcion == 1) {
                document.getElementById("in21").disabled = false; document.getElementById("in22").disabled = false; document.getElementById("in23").disabled = false;
                document.getElementById("in24").disabled = false; document.getElementById("in25").disabled = false; document.getElementById("in26").disabled = false;
            }
            else {
                document.getElementById("in21").disabled = true; document.getElementById("in22").disabled = true; document.getElementById("in23").disabled = true;
                document.getElementById("in24").disabled = true; document.getElementById("in25").disabled = true; document.getElementById("in26").disabled = true;
                alert("Datos guardados correctamente");
            }
            break;
        case 5:
            if (idOpcion == 1) {
                document.getElementById("in27").disabled = false; document.getElementById("in28").disabled = false; document.getElementById("in29").disabled = false;
                document.getElementById("in30").disabled = false; document.getElementById("in31").disabled = false; document.getElementById("in32").disabled = false;
            }
            else {
                document.getElementById("in27").disabled = true; document.getElementById("in28").disabled = true; document.getElementById("in29").disabled = true;
                document.getElementById("in30").disabled = true; document.getElementById("in31").disabled = true; document.getElementById("in32").disabled = true;
                alert("Datos guardados correctamente");
            }
            break;
        case 6:
            if (idOpcion == 1) {
                document.getElementById("in33").disabled = false; document.getElementById("in34").disabled = false; document.getElementById("in35").disabled = false;
                document.getElementById("in36").disabled = false; document.getElementById("in37").disabled = false; document.getElementById("in38").disabled = false;
            }
            else {
                document.getElementById("in33").disabled = true; document.getElementById("in34").disabled = true; document.getElementById("in35").disabled = true;
                document.getElementById("in36").disabled = true; document.getElementById("in37").disabled = true; document.getElementById("in38").disabled = true;
                alert("Datos guardados correctamente");
            }
            break;
        case 7:
            if (idOpcion == 1) {
                document.getElementById("in39").disabled = false; document.getElementById("in40").disabled = false; document.getElementById("in41").disabled = false;
                document.getElementById("in42").disabled = false; document.getElementById("in43").disabled = false; document.getElementById("in44").disabled = false;
            }
            else {
                document.getElementById("in39").disabled = true; document.getElementById("in40").disabled = true; document.getElementById("in41").disabled = true;
                document.getElementById("in42").disabled = true; document.getElementById("in43").disabled = true; document.getElementById("in44").disabled = true;
                alert("Datos guardados correctamente");
            }
            break;
    }

}
////////////////////////////////////
//    Consulta Precios
////////////////////////////////////
function consultaPrecios() {

    $('#lblNoPreciosTC').show();

    document.getElementById("tblPreciosPE").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width: 19%;"><label class="labelBE2">Tipo Producto</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width: 13%;"><label class="labelBE2">Costo BEN</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width: 13%;"><label class="labelBE2">Costo OUR</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width: 13%;"><label class="labelBE2">Costo OUR Garantizado</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width: 11%;"><label class="labelBE2">Comisión</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width: 11%;"><label class="labelBE2">Comisión Prorroga</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width: 10%;"><label class="labelBE2">Spread Ejecutivo (%)</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width: 10%;"><label class="labelBE2">Fecha Vencimiento Spread Ejecutivo</label></td></tr>';
    document.getElementById("tblPreciosPE").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">ODP al Exterior</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">0,00  (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">25,00  (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">25,00  (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">20 (CLP)</label></td><td id="td4" style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td><td id="td5" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td><td id="td6" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td></tr>';
    document.getElementById("tblPreciosPE").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Financiamiento Contado</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">0,00  (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">30,00  (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">30,00  (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">20 (CLP)</label></td><td id="td4" style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">23 (CLP)</label></td><td id="td5" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">2,50</label></td><td id="td6" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">21/05/2017</label></td></tr>';
    document.getElementById("tblPreciosPE").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Otro Financiamiento</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">0,00  (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">35,00  (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">35,00  (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">20 (CLP)</label></td><td id="td4" style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td><td id="td5" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td><td id="td6" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td></tr>';
    
    document.getElementById("tblPreciosMT").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: #FF9D25" colspan="5"><label class="cabeceraBE2">ODP al Exterior   (Fecha Vigencia Desde: 02-05-2020 - Hasta: 01-06-2020)</label></td></tr>';
    document.getElementById("tblPreciosMT").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width: 15%;"><label class="labelBE2">Tramo</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width: 12%;"><label class="labelBE2">Costo BEN</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width: 12%;"><label class="labelBE2">Costo OUR</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width: 12%;"><label class="labelBE2">Costo OUR Garantizado</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width: 12%;"><label class="labelBE2">Comisión</label></td>';
    document.getElementById("tblPreciosMT").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">4.501 - 5.000 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">0,00  (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">25,00  (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">25,00  (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">20 (CLP)</label>';
    document.getElementById("tblPreciosMT").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">5.001 - 5.500 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">0,00  (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">30,00  (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">30,00  (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">25 (CLP)</label>';
    document.getElementById("tblPreciosMT").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">5.501 - 6.000 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">0,00  (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">35,00  (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">35,00  (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">30 (CLP)</label>';
    document.getElementById("tblPreciosMT").insertRow(-1).innerHTML = '<tr><td></td></tr>';
    document.getElementById("tblPreciosMT").insertRow(-1).innerHTML = '<tr><td></td></tr>';

    document.getElementById("tblPreciosMT").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: #FF9D25" colspan="8"><label class="cabeceraBE2">Financiamiento Contado   (Fecha Vigencia Desde: 02-05-2020 - Hasta: 01-06-2020)</label></td></tr>';
    document.getElementById("tblPreciosMT").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width: 15%;"><label class="labelBE2">Tramo</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width: 12%;"><label class="labelBE2">Costo BEN</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width: 12%;"><label class="labelBE2">Costo OUR</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width: 12%;"><label class="labelBE2">Costo OUR Garantizado</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width: 12%;"><label class="labelBE2">Comisión</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width: 12%;"><label class="labelBE2">Comisión Prorroga</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width: 11%;"><label class="labelBE2">Spread Ejecutivo (%)</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width: 14%;"><label class="labelBE2">Fecha Vencimiento Spread Ejecutivo</label></td></tr>';
    document.getElementById("tblPreciosMT").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">4.501 - 5.000 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">0,00  (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">25,00  (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">25,00  (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">20 (CLP)</label></td><td id="td4" style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">23 (CLP)</label></td><td id="td5" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">2,50</label></td><td id="td6" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">21/05/2017</label></td></tr>';
    document.getElementById("tblPreciosMT").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">5.001 - 5.500 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">0,00  (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">30,00  (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">30,00  (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">25 (CLP)</label></td><td id="td7" style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">24 (CLP)</label></td><td id="td8" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">3,50</label></td><td id="td9" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">12/08/2018</label></td></tr>';
    document.getElementById("tblPreciosMT").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">5.501 - 6.000 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">0,00  (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">35,00  (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">35,00  (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">30 (CLP)</label></td><td id="td10" style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">25 (CLP)</label></td><td id="td11" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">4,50</label></td><td id="td12" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">31/12/2019</label></td></tr>';
    document.getElementById("tblPreciosMT").insertRow(-1).innerHTML = '<tr><td></td></tr>';
    document.getElementById("tblPreciosMT").insertRow(-1).innerHTML = '<tr><td></td></tr>';

    document.getElementById("tblPreciosMT").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: #FF9D25" colspan="5"><label class="cabeceraBE2">Otro Financiamiento  (Fecha Vigencia Desde: 02-05-2020 - Hasta: 01-06-2020)</label></td></tr>';
    document.getElementById("tblPreciosMT").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width: 15%;"><label class="labelBE2">Tramo</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width: 12%;"><label class="labelBE2">Costo BEN</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width: 12%;"><label class="labelBE2">Costo OUR</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width: 12%;"><label class="labelBE2">Costo OUR Garantizado</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray; width: 12%;"><label class="labelBE2">Comisión</label></td>';
    document.getElementById("tblPreciosMT").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">4.501 - 5.000 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">0,00  (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">25,00  (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">25,00  (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">20 (CLP)</label></td>';
    document.getElementById("tblPreciosMT").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">5.001 - 5.500 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">0,00  (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">30,00  (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">30,00  (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">25 (CLP)</label></td>';
    document.getElementById("tblPreciosMT").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">5.501 - 6.000 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">0,00  (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">35,00  (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">35,00  (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">30 (CLP)</label></td>';

}
////////////////////////////////////
//    Fin Consulta Precios
////////////////////////////////////


////////////////////////////////////
//    Historico de Campañas
////////////////////////////////////

function cargaHistoricoCampañas() {

    //$('#tblListadoCampañas').empty();    
    //document.getElementById("tblListadoCampañas").insertRow(-1).innerHTML = '<tr style=" order: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">0004</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Campaña Solidaria 2020</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Micro Empresas</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">01/04/2020</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">01/05/2020</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">JORGE RIVERA</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">VIGENTE</label></td></tr><td style="text-align: center; border: 1px solid; border-color: darkgray; "><a href="/Home/ComexIITarifasCampañas"><img src="../../Content/Images/lupa2.png" class="icon-det" title="Ver Detalle Campaña"></a></td></tr>';
    document.getElementById("tblHistCampañas").insertRow(-1).innerHTML = '<tr style=" order: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">0005</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Campaña Fiestas Patrias 2020</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Grandes Empresas</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">05/09/2020</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">05/10/2020</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">SERGIO SANCHEZ</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">PROGRAMADA</label></td></tr><td style="text-align: center; border: 1px solid; border-color: darkgray; "><a href="/Home/ComexIITarifasCampañasHistorica"><img src="../../Content/Images/lupa2.png" class="icon-det" title="Ver Detalle Campaña"></a></td></tr>';

}

function cambiaGrillaHistCamp() {
    eliminarFila();  

    if (document.getElementById("cboTipoProducto").value == "1") {
        document.getElementById("tblTarifado").style.width = "40%";
        $("#td1").hide();
        $("#td2").hide();
        $("#td3").hide();
        document.getElementById("tblTarifado").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">1.501 - 2.500 (USD)</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">50,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">20 (CLP)</label></td><td id="td4" style="text-align: right; display: none; border: 1px solid; border-color: darkgray"><label class="labelBE2">23 (USD)</label></td><td id="td5" style="text-align: center; display: none; border: 1px solid; border-color: darkgray"><label class="labelBE2">2,50</label></td><td id="td6" style="text-align: center; display: none; border: 1px solid; border-color: darkgray"><label class="labelBE2">21/05/2017</label></td></tr>';
        document.getElementById("tblTarifado").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">2.501 - 3.000 (USD)</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">60,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">25 (CLP)</label></td><td id="td7" style="text-align: right; display: none; border: 1px solid; border-color: darkgray"><label class="labelBE2">24,00 (USD)</label></td><td id="td8" style="text-align: center; display: none; border: 1px solid; border-color: darkgray"><label class="labelBE2">3,50</label></td><td id="td9" style="text-align: center; display: none; border: 1px solid; border-color: darkgray"><label class="labelBE2">12/08/2018</label></td></tr>';
        document.getElementById("tblTarifado").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">3.001 - 3.500 (USD)</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">70,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">30 (CLP)</label></td><td id="td10" style="text-align: right; display: none; border: 1px solid; border-color: darkgray"><label class="labelBE2">25,00 (USD)</label></td><td id="td11" style="text-align: center; display: none; border: 1px solid; border-color: darkgray"><label class="labelBE2">4,50</label></td><td id="td12" style="text-align: center; display: none; border: 1px solid; border-color: darkgray"><label class="labelBE2">31/12/2019</label></td></tr>';
    }
    else if (document.getElementById("cboTipoProducto").value == "2") {
        document.getElementById("tblTarifado").style.width = "70%";
        $("#td1").show();
        $("#td2").show();
        $("#td3").show();
        document.getElementById("tblTarifado").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">5.001 - 5.500 (USD)</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">50,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">20 (CLP)</label></td><td id="td4" style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">23 (CLP)</label></td><td id="td5" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">2,50</label></td><td id="td6" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">21/05/2017</label></td></tr>';
        document.getElementById("tblTarifado").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">5.501 - 6.000 (USD)</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">60,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">25 (CLP)</label></td><td id="td7" style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">24 (CLP)</label></td><td id="td8" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">3,50</label></td><td id="td9" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">12/08/2018</label></td></tr>';
        document.getElementById("tblTarifado").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">6.001 - 6.500 (USD)</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">70,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">30 (CLP)</label></td><td id="td10" style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">25 (CLP)</label></td><td id="td11" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">4,50</label></td><td id="td12" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">31/12/2019</label></td></tr>';
    }
    else {
        document.getElementById("tblTarifado").style.width = "40%";
        $("#td1").hide();
        $("#td2").hide();
        $("#td3").hide();
        document.getElementById("tblTarifado").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">3.501 - 4.000 (USD)</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">50,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">20 (CLP)</label></td><td id="td4" style="text-align: right; display: none; border: 1px solid; border-color: darkgray"><label class="labelBE2">23 (USD)</label></td><td id="td5" style="text-align: center; display: none; border: 1px solid; border-color: darkgray"><label class="labelBE2">2,50</label></td><td id="td6" style="text-align: center; display: none; border: 1px solid; border-color: darkgray"><label class="labelBE2">21/05/2017</label></td></tr>';
        document.getElementById("tblTarifado").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">4.001 - 4.500 (USD)</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">60,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">25 (CLP)</label></td><td id="td7" style="text-align: right; display: none; border: 1px solid; border-color: darkgray"><label class="labelBE2">24,00 (USD)</label></td><td id="td8" style="text-align: center; display: none; border: 1px solid; border-color: darkgray"><label class="labelBE2">3,50</label></td><td id="td9" style="text-align: center; display: none; border: 1px solid; border-color: darkgray"><label class="labelBE2">12/08/2018</label></td></tr>';
        document.getElementById("tblTarifado").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">4.501 - 5.000 (USD)</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">70,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">30 (CLP)</label></td><td id="td10" style="text-align: right; display: none; border: 1px solid; border-color: darkgray"><label class="labelBE2">25,00 (USD)</label></td><td id="td11" style="text-align: center; display: none; border: 1px solid; border-color: darkgray"><label class="labelBE2">4,50</label></td><td id="td12" style="text-align: center; display: none; border: 1px solid; border-color: darkgray"><label class="labelBE2">31/12/2019</label></td></tr>';
    }
}
////////////////////////////////////
//    Fin Historico de Campañas
////////////////////////////////////



////////////////////////////////////////////////////
//    Historico de Precios Especiales
////////////////////////////////////////////////////

function cargaHistoricoPE() {

    document.getElementById("tblHistoricoPE").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">ODP al Exterior</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">50,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">20 (CLP)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">02/03/2020</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">02/03/2021</label></td></tr>';
    document.getElementById("tblHistoricoPE").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Financiamiento Contado</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">50,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">20 (CLP)</label></td><td id="td4" style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">23 (CLP)</label></td><td id="td5" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">2,50</label></td><td id="td6" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">21/05/2017</label></td></tr><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">02/03/2020</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">02/03/2021</label></td></tr>';
    document.getElementById("tblHistoricoPE").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">ODP al Exterior</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">50,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">20 (CLP)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">02/02/2019</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">02/02/2020</label></td></tr>';
    document.getElementById("tblHistoricoPE").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Financiamiento Contado</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">50,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">20 (CLP)</label></td><td id="td4" style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">23 (CLP)</label></td><td id="td5" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">2,50</label></td><td id="td6" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">21/05/2017</label></td></tr><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">02/02/2019</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">02/02/2020</label></td></tr>';
    document.getElementById("tblHistoricoPE").insertRow(-1).innerHTML = '<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">Otro Financiamiento</label></td ><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">50,00 (USD)</label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">20 (CLP)</label></td><td id="td4" style="text-align: right; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td><td id="td5" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td><td id="td6" style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">--</label></td></tr><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">02/02/2019</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray"><label class="labelBE2">02/02/2020</label></td></tr>';
}
