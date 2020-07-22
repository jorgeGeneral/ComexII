function cargaTramosSegmento() {

    $('#tblTramos').empty();
    if ($('#cboSegmento').val() == "0") {
        $('#tblTramos').append('<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: #FF9D25" colspan="2"><label class="cabeceraBE2">Microempresas</label></td></tr>');
        $('#tblTramos').append('<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Monto desde</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Monto hasta</label></td></tr>');
        $('#tblTramos').append('<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="in1" type="text" value="0,0" size="10" disabled style="text-align:right; width:80%" maxlength="15" />&nbsp;<label class= "labelBE2"> </label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="in2" type="text" value="500" size="10" disabled style="text-align:right; width:80%" maxlength="15" />&nbsp;<label class="labelBE2"></label></td></tr>');
        $('#tblTramos').append('<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="in3" type="text" value="501" size="10" disabled style="text-align:right; width:80%" maxlength="15" />&nbsp;<label class= "labelBE2"> </label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="in4" type="text" value="1,000" size="10" disabled style="text-align:right; width:80%" maxlength="15" />&nbsp;<label class="labelBE2"></label></td></tr>');
        $('#tblTramos').append('<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="in5" type="text" value="1,001" size="10" disabled style="text-align:right; width:80%" maxlength="15" />&nbsp;<label class= "labelBE2"> </label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="in6" type="text" value="1,500" size="10" disabled style="text-align:right; width:80%" maxlength="15" />&nbsp;<label class="labelBE2"></label></td></tr>');
    }
    if ($('#cboSegmento').val() == "1") {
        $('#tblTramos').append('<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: #FF9D25" colspan="2"><label class="cabeceraBE2">Pequeña Empresa</label></td></tr>');
        $('#tblTramos').append('<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Monto desde</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Monto hasta</label></td></tr>');
        $('#tblTramos').append('<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="in7" type="text" value="1,501" size="10" disabled style="text-align:right; width:80%" maxlength="15" />&nbsp;<label class= "labelBE2"> </label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="in8" type="text" value="2,000" size="10" disabled style="text-align:right; width:80%" maxlength="15" />&nbsp;<label class="labelBE2"></label></td></tr>');
        $('#tblTramos').append('<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="in9" type="text" value="2,001" size="10" disabled style="text-align:right; width:80%" maxlength="15" />&nbsp;<label class= "labelBE2"> </label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="in10" type="text" value="2,500" size="10" disabled style="text-align:right; width:80%" maxlength="15" />&nbsp;<label class="labelBE2"></label></td></tr>');
        $('#tblTramos').append('<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="in11" type="text" value="2,501" size="10" disabled style="text-align:right; width:80%" maxlength="15" />&nbsp;<label class= "labelBE2"> </label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="in12" type="text" value="3,000" size="10" disabled style="text-align:right; width:80%" maxlength="15" />&nbsp;<label class="labelBE2"></label></td></tr>');
    }
    if ($('#cboSegmento').val() == "2") {
        $('#tblTramos').append('<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: #FF9D25" colspan="2"><label class="cabeceraBE2">Medianas Empresas</label></td></tr>');
        $('#tblTramos').append('<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Monto desde</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Monto hasta</label></td></tr>');
        $('#tblTramos').append('<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="in13" type="text" value="3,001" size="10" disabled style="text-align:right; width:80%" maxlength="15" />&nbsp;<label class= "labelBE2"> </label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="in14" type="text" value="3,500" size="10" disabled style="text-align:right; width:80%" maxlength="15" />&nbsp;<label class="labelBE2"></label></td></tr>');
        $('#tblTramos').append('<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="in15" type="text" value="3,501" size="10" disabled style="text-align:right; width:80%" maxlength="15" />&nbsp;<label class= "labelBE2"> </label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="in16" type="text" value="4,000" size="10" disabled style="text-align:right; width:80%" maxlength="15" />&nbsp;<label class="labelBE2"></label></td></tr>');
        $('#tblTramos').append('<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="in17" type="text" value="4,001" size="10" disabled style="text-align:right; width:80%" maxlength="15" />&nbsp;<label class= "labelBE2"> </label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="in18" type="text" value="4,500" size="10" disabled style="text-align:right; width:80%" maxlength="15" />&nbsp;<label class="labelBE2"></label></td></tr>');
    }
    if ($('#cboSegmento').val() == "3") {
        $('#tblTramos').append('<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: #FF9D25" colspan="2"><label class="cabeceraBE2">Grandes Empresas</label></td></tr>');
        $('#tblTramos').append('<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Monto desde</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Monto hasta</label></td></tr>');
        $('#tblTramos').append('<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="in19" type="text" value="4,501" size="10" disabled style="text-align:right; width:80%" maxlength="15" />&nbsp;<label class= "labelBE2"> </label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="in20" type="text" value="5,000" size="10" disabled style="text-align:right; width:80%" maxlength="15" />&nbsp;<label class="labelBE2"></label></td></tr>');
        $('#tblTramos').append('<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="in21" type="text" value="5,001" size="10" disabled style="text-align:right; width:80%" maxlength="15" />&nbsp;<label class= "labelBE2"> </label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="in22" type="text" value="5,500" size="10" disabled style="text-align:right; width:80%" maxlength="15" />&nbsp;<label class="labelBE2"></label></td></tr>');
        $('#tblTramos').append('<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="in23" type="text" value="5,501" size="10" disabled style="text-align:right; width:80%" maxlength="15" />&nbsp;<label class= "labelBE2"> </label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="in24" type="text" value="6,000" size="10" disabled style="text-align:right; width:80%" maxlength="15" />&nbsp;<label class="labelBE2"></label></td></tr>');
    }
    if ($('#cboSegmento').val() == "4") {
        $('#tblTramos').append('<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: #FF9D25" colspan="2"><label class="cabeceraBE2">Inmobiliaria</label></td></tr>');
        $('#tblTramos').append('<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Monto desde</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Monto hasta</label></td></tr>');
        $('#tblTramos').append('<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="in25" type="text" value="6,001" size="10" disabled style="text-align:right; width:80%" maxlength="15" />&nbsp;<label class= "labelBE2"> </label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="in26" type="text" value="6,500" size="10" disabled style="text-align:right; width:80%" maxlength="15" />&nbsp;<label class="labelBE2"></label></td></tr>');
        $('#tblTramos').append('<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="in27" type="text" value="6,501" size="10" disabled style="text-align:right; width:80%" maxlength="15" />&nbsp;<label class= "labelBE2"> </label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="in28" type="text" value="7,000" size="10" disabled style="text-align:right; width:80%" maxlength="15" />&nbsp;<label class="labelBE2"></label></td></tr>');
        $('#tblTramos').append('<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="in29" type="text" value="7,001" size="10" disabled style="text-align:right; width:80%" maxlength="15" />&nbsp;<label class= "labelBE2"> </label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="in30" type="text" value="7,500" size="10" disabled style="text-align:right; width:80%" maxlength="15" />&nbsp;<label class="labelBE2"></label></td></tr>');
    }
    if ($('#cboSegmento').val() == "5") {
        $('#tblTramos').append('<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: #FF9D25" colspan="2"><label class="cabeceraBE2">Institucional</label></td></tr>');
        $('#tblTramos').append('<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Monto desde</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Monto hasta</label></td></tr>');
        $('#tblTramos').append('<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="in31" type="text" value="7,501" size="10" disabled style="text-align:right; width:80%" maxlength="15" />&nbsp;<label class= "labelBE2"> </label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="in32" type="text" value="8,000" size="10" disabled style="text-align:right; width:80%" maxlength="15" />&nbsp;<label class="labelBE2"></label></td></tr>');
        $('#tblTramos').append('<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="in33" type="text" value="8,001" size="10" disabled style="text-align:right; width:80%" maxlength="15" />&nbsp;<label class= "labelBE2"> </label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="in34" type="text" value="8,500" size="10" disabled style="text-align:right; width:80%" maxlength="15" />&nbsp;<label class="labelBE2"></label></td></tr>');
        $('#tblTramos').append('<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="in35" type="text" value="8,501" size="10" disabled style="text-align:right; width:80%" maxlength="15" />&nbsp;<label class= "labelBE2"> </label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="in36" type="text" value="9,000" size="10" disabled style="text-align:right; width:80%" maxlength="15" />&nbsp;<label class="labelBE2"></label></td></tr>');
    }
    if ($('#cboSegmento').val() == "6") {
        $('#tblTramos').append('<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: #FF9D25" colspan="2"><label class="cabeceraBE2">Corporativa</label></td></tr>');
        $('#tblTramos').append('<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Monto desde</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Monto hasta</label></td></tr>');
        $('#tblTramos').append('<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="in37" type="text" value="9,001" size="10" disabled style="text-align:right; width:80%" maxlength="15" />&nbsp;<label class= "labelBE2"> </label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="in38" type="text" value="9,500" size="10" disabled style="text-align:right; width:80%" maxlength="15" />&nbsp;<label class="labelBE2"></label></td></tr>');
        $('#tblTramos').append('<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="in39" type="text" value="9,501" size="10" disabled style="text-align:right; width:80%" maxlength="15" />&nbsp;<label class= "labelBE2"> </label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="in40" type="text" value="10,000" size="10" disabled style="text-align:right; width:80%" maxlength="15" />&nbsp;<label class="labelBE2"></label></td></tr>');
        $('#tblTramos').append('<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="in41" type="text" value="10,001" size="10" disabled style="text-align:right; width:80%" maxlength="15" />&nbsp;<label class= "labelBE2"> </label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="in42" type="text" value="10,500" size="10" disabled style="text-align:right; width:80%" maxlength="15" />&nbsp;<label class="labelBE2"></label></td></tr>');
    }
}

