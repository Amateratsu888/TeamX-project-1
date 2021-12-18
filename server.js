const express = require("express")
const app = express()
const cors = require("cors")


// importez les variable d'environnemt et la connection a la base de donne
require("dotenv").config({ path: "./config/.env" })
require("./config/db_connect")

//importez les routes pour user et product
const productsRoutes = require("./routes/product.routes")
const usersRoutes = require("./routes/user.routes")

// middlewares de parametrage
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

// middlewares pour les routes de user et product 
app.use('/API', productsRoutes)
app.use('/API', usersRoutes)

// activation de l'api  en local
app.listen(process.env.PORT, () => {
    console.log(`API connect to http://localhost:${process.env.PORT}`);
})