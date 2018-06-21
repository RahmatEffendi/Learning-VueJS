/**
 * APP JS untuk Tutorial 1
 */

var app = new Vue({
    el: '#app', //#app merupakan element id dari <div> pada html sebelumnya
    data: {
        pesan: 'Assalamualaikum Selamat Belajar Vue JS, Pesan ini dikeluarkan dengan menggunakan Mustached',
        pesan1: 'Hi, Greeating, this message will display with v-text',
        pesan2: '<b>Hello, v-html here</b>',
        bulat: 10,
        pecahan: 12.34,
        array: ['1', '2', '3']
    }
});