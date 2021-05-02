const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

const mongoURL = 'mongodb://localhost:27017/Toko_Alat_Tulis'
mongoose.connect(mongoURL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('berhasil terhubung ke Database')
}).catch((err) => {
    console.log('gagal terhubung ke Database')
})

app.use(cors())
app.use(bodyParser.json({
    extended: true,
    limit: '20mb'
}))

app.use(bodyParser.urlencoded({
    extended: true,
    limit: '20mp'
}))

app.get('/',(req, res)=>{
    res.send('<h1>Toko Alat Tulis</h1>')
})

app.use('/barang', require('./routes/barang'))

app.listen(3000, function(){
    console.log("berhasil jalan")
})