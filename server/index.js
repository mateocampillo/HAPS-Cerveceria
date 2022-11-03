const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const methodOverride = require("method-override");
const showReqBody = require('./middlewares/ShowReqBody');
const bcrypt = require('bcryptjs');

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());
app.use(methodOverride("_method"));
app.use(showReqBody);

app.listen(port, () => {console.log(`Servidor abierto en el puerto ${port}`)});

//imports
const apiMain = require('./routes/apiRoutes/apiMainRoutes');

// Index de rutas
app.use('/api/main', apiMain);
app.use('/auth/token', (req, res) => {
    let body = JSON.parse(req.body);
    if(bcrypt.compareSync(body.username,'$2a$12$rTdDTjNPvOQre1nl6ruGMOOFL1gzt.8p/.hkGoNF32Z/5J5bVXGuW') && bcrypt.compareSync(body.password, '$2a$12$m28Qs9s7CbvtXV4vxhhnpe7NZN.fL5jQS5t1X/cCETc5/QYRZNrL.')){
        res.send({
            token: '$2a$12$9GRCBgilQ0et48Z/Q.LFV.YyKEv4j2wa0lDnZiJ1F9l.TSS.nhIXa'
        })
    }
})