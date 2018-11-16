function calcularI() {
  var precioP = Number (document.getElementById('n2').value);
  var Libra = (precioP / 3800);
  var Kg = Math.round(Libra * 500);
  // var dorl = Math.round(Total / 3018); //REDONDEAR SIFRA

  document.getElementById('res2').innerHTML = Libra;
  document.getElementById('res3').innerHTML = Kg;

  // document.getElementById('res4').innerHTML = dorl;


}
