/**
 * APP Js Tutorial 2
 */

var app = new Vue({
    el: '#app',
    data: {
        tampil: true,
        pesan: 'Selamat Anda sedang belajar Vue JS'
    }
});

var app2 = new Vue({
    el: '#app2',
    data: {
        tampil: false,
        pesan: 'Hello Guys'
    }
});

var app3 = new Vue({
    el: '#app3',
    data: {
        tampil: 'ada',
        pesan: 'Pesan Benar'
    }
})