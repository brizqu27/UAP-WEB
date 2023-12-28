var Barang = [
    '001', 'Barang_A', '10.000',
    '002', 'Barang_B', '20.000',
    '003', 'Barang_C', '30.000'
]

var kode = document.getElementById().Code
var Barang = document.getElementById().Brng

total_harga = jumlah_barang * harga
kembalian = harga_barang - total_harga 

function hitung() {
if (kode != "" && Barang != "") {
    alert('Total Pembayaran Anda : ' + total_harga)
    //masukkan input pembayaran
    prompt('Kembalian Uang Anda : ' + kembalian)
}
else {
    alert('Inputan Tidak Boleh Kosong !')
}
}