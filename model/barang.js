const mongoose = require('mongoose')
const Schema = mongoose.Schema

const barangSchema = new Schema({
    ID_barang: {
        type: String
    },
    Nama_Barang:{
        type: String
    },
    Harga:{
        type: String
    }

})

module.exports = mongoose.model('Barang', barangSchema)