const express = require("express")
const app = express()

const member = require("./routers/member")
const paket = require("./routers/paket")
const users = require("./routers/users")
const transaksi = require("./routers/transaksi")


app.use ("/member", member)
app.use ("/paket", paket)
app.use ("/users", users)
app.use ("/transaksi", transaksi)


app.listen(8000, () => {
    console.log(`server run on port 8000`);
})