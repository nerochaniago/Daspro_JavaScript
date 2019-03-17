//variabel nilai hasil
var hasil = '';
//halaman awal
alert('tebak angka dari 1-10\nkamu punya 3 kesempatan');
//function random 1-10
var random = Math.floor(Math.random() * 10) + 1;

var index = true;
var kesempatan = 3;

switch (random) {
    case 1:
        random = 1;
        break;
    case 2:
        random = 2;
        break;
    case 3:
        random = 3;
        break;
    case 4:
        random = 4;
        break;
    case 5:
        random = 5;
        break;
    case 6:
        random = 6;
        break;
    case 7:
        random = 7;
        break;
    case 8:
        random = 8;
        break;
    case 9:
        random = 9;
        break;
    case 10:
        random = 10;
        break;
}

console.log(random);
//main program
while (index) {
    var masuk = parseInt(prompt('masukkan angka tebakan : '));
    if (masuk === random) {
        hasil = 'anda benar! \nangka yang di cari adalah : ' + masuk;
        alert(hasil);
        alert('terimakasih');
        index = false;
    } else if (masuk > 10) {
        kesempatan -= 1;
        if (kesempatan < 1) {
            alert('angka salah bukan dari 1-10! \n kesempatan habis.')
            index = false;
        } else if (kesempatan >= 1) {
            hasil = ('angka yang dimasukkan salah harus diantara (1-10) ulangi dengan sisa kesempatan . ' + kesempatan);
            alert(hasil);
        }
    } else if (masuk < random || masuk > random) {
        kesempatan -= 1;
        if (kesempatan < 1) {
            hasil = ('terlalu RENDAH!\n kesempatan anda habis');
            var gagal = ('anda GAGAL!\n angka yang dicari adalah : ' + random);
            alert(hasil);
            alert(gagal);
            index = false;
        } else if (kesempatan >= 1) {
            hasil = ('terlalu RENDAH! \nayo masih ada ' + kesempatan + 'kesempatan lagi.');
            alert(hasil);
        }
    }
    if (!masuk) {
        index = false;
    }
}