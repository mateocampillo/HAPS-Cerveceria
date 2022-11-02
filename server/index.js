const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const methodOverride = require("method-override");

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());
app.use(methodOverride("_method"));

app.listen(port, () => {console.log(`Servidor abierto en el puerto ${port}`)});

//imports
const apiMain = require('./apiRoutes/apiMainRoutes');

// Index de rutas
app.use('/api/main', apiMain);