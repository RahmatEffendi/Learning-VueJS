/**
 * Computed, Method dan Watcher
 */
new Vue({
    el: '#app',
    data: {
        bil1: 10,
        bil2: 20
    },
    //Computed
    computed: {
        penjumlahan: function() {
            return this.bil1 + this.bil2;
        },
        pengurangan: function() {
            return this.bil1 - this.bil2;
        },
        perkalian: function() {
            return this.bil1 * this.bil2;
        },
        pembagian: function() {
            return this.bil1 / this.bil2;
        }
    }
});

//Methods
new Vue({
    el: '#app2',
    data: {
        bil1: 20,
        bil2: 3,
        penjumlahan: 0,
        pengurangan: 0,
        perkalian: 0,
        pembagian: 0
    },
    methods: {
        proses() {
            this.penjumlahan = this.bil1 + this.bil2;
            this.pengurangan = this.bil1 - this.bil2;
            this.perkalian = this.bil1 * this.bil2;
            this.pembagian = this.bil1 / this.bil2;
        }
    }
});