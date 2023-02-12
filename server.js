const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
app.use("/api/admin",require('./routes/routesadmin'))
 app.use("/api/user",require('./routes/routesuser'))

app.listen(port)