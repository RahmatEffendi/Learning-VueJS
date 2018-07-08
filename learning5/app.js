new Vue({
    el: '#app',
    data: {
        password: '',
        password2: '',
        keterangan: '',
        tampil: false
    },

    watch: {
        password2: 'ketik'
    },

    methods: {
        ketik: function() {
            if (this.password2 == this.password) {
                this.keterangan = "<b>Password Sama</b>";
                this.tampil = true;
            } else {
                this.keterangan = "<b>Password Tidak Sama</b>";
                this.tampil = false;
            }
        }
    }

});