alert('selamat datang ....');
var lagi = true;
while (lagi === true) {
  var nama = prompt('masukkan nama kamu : ');
  lert('halo' + " " + nama);

  lagi = confirm('coba lagi ?');

  if (lagi) {
    lagi;
  } else if (lagi === false) {
    alert('terima kasih telah mengunjungi web kami :)')
  }

}