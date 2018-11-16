function Limpiar(){
  document.getElementById('miformulario').reset();
}
// function validar(e) {
//   tecla = (document.all) ? e.keyCode : e.which;
//
//     var gramo = Number (document.getElementById('n2').value);
//     var libra = (gramo / 500);
//     var Total = Math.round(libra * 3800);
//     // var dorl = Math.round(Total / 3018); //REDONDEAR SIFRA
//
//     document.getElementById('res2').innerHTML = libra;
//     document.getElementById('res3').innerHTML = Total;
// }

// function calcular() {
//   var pesoP =Number(document.getElementById('n1').value);
//   var resp = (pesoP * 3700);
//
//   document.getElementById('res').innerHTML = resp;
// }

function calcularL() {
  var gramo = Number (document.getElementById('n2').value);
  var libra = (gramo / 500);
  var Total = Math.round(libra * 3800);
  // var dorl = Math.round(Total / 3018); //REDONDEAR SIFRA

  document.getElementById('res2').innerHTML = libra;
  document.getElementById('res3').innerHTML = Total;
  // document.getElementById('res4').innerHTML = dorl;
}
