/**
	App JavaScript
*/

var app = new Vue({
  el: '#app',
  data: {
    pesan: 'Hallo Selamat Belajar Vue',
    pesan1: '<b>Belajar Menggunakan v-html</b>',
    pesan2 : 'belajar menggungkan Mustache',
    pesan3 : 'Hallo tag link <a href="https://www.google.com/">Google</a>' 
  }
});

var app2 = new Vue({
	el: "#app2",
	data: {
		text: 'Ini contoh text',
		bilbulat : 10,
		bildes : 0.983,
		benar : true,
		salah : false,
		array : [1, 2, 3, 4, 5]
	}
});

var app3 = new Vue({
	el: "#app3",
	data:{
		tampil: true,
		pesan: 'Nilai Yang di Proses Benar',
		pesan1: 'Nilai keluaran dari V-show'
	}
});

var app4 = new Vue({
	el: "#app4",
	data:{
		tampil: false,
		pesan_benar: 'Pesan ini Benar',
		pesan_salah: 'Pesan ini Salah'
	}
})