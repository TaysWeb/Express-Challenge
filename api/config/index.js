const express = require('express')
const app = express();
const port = process.env.PORT || 8000 ;

const router = require("../config/")

require('dotenv').config();


//middleware
app.use(express.json()) ;
app.use(cors());

app.get( '/', (req, res) => {
    res.sendFile('index.html');
});
app.get( '/', (req, res) => {
    res.sendFile('<html><body><h4>hi there little human! </h4></body></html>');
})
//route

app.get('/users', (req,res) => {
        res.send(users);
});


//route
app.use("/", router);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
