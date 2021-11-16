const express = require("express")
const app = express()


app.use(express.json())


const models = require("../models/index")

const paket = models.paket

app.get("/", async (request,response)=>{
    let dataPaket = await paket.findAll()

    return response.json(dataPaket)
})

//endpoint add new paket
app.post("/", (request, response)=>{
    let newPaket = {
        jenis_paket : request.body.jenis_paket,
        harga : request.body.harga
    }

    paket.create(newPaket)
    .then(result =>{
        response.json({
            message:`Data Paket berhasil ditambahkan!`
        })
    })
    .catch(error =>{
        response.json({
            message: error.message
        })
    })
})

//endpoint update paket
app.put("/:id_paket", (request,response)=>{
    //menampung data yang akan diubah
    let data ={
        jenis_paket: request.body.jenis_paket,
        harga: request.body.harga,
    }

    let parameter = {
        id_paket: request.params.id_paket
    }
    
    //proses update
    paket.update(data,{where: parameter})
    .then(result => {
        return response.json({
            message: `Data Paket berhasil diubah!`,
            data:result
        })
    })
    .catch(error =>{
        return response.json({
            message: error.message
        })
    })
})

//endpoint delete paket
app.delete("/:id_paket", (request,response) => {
    // tampung data yg akan dihapus
    let parameter = {
        id_paket: request.params.id_paket
    }

    // proses hapus
    paket.destroy({where: parameter})
    .then(result => {
        return response.json({
            message: `Data Paket berhasil dihapus`
        })
    })
    .catch(error => {
        return response.json({
            message: error.message
        })
    })
})

module.exports = app