var angka = prompt('masukkan angka : ');
if (angka % 2 == 0) {
    alert('bilangan ' + angka + ' adalah bilangan genap');
} else if (angka % 2 == 1) {
    alert('bilangan ' + angka + ' adalah bilangan ganjil');
} else {
    alert('bilangan yang anda masukkan bukan angka!');
}