function agregarTramos() {
    // Funcion para bajar el scroll
    var y = $(window).scrollTop();
    $('html, body').animate({ scrollTop: y + 150 }, 100) //milisegundo

    var len = $('#tblTramos tr').length;
    var auxDesde = $('#montDesde').val();
    var auxHasta = $('#montHasta').val();

    if (auxHasta > 0) {
        if (len == 0) {
            $('#tblTramos').append('<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: #FF9D25" colspan="2"><label class="cabeceraBE2">Tramos por Segmento</label></td></tr>');
            $('#tblTramos').append('<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Monto desde</label></td><td style="text-align: center; border: 1px solid; border-color: darkgray; background-color: lightgray"><label class="labelBE2">Monto hasta</label></td></tr>');
            $('#tblTramos').append('<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="trDesde1" disabled type="text" value="' + auxDesde + '" size="10" style="text-align:right; width:80%" maxlength="15"/>&nbsp;<label class="labelBE2"></label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="trHasta1" disabled type="text" value="' + auxHasta + '" size="10" style="text-align:right; width:80%" maxlength="15"/>&nbsp;<label class="labelBE2"></label></td></tr>');
        } else {
            len--;
            $('#tblTramos').append('<tr style="border: 1px solid; border-color: darkgray"><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="trDesde' + len + '" disabled type="text" value="' + auxDesde + '" size="10" style="text-align:right; width:80%" maxlength="15"/>&nbsp;<label class="labelBE2"></label></td><td style="text-align: right; border: 1px solid; border-color: darkgray"><input id="trHasta' + len + '" disabled type="text" value="' + auxHasta + '" size="10" style="text-align:right; width:80%" maxlength="15"/>&nbsp;<label class="labelBE2"></label></td></tr>');
        }
    } else {
        alert("Favor ingresar tramos");
    }
    
}

function editarTramos() {
    $("#tblTramos :input").prop("disabled", false);

    $("#btnAgregar").prop("disabled", true);
    $("#btnEditar").prop("disabled", true);
    $("#btnEliminar").prop("disabled", true);
    $("#btnGuardar").prop("disabled", false);
}

function guardarTramos() {
    
    alert("Datos guardados correctamente");
    $('#tblTramos :input').prop("disabled", true);

    $("#btnAgregar").prop("disabled", false);
    $("#btnEditar").prop("disabled", false);
    $("#btnEliminar").prop("disabled", false);
    $("#btnGuardar").prop("disabled", true);
}

function eliminarTramos() {
    alert("Se eliminaron los tramos correctamente");
    $('#tblTramos').empty();
    $('#btnEliminar').prop("disabled", true);
    $('#btnGuardar').prop("disabled", false);
}