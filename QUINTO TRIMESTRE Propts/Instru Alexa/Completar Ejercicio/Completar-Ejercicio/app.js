let express=require("express")
let cors = require("cors")
let PORT = 5000

const app=express()

const RolesRoutes = require("./Routes/RolesRoutes");
const AccesoRoutes=require("./Routes/AccesoRoutes")

app.use(express.json())
app.use(cors())

app.use("/apiRegistrar",AccesoRoutes)
app.use("/apiRoles", RolesRoutes);

app.listen(PORT,()=>{
    console.log("servidor ejecutandose "+PORT)
